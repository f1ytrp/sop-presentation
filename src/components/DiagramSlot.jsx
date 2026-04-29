/**
 * DiagramSlot — Reusable placeholder for later diagram/image insertion.
 *
 * Props:
 *   type    – 'right' | 'full' | 'inline'  (controls sizing)
 *   label   – description text for the placeholder
 *   filled  – boolean, true when a real diagram component is provided
 *   children – optional diagram/image component to render inside the slot
 */
import React from 'react';

const placeholderIcon = (
  <svg
    className="diagram-slot__icon"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="6" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="1.4" />
    <path d="M2 22l8-6 6 4 8-8 10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="14" r="3" stroke="currentColor" strokeWidth="1.2" />
  </svg>
);

export default function DiagramSlot({ type = 'right', label, filled = false, children }) {
  const classNames = [
    'diagram-slot',
    type === 'full' ? 'diagram-slot--full' : '',
    filled ? 'diagram-slot--filled' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={classNames} data-diagram-type={type}>
      {children || (
        <>
          {placeholderIcon}
          <span className="diagram-slot__label">{label || 'Reserved for figure'}</span>
        </>
      )}
    </div>
  );
}
