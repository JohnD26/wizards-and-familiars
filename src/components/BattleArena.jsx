import { useState, useEffect, useRef } from 'react'
import './BattleArena.css'


const trainerSprites = {
  // players wizard icon
  player:
    'https://game-icons.net/icons/000000/ffffff/1x1/delapouite/wizard-face.png',
  
    // opponent icon
  opponent:
    'https://game-icons.net/icons/000000/ffffff/1x1/cathelineau/witch-face.png'
,
}


export default function BattleArena({
  trainerName,
  difficulty,
  playerFamiliar: playerProp,
  opponentFamiliar: opponentProp,
  onReset
}) {
  // Clone props into local state once
  const [player, setPlayer] = useState(null)
  const [opponent, setOpponent] = useState(null)

  useEffect(() => {
    setPlayer({
      ...playerProp,
      attacks: playerProp.attacks.map(a => ({ ...a }))
    })
    setOpponent({
      ...opponentProp,
      attacks: opponentProp.attacks.map(a => ({ ...a }))
    })
    // eslint-disable-next-line
  }, [])

  const [message, setMessage] = useState('')
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [attackLogs, setAttackLogs] = useState('')
  const [battleEnded, setBattleEnded] = useState(false)
  const attackSound = useRef(null)

  // Initialize the opening message once both fighters are set
  useEffect(() => {
    if (player && opponent) {
      setMessage(
        `${trainerName}'s ${player.name} vs Enemy wizard's ${opponent.name}! Let the battle begin!`
      )
    }
  }, [player, opponent, trainerName])

  const addLog = log =>
    setAttackLogs(prev => prev + `<li>${log}</li>`)

  const renderLifeBar = (hp, maxHp) => {
    const pct = Math.max(0, (hp / maxHp) * 100)
    let color = '#4caf50'
    if (pct < 50) color = '#ff9800'
    if (pct < 25) color = '#f44336'
    return (
      <div className="life-bar-container">
        <div
          className="life-bar"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    )
  }

  const playerAttack = attack => {
    if (!player || !opponent || battleEnded || !isPlayerTurn) return

    if (attack.uses <= 0) {
      setMessage(`No more uses left for ${attack.name}`)
      return
    }
    if (Math.random() > attack.accuracy) {
      const log = `${player.name} tried ${attack.name} but missed!`
      setMessage(log)
      addLog(log)
      return void setTimeout(() => setIsPlayerTurn(false), 1000)
    }

    // play sound
    attackSound.current?.play().catch(() => {})

    // apply damage
    const dmg = attack.damage
    setOpponent(o => ({ ...o, hp: Math.max(0, o.hp - dmg) }))
    setPlayer(p => ({
      ...p,
      attacks: p.attacks.map(a =>
        a.name === attack.name ? { ...a, uses: a.uses - 1 } : a
      )
    }))

    let commentary = ''
    if (dmg > 15) commentary = " It's super effective!"
    const log = `${player.name} uses ${attack.name} for ${dmg} damage!${commentary}`
    setMessage(log)
    addLog(log)

    // check for win
    if (opponent.hp - dmg <= 0) {
      const win = `You win! ${player.name} is victorious!`
      setMessage(win)
      addLog(win)
      return setBattleEnded(true)
    }

    setTimeout(() => setIsPlayerTurn(false), 1000)
  }

  const opponentAttack = () => {
    if (!player || !opponent || battleEnded || isPlayerTurn) return

    const avail = opponent.attacks.filter(a => a.uses > 0)
    if (avail.length === 0) {
      const log = `${opponent.name} has no attacks left!`
      setMessage(log)
      addLog(log)
      const win = `You win by default!`
      setMessage(win)
      addLog(win)
      return setBattleEnded(true)
    }
    const attack = avail[Math.floor(Math.random() * avail.length)]

    if (Math.random() > attack.accuracy) {
      const log = `${opponent.name} tried ${attack.name} but missed!`
      setMessage(log)
      addLog(log)
      return void setTimeout(() => setIsPlayerTurn(true), 1000)
    }

    attackSound.current?.play().catch(() => {})

    const dmg = attack.damage
    setPlayer(p => ({ ...p, hp: Math.max(0, p.hp - dmg) }))
    setOpponent(o => ({
      ...o,
      attacks: o.attacks.map(a =>
        a.name === attack.name ? { ...a, uses: a.uses - 1 } : a
      )
    }))

    let commentary = ''
    if (dmg > 15) commentary = " It's super effective!"
    const log = `${opponent.name} uses ${attack.name} for ${dmg} damage!${commentary}`
    setMessage(log)
    addLog(log)

    if (player.hp - dmg <= 0) {
      const lose = `You lose! ${opponent.name} wins!`
      setMessage(lose)
      addLog(lose)
      return setBattleEnded(true)
    }

    setTimeout(() => setIsPlayerTurn(true), 1000)
  }

  // Trigger AI attack whenever turn flips to opponent
  useEffect(() => {
    if (player && opponent && !isPlayerTurn && !battleEnded) {
      opponentAttack()
    }
    // eslint-disable-next-line
  }, [isPlayerTurn])

  return (
    <div className="battle-arena nes-container is-rounded is-dark">
      <div className="battle-header">
        <h2>{trainerName}</h2>
        <span
          className={`nes-badge ${
            difficulty === 'easy'
              ? 'is-success'
              : difficulty === 'hard'
              ? 'is-error'
              : 'is-warning'
          }`}
        >
          <span className="is-dark">{difficulty.toUpperCase()}</span>
        </span>
      </div>

      <div className="battle-message">
        <p>{message}</p>
      </div>

      <div className="battle-layout">
        <div className="battle-field">
          <div className="familiar-status">
            <div className="player-side">
              <img src={trainerSprites.player} alt="Player" width={80} />
              <h3>{player?.name}</h3>
              <img
                src={player?.sprite}
                alt={player?.name}
                className="familiar-sprite"
              />
              {player && renderLifeBar(player.hp, player.maxHp)}
              <p>{player?.hp}/{player?.maxHp} HP</p>
            </div>

            <div className="vs-indicator nes-text is-primary">VS</div>

            <div className="opponent-side">
              <img src={trainerSprites.opponent} alt="Opponent" width={80} />
              <h3>{opponent?.name}</h3>
              <img
                src={opponent?.sprite}
                alt={opponent?.name}
                className="familiar-sprite"
              />
              {opponent && renderLifeBar(opponent.hp, opponent.maxHp)}
              <p>{opponent?.hp}/{opponent?.maxHp} HP</p>
            </div>
          </div>

          {isPlayerTurn && !battleEnded && player && opponent && (
            <div className="attack-options">
              {player.attacks.map(a => (
                <button
                  key={a.name}
                  className="nes-btn is-warning"
                  disabled={a.uses <= 0}
                  onClick={() => playerAttack(a)}
                >
                  {a.name} ({a.damage} dmg, {a.uses} uses)
                </button>
              ))}
            </div>
          )}

          {!isPlayerTurn && !battleEnded && (
            <p className="waiting nes-text is-primary">
              Opponent is thinking...
            </p>
          )}

          {battleEnded && (
            <button className="nes-btn is-primary" onClick={onReset}>
              New Battle
            </button>
          )}
        </div>

        <div className="battle-log nes-container with-title is-centered is-dark">
          <h3 className="title">Battle Log</h3>
          <div className="log-content">
            <ul
              className="nes-list is-disc"
              dangerouslySetInnerHTML={{ __html: attackLogs }}
            />
          </div>
        </div>
      </div>

      <audio
        ref={attackSound}
        src="https://vgmtreasurechest.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/izqqhmeayp/Tackle.mp3"
        preload="auto"
      />
    </div>
  )
}
