import { useRef, useState } from 'react'
import Header from './components/Header'
import ContextSelector from './components/ContextSelector'
import { contextKey, contextLabel, getPool, nowTime } from './lib/engine'

export default function WispPage() {

  const INITIAL_FILTERS = {
    cat: 'food',
    weather: null,
    mood: null,
    people: null,
    time: null,
    energy: null,
    health: null,
  }
  const [filters, setFilters] = useState(INITIAL_FILTERS)


  function handleCatChange(catId) {
    setFilters(f => ({ ...f, cat: catId }))
    setShowICD(false)
  }

  function handleFilterToggle(key, value) {
    setFilters(f => ({ ...f, [key]: f[key] === value ? null : value }))
    setShowICD(false)
  }

  return (
    <div className="app">
      <Header />

      <ContextSelector
        filters={filters}
        onCatChange={handleCatChange}
        onFilterToggle={handleFilterToggle}
      />

    </div>
  )
}