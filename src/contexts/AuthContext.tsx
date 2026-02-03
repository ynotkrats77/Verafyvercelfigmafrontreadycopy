import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthUser {
  id: string;
  email: string;
  name?: string;
  plan: 'starter' | 'standard' | 'pro';
  addOns: string[];
}

interface AuthContextType {
  user: AuthUser | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | Error | null }>;
  signUp: (email: string, password: string, name?: string) => Promise<{ error: AuthError | Error | null }>;
  signOut: () => Promise<void>;
  isSupabaseEnabled: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo user for when Supabase is not configured
const createDemoUser = (email: string): AuthUser => ({
  id: 'demo-' + Date.now(),
  email,
  name: email.split('@')[0],
  plan: 'pro',
  addOns: ['tax-pack'],
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const isSupabaseEnabled = isSupabaseConfigured();

  useEffect(() => {
    // Check for existing session
    const initAuth = async () => {
      if (isSupabaseEnabled && supabase) {
        // Get Supabase session
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (currentSession?.user) {
          setSession(currentSession);
          setUser({
            id: currentSession.user.id,
            email: currentSession.user.email || '',
            name: currentSession.user.user_metadata?.name || currentSession.user.email?.split('@')[0],
            plan: 'pro', // Default plan - would come from database in production
            addOns: ['tax-pack'],
          });
        }

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, newSession) => {
            if (newSession?.user) {
              setSession(newSession);
              setUser({
                id: newSession.user.id,
                email: newSession.user.email || '',
                name: newSession.user.user_metadata?.name || newSession.user.email?.split('@')[0],
                plan: 'pro',
                addOns: ['tax-pack'],
              });
            } else {
              setSession(null);
              setUser(null);
            }
          }
        );

        setIsLoading(false);
        return () => subscription.unsubscribe();
      } else {
        // Demo mode - check localStorage
        const storedAuth = localStorage.getItem('verafy_auth');
        if (storedAuth) {
          try {
            const authData = JSON.parse(storedAuth);
            if (authData.isAuthenticated) {
              setUser({
                id: authData.id,
                email: authData.email,
                name: authData.name,
                plan: authData.plan || 'pro',
                addOns: authData.addOns || ['tax-pack'],
              });
            }
          } catch (e) {
            console.error('Failed to parse stored auth:', e);
          }
        }
        setIsLoading(false);
      }
    };

    initAuth();
  }, [isSupabaseEnabled]);

  const signIn = async (email: string, password: string) => {
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error };
    } else {
      // Demo mode
      const demoUser = createDemoUser(email);
      localStorage.setItem('verafy_auth', JSON.stringify({
        ...demoUser,
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
      }));
      setUser(demoUser);
      return { error: null };
    }
  };

  const signUp = async (email: string, password: string, name?: string) => {
    if (isSupabaseEnabled && supabase) {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });
      return { error };
    } else {
      // Demo mode - same as sign in
      const demoUser = createDemoUser(email);
      if (name) demoUser.name = name;
      localStorage.setItem('verafy_auth', JSON.stringify({
        ...demoUser,
        isAuthenticated: true,
        loginTime: new Date().toISOString(),
      }));
      setUser(demoUser);
      return { error: null };
    }
  };

  const signOut = async () => {
    if (isSupabaseEnabled && supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem('verafy_auth');
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        isAuthenticated: !!user,
        signIn,
        signUp,
        signOut,
        isSupabaseEnabled,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
