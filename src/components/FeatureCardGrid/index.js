import React from 'react';
import styles from './styles.module.css';

/**
 * FeatureCardGrid component for displaying a grid of feature cards
 * @param {Object} props
 * @param {React.ReactNode} props.children - FeatureCard components to display in grid
 */
export default function FeatureCardGrid({ children }) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}
