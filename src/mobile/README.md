# Verafy AI Mobile App

This is the React Native (Expo) version of the Verafy AI platform.

## 🚀 Getting Started

This project is designed to be run locally using Expo Go or a development build.
**Note:** This code cannot be run directly in the web container environment. You must download the `/mobile` directory to your local machine.

### Prerequisites

- Node.js (v18+)
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator

### Installation

1. Navigate to this directory:
   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the project:
   ```bash
   npx expo start
   ```

## 📱 Project Structure

- `App.tsx`: Main entry point with Navigation and Theme Provider.
- `src/config/theme.ts`: Ported theme configuration (matches web).
- `src/context/ThemeContext.tsx`: Manages Dark/Light/Corporate themes.
- `src/screens/`: React Native screens (converted from web pages).
- `src/components/`: Reusable native components.

## ⚠️ Critical Constraints (Do Not Change)

As per the project requirements, the following rules are hard-coded:

1. **Pricing**: Founding Member rates are strictly **$5 / $10 / $20**.
2. **Themes**: 3-Theme System (Light, Dark, Corporate) is implemented.
3. **Emails**: Only approved emails (support@, enquiries@, accounts@) should be used.

## 🔄 Conversion Status

- ✅ **Core Infrastructure**: Theme, Navigation, Config
- ✅ **Home Screen**: Hero, Pricing, Feature Highlights
- ⏳ **Other Screens**: To be converted iteratively

## 🛠 Tech Stack

- **React Native**: Core framework
- **Expo**: Development tools
- **React Navigation**: Routing
- **Lucide React Native**: Icons
- **Expo Linear Gradient**: Gradients
