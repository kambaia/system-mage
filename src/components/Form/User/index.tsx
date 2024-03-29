import React from 'react'

export default function UserForm() {
  return (
    <div>
      <svg viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto" className="waves">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7"></use>
          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"></use>
          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)"></use>
          <use href="#gentle-wave" x="48" y="7" fill="#fff"></use>
        </g>
      </svg>
    </div>
  )
}
