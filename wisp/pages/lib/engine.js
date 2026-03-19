import { SUGGESTIONS } from './data'

// string key from the current state
export function contextKey(state) {
  return [state.cat, state.weather || '', state.mood || '', state.people || '',
    state.time || '', state.energy || '', state.health || ''].join('|')
}


export function contextLabel(state) {
  const parts = ['weather', 'mood', 'people', 'time', 'energy', 'health']
    .map(k => state[k])
    .filter(Boolean)
  return parts.length ? parts.join(', ') : 'no filters'
}


function scoreItem(item, state) {
  let score = 0
  const fields = ['weather', 'mood', 'people', 'time', 'energy', 'health']
  for (const f of fields) {
    if (!state[f]) continue
    const arr = item[f] || []
    if (arr.includes(state[f])) score += 2
    else if (arr.includes('any')) score += 1
  }
  return score
}

/** Shuffle an array in-place (Fisher-Yates). */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/**
 * Return suggestions for the current state, excluding already-seen names.
 * Items are sorted by score (desc); equal-score items are shuffled for variety.
 */
export function getPool(state, exclude = []) {
  const pool = SUGGESTIONS[state.cat] || []
  const scored = pool
    .filter(item => !exclude.includes(item.n))
    .map(item => ({ item, score: scoreItem(item, state) }))
    .sort((a, b) => b.score - a.score)

  if (!scored.length) return []

  // Shuffle within same-score groups
  const result = []
  let i = 0
  while (i < scored.length) {
    let j = i
    while (j < scored.length && scored[j].score === scored[i].score) j++
    const group = scored.slice(i, j).map(x => x.item)
    shuffle(group)
    result.push(...group)
    i = j
  }
  return result
}

// Build a personalized string
export function buildReason(item, state) {
  if (state.mood === 'tired' || state.energy === 'low') {
    return item.r + ' Easy on the energy.'
  }
  if (state.mood === 'stressed') {
    return item.r + ' Good for clearing your head.'
  }
  if (state.people === 'group') {
    return item.r + ' Works great for a group.'
  }
  if (['rainy', 'cold', 'snowy'].includes(state.weather)) {
    return item.r + ' Perfect for staying in.'
  }
  return item.r
}

/** Build the ICD insight message based on past reactions. */
export function buildInsight(reactions) {
  if (!reactions.length) return "Tell me what you think and I'll narrow it down."
  const liked  = reactions.filter(r => r.reaction === 'yes')
  const noped  = reactions.filter(r => r.reaction === 'no')
  const maybes = reactions.filter(r => r.reaction === 'alright')
  if (liked.length) return `You seem drawn to ${liked.map(r => r.n).join(' & ')}. Getting closer...`
  if (noped.length >= 2 && !maybes.length) return "You're being picky — that's fine. Let's keep looking."
  if (maybes.length) return '"Alright" is a start. Something better is coming.'
  if (noped.length >= 1) return "Good to know what you don't want. Narrowing in..."
  return "Keep reacting and I'll figure out your vibe."
}

/** Format current time as HH:MM */
export function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
