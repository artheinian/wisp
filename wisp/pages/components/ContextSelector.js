'use client'

import { CATEGORIES, CONTEXT_FIELDS } from '../lib/suggestions'

/**
 * ContextSelector
 *
 * Renders:
 *   1. Category selector (Food / Activity / Social / Bored)
 *   2. Context filter grid (weather, mood, people, time, energy, health)
 *
 * Props:
 *   filters        {object}   — current filter state from parent
 *   onCatChange    {function} — called with new category id string
 *   onFilterToggle {function} — called with (key, value) to toggle a filter
 */
export default function ContextSelector({ filters, onCatChange, onFilterToggle }) {
  return (
    <>
      {/* ── Step 1: Category ───────────────────────────────────────────────── */}
      <div className="step-label">01 — what are you deciding?</div>
      <div className="categories">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            className={`cat-btn ${filters.cat === cat.id ? 'active' : ''}`}
            onClick={() => onCatChange(cat.id)}
          >
            <span className="cat-icon">{cat.emoji}</span>
            <span className="cat-name">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* ── Step 2: Context filters ─────────────────────────────────────────── */}
      <div className="step-label">02 — set the vibe</div>
      <div className="context-grid">
        {CONTEXT_FIELDS.map(field => (
          <div key={field.key} className="ctx-card">
            <div className="ctx-label">
              {field.emoji} {field.label}
            </div>
            <div className="pills">
              {field.options.map(opt => (
                <button
                  key={opt.value}
                  className={`pill ${filters[field.key] === opt.value ? 'active' : ''}`}
                  onClick={() => onFilterToggle(field.key, opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
