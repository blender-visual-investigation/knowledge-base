import React from 'react';
import styles from './styles.module.css';
import { FEATURE_CARD_COLORS, getTextColor } from './colors';

/**
 * FeatureCard component for displaying key features in a consistent styled card format
 * @param {Object} props
 * @param {string} props.title - The card title
 * @param {string} props.color - Color name from palette ('green', 'blue', 'red', etc.) or custom hex color
 * @param {string} props.headerColor - (deprecated, use 'color' instead) Background color for the header
 * @param {string} props.textColor - Text color for the header (auto-determined if not provided)
 * @param {string} props.icon - Font Awesome icon class (e.g., 'fa-solid fa-book')
 * @param {string} props.variant - Style variant ('default', 'glassmorphism', 'gradient', 'material', 'minimal', 'premium')
 * @param {React.ReactNode} props.children - Card content
 */
export default function FeatureCard({ 
  title, 
  color,
  headerColor, // deprecated but kept for backward compatibility
  textColor,
  icon,
  variant = 'default',
  children 
}) {
  // Support both new 'color' prop and legacy 'headerColor' prop
  const bgColor = color 
    ? (FEATURE_CARD_COLORS[color] || color) // Named color or custom hex
    : (headerColor || FEATURE_CARD_COLORS.blue); // Fallback to legacy prop or default
  
  const finalTextColor = textColor || getTextColor(bgColor);
  
  // Map variant to CSS class names
  const variantClasses = {
    default: { card: styles.card, header: styles.cardHeader, title: styles.cardTitle, body: styles.cardBody },
    glassmorphism: { card: styles.cardGlassmorphism, header: styles.cardHeaderGlassmorphism, title: styles.cardTitleGlassmorphism, body: styles.cardBodyGlassmorphism },
    gradient: { card: styles.cardGradient, header: styles.cardHeaderGradient, title: styles.cardTitleGradient, body: styles.cardBodyGradient, icon: styles.cardIconGradient },
    material: { card: styles.cardMaterial, header: styles.cardHeaderMaterial, title: styles.cardTitleMaterial, body: styles.cardBodyMaterial, icon: styles.cardIconMaterial },
    minimal: { card: styles.cardMinimal, header: styles.cardHeaderMinimal, title: styles.cardTitleMinimal, body: styles.cardBodyMinimal, icon: styles.cardIconMinimal },
    premium: { card: styles.cardPremium, header: styles.cardHeaderPremium, title: styles.cardTitlePremium, body: styles.cardBodyPremium, icon: styles.cardIconPremium }
  };
  
  const classes = variantClasses[variant] || variantClasses.default;
  
  return (
    <div className={classes.card} style={{ '--header-color': bgColor }}>
      <div 
        className={classes.header} 
        style={{
          backgroundColor: bgColor
        }}
      >
        {icon && (
          <div className={classes.icon || styles.cardIcon}>
            <i className={icon}></i>
          </div>
        )}
        <h4 className={classes.title} style={{ color: finalTextColor }}>{title}</h4>
      </div>
      <div className={classes.body}>
        {children}
      </div>
    </div>
  );
}
