import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Board from './components/board.tsx'
import Game from './components/game.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Game/>
  </StrictMode>,
)
