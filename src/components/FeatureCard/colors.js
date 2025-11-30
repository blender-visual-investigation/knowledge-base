/**
 * Centralized color palette for FeatureCard components
 * Edit these values to change colors across the entire site
 */

export const FEATURE_CARD_COLORS = {
  // Primary card colors (softened for better visual balance)
  green: '#5FD068',
  blue: '#4A8FC7',
  red: '#E65C4F',
  purple: '#8e44ad',
  orange: '#ff9f2c',
  
  // Text colors for headers
  lightText: 'white',
  darkText: '#1a1a1a',
};

/**
 * Helper function to get the appropriate text color based on background
 * Light backgrounds (green) use dark text, others use light text
 */
export function getTextColor(backgroundColor) {
  const lightBackgrounds = [FEATURE_CARD_COLORS.green];
  return lightBackgrounds.includes(backgroundColor) 
    ? FEATURE_CARD_COLORS.darkText 
    : FEATURE_CARD_COLORS.lightText;
}
