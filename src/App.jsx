import { useState } from 'react'
import './App.css'
import TrainerSetup from './components/TrainerSetup'
import FamiliarSelection from './components/FamiliarSelection'
import BattleArena from './components/BattleArena'
import familiarData from './familiarData'

function App() {
  const [gameState, setGameState] = useState('setup') // 'setup', 'selection', 'battle'
  const [trainerName, setTrainerName] = useState('')
  const [difficulty, setDifficulty] = useState('easy')
  const [playerFamiliar, setPlayerFamiliar] = useState(null)
  const [opponentFamiliar, setOpponentFamiliar] = useState(null)

  const handleTrainerSetup = (name, selectedDifficulty) => {
    setTrainerName(name)
    setDifficulty(selectedDifficulty)
    setGameState('selection')
  }

  const handleFamiliarChoice = (familiar) => {
    // Create player familiar with full stats
    const playerFam = {
      ...familiar, 
      attacks: [...familiar.attacks.map(attack => ({...attack}))]
    }
    setPlayerFamiliar(playerFam)

    // Select opponent based on difficulty
    const getOpponentFamiliar = () => {
      let availableFamiliars = [...familiarData]
      
      switch(difficulty) {
        case 'easy':
          // Opponent gets 80% of original stats
          break
        case 'medium':
          // Opponent gets 100% of original stats
          break
        case 'hard':
          // Opponent gets 120% of original stats
          break
        default:
          break
      }

      const randomOpponent = availableFamiliars[Math.floor(Math.random() * availableFamiliars.length)]
      
      let opponentFam = {
        ...randomOpponent,
        attacks: [...randomOpponent.attacks.map(attack => ({...attack}))]
      }

      // Apply difficulty modifiers
      if (difficulty === 'easy') {
        opponentFam.hp = Math.floor(opponentFam.hp * 0.8)
        opponentFam.maxHp = opponentFam.hp
        opponentFam.attacks = opponentFam.attacks.map(attack => ({
          ...attack,
          damage: Math.floor(attack.damage * 0.8)
        }))
      } else if (difficulty === 'hard') {
        opponentFam.hp = Math.floor(opponentFam.hp * 1.2)
        opponentFam.maxHp = opponentFam.hp
        opponentFam.attacks = opponentFam.attacks.map(attack => ({
          ...attack,
          damage: Math.floor(attack.damage * 1.2)
        }))
      }

      return opponentFam
    }

    setOpponentFamiliar(getOpponentFamiliar())
    setGameState('battle')
  }

  const resetGame = () => {
    setGameState('setup')
    setTrainerName('')
    setDifficulty('easy')
    setPlayerFamiliar(null)
    setOpponentFamiliar(null)
  }

  return (
    <div className='nes-container is-rounded is-dark App'>
      {/* <h1>Tales of Wizards and Familiars</h1> */}

      {gameState === 'setup' && (
        <TrainerSetup onSetupComplete={handleTrainerSetup} />
      )}

      {gameState === 'selection' && (
        <FamiliarSelection 
          trainerName={trainerName}
          difficulty={difficulty}
          onFamiliarChoice={handleFamiliarChoice}
          onBack={() => setGameState('setup')}
        />
      )}

      {gameState === 'battle' && (
        <BattleArena
          trainerName={trainerName}
          difficulty={difficulty}
          playerFamiliar={playerFamiliar}
          opponentFamiliar={opponentFamiliar}
          setPlayerFamiliar={setPlayerFamiliar}
          setOpponentFamiliar={setOpponentFamiliar}
          onReset={resetGame}
        />
      )}
    </div>
  )
}

export default App