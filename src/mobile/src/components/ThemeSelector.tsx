import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import { COLORS } from '../config/theme';

export function ThemeSelector() {
  const { theme, setTheme, isDark } = useTheme();

  const themes = [
    { id: 'light', label: 'Light', color: COLORS.cyan.DEFAULT },
    { id: 'dark', label: 'Dark', color: COLORS.purple.DEFAULT },
    { id: 'corporate', label: 'Corp', color: COLORS.tiers.standard },
  ];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDark ? COLORS.dark.text.secondary : COLORS.light.text.secondary }]}>
        Select Theme
      </Text>
      <View style={styles.buttonContainer}>
        {themes.map((t) => (
          <TouchableOpacity
            key={t.id}
            style={[
              styles.button,
              { 
                borderColor: theme === t.id ? t.color : 'transparent',
                backgroundColor: isDark ? COLORS.dark.surface : COLORS.light.surface
              }
            ]}
            onPress={() => setTheme(t.id as any)}
          >
            <View style={[styles.dot, { backgroundColor: t.color }]} />
            <Text style={[
              styles.label, 
              { 
                color: isDark ? COLORS.dark.text.primary : COLORS.light.text.primary,
                fontWeight: theme === t.id ? 'bold' : 'normal'
              }
            ]}>
              {t.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 12,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  label: {
    fontSize: 14,
  },
});
