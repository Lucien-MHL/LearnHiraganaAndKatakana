import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('should show title', () => {
    render(<App />)
    const title = screen.getByText('Vite + React')
    expect(title).toBeInTheDocument()
  })
})
