/**
 * GlassCard — Frosted glass panel per the design system.
 *
 * Props:
 *   variant  – 'default' | 'compact' | 'subtle'
 *   className – additional CSS classes
 *   children
 */
import React from 'react';

export default function GlassCard({ variant = 'default', className = '', children }) {
  const variantClass = variant === 'compact'
    ? 'glass-card--compact'
    : variant === 'subtle'
    ? 'glass-card--subtle'
    : '';

  return (
    <div className={`glass-card ${variantClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
