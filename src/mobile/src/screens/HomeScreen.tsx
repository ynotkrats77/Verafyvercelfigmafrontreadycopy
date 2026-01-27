import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { COLORS, TYPOGRAPHY, SPACING } from '../config/theme';
import { ThemeSelector } from '../components/ThemeSelector';
import { Sparkles, TrendingUp, Shield, Zap, ArrowRight, BarChart3, Check } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

export function HomeScreen({ navigation }: any) {
  const { isDark, theme, colors } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Header / Theme Selector */}
        <View style={styles.header}>
          <ThemeSelector />
        </View>

        {/* Hero Section */}
        <View style={styles.section}>
          <View style={[styles.badge, { backgroundColor: isDark ? 'rgba(34, 211, 238, 0.1)' : 'rgba(6, 182, 212, 0.1)', borderColor: COLORS.cyan.DEFAULT }]}>
            <Sparkles size={16} color={COLORS.cyan.DEFAULT} />
            <Text style={[styles.badgeText, { color: isDark ? '#fff' : '#0f172a' }]}> AI-Powered Portfolio Intelligence</Text>
          </View>

          <Text style={[styles.heroTitle, { color: colors.text.primary }]}>
            Meet <Text style={{ color: COLORS.cyan.DEFAULT }}>Vera</Text>
          </Text>
          
          <Text style={[styles.heroSubtitle, { color: colors.text.secondary }]}>
            Your AI assistant delivering institutional-grade portfolio insights in plain English.
          </Text>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.primaryButton, { backgroundColor: COLORS.cyan.DEFAULT }]}>
              <Text style={styles.primaryButtonText}>Get Started Free*</Text>
              <ArrowRight size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Founding Member Special - CRITICAL REQUIREMENT */}
        <LinearGradient
          colors={isDark ? ['#1e293b', '#0f172a'] : ['#ffffff', '#f8fafc']}
          style={[styles.card, { borderColor: isDark ? '#334155' : '#e2e8f0' }]}
        >
          <View style={styles.foundingMemberBadge}>
            <Zap size={16} color="#fff" />
            <Text style={styles.foundingMemberText}> FOUNDING MEMBER SPECIAL </Text>
            <Zap size={16} color="#fff" />
          </View>

          <Text style={[styles.cardTitle, { color: colors.text.primary }]}>50% off for life.</Text>
          <Text style={[styles.cardText, { color: colors.text.secondary }]}>Lock in before June 30, 2026.</Text>
          
          {/* Pricing Tiers */}
          <View style={styles.pricingContainer}>
            {/* Starter - $5 */}
            <View style={[styles.tierCard, { backgroundColor: isDark ? '#1e293b' : '#ffffff', borderColor: isDark ? '#475569' : '#cbd5e1' }]}>
              <Text style={[styles.tierPrice, { color: COLORS.tiers.starter }]}>$5</Text>
              <Text style={[styles.tierLabel, { color: colors.text.secondary }]}>Starter</Text>
              
              {/* Tax Pack Add-On - Orange Separator */}
              <View style={[styles.taxPackSeparator, { borderTopColor: isDark ? 'rgba(249, 115, 22, 0.3)' : '#fed7aa' }]} />
              <View style={styles.taxPackBadge}>
                <Check size={12} color="#f97316" />
                <Text style={[styles.taxPackText, { color: isDark ? '#fb923c' : '#ea580c' }]}>
                  {' '}+$30/yr{'\n'}Tax Pack
                </Text>
              </View>
            </View>

            {/* Standard - $10 */}
            <View style={[styles.tierCard, { backgroundColor: isDark ? '#1e293b' : '#ffffff', borderColor: isDark ? '#3b82f6' : '#93c5fd' }]}>
              <View style={styles.popularBadge}>
                <Text style={styles.popularText}>POPULAR</Text>
              </View>
              <Text style={[styles.tierPrice, { color: COLORS.tiers.standard }]}>$10</Text>
              <Text style={[styles.tierLabel, { color: colors.text.secondary }]}>Standard</Text>
              
              {/* Tax Pack Add-On - Orange Separator */}
              <View style={[styles.taxPackSeparator, { borderTopColor: isDark ? 'rgba(249, 115, 22, 0.3)' : '#fed7aa' }]} />
              <View style={styles.taxPackBadge}>
                <Check size={12} color="#f97316" />
                <Text style={[styles.taxPackText, { color: isDark ? '#fb923c' : '#ea580c' }]}>
                  {' '}+$20/yr{'\n'}Tax Pack
                </Text>
              </View>
            </View>

            {/* Pro - $20 */}
            <View style={[styles.tierCard, { backgroundColor: isDark ? '#1e293b' : '#ffffff', borderColor: isDark ? '#a855f7' : '#d8b4fe' }]}>
              <View style={[styles.bestValueBadge]}>
                <Text style={styles.bestValueText}>BEST VALUE</Text>
              </View>
              <Text style={[styles.tierPrice, { color: COLORS.tiers.pro }]}>$20</Text>
              <Text style={[styles.tierLabel, { color: colors.text.secondary }]}>Pro</Text>
              
              {/* Tax Pack Included */}
              <View style={[styles.taxIncludedBadge, { backgroundColor: isDark ? 'rgba(34, 211, 238, 0.1)' : '#cffafe' }]}>
                <Check size={12} color={COLORS.cyan.DEFAULT} />
                <Text style={[styles.taxIncludedText, { color: COLORS.cyan.DEFAULT }]}>
                  {' '}Tax Pack{'\n'}Included
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* Features */}
        <View style={styles.section}>
           <Text style={[styles.sectionTitle, { color: colors.text.primary }]}>Why Verafy?</Text>
           
           {/* Feature 1 */}
           <View style={[styles.featureCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
             <Sparkles size={32} color={COLORS.cyan.DEFAULT} style={{ marginBottom: 12 }} />
             <Text style={[styles.featureTitle, { color: colors.text.primary }]}>AI-Powered Insights</Text>
             <Text style={[styles.featureText, { color: colors.text.secondary }]}>Instant portfolio analysis in plain English.</Text>
           </View>

           {/* Feature 2 */}
           <View style={[styles.featureCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
             <TrendingUp size={32} color={COLORS.cyan.DEFAULT} style={{ marginBottom: 12 }} />
             <Text style={[styles.featureTitle, { color: colors.text.primary }]}>Real-time Data</Text>
             <Text style={[styles.featureText, { color: colors.text.secondary }]}>Live market data and performance metrics.</Text>
           </View>
           
           {/* Feature 3 */}
           <View style={[styles.featureCard, { backgroundColor: colors.surface, borderColor: colors.border }]}>
             <Shield size={32} color={COLORS.cyan.DEFAULT} style={{ marginBottom: 12 }} />
             <Text style={[styles.featureTitle, { color: colors.text.primary }]}>Enterprise Security</Text>
             <Text style={[styles.featureText, { color: colors.text.secondary }]}>Bank-grade encryption and ASIC compliance.</Text>
           </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: SPACING.mobile,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  section: {
    marginBottom: 32,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  heroTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  heroSubtitle: {
    fontSize: 18,
    lineHeight: 26,
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  card: {
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    marginBottom: 32,
    alignItems: 'center',
  },
  foundingMemberBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f97316', // Orange
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 16,
  },
  foundingMemberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 16,
    marginBottom: 24,
    textAlign: 'center',
  },
  pricingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 8,
  },
  tierCard: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    flex: 1,
    position: 'relative',
  },
  tierPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  tierLabel: {
    fontSize: 11,
    marginTop: 4,
    marginBottom: 12,
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  popularBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: '#3b82f6',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  popularText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  bestValueBadge: {
    position: 'absolute',
    top: -8,
    backgroundColor: '#a855f7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bestValueText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  taxPackSeparator: {
    borderTopWidth: 1.5,
    width: '100%',
    marginTop: 12,
    paddingTop: 12,
  },
  taxPackBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taxPackText: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 14,
  },
  taxIncludedBadge: {
    marginTop: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.cyan.DEFAULT,
  },
  taxIncludedText: {
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 14,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  featureCard: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 20,
  },
});