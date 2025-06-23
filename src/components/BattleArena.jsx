// import { useState, useEffect, useRef } from 'react'
// import './BattleArena.css'

// const trainerSprites = {
//   player:
//     'https://game-icons.net/icons/000000/ffffff/1x1/delapouite/wizard-face.png',
//   opponent:
//     'https://game-icons.net/icons/000000/ffffff/1x1/cathelineau/witch-face.png',
// }

// export default function BattleArena({
//   trainerName,
//   difficulty,
//   playerFamiliar: playerProp,
//   opponentFamiliar: opponentProp,
//   onReset,
// }) {
//   /*   state cloning & helpers    */
//   const [player, setPlayer] = useState(null)
//   const [opponent, setOpponent] = useState(null)

//   useEffect(() => {
//     setPlayer({
//       ...playerProp,
//       attacks: playerProp.attacks.map(a => ({ ...a })),
//     })
//     setOpponent({
//       ...opponentProp,
//       attacks: opponentProp.attacks.map(a => ({ ...a })),
//     })
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [])

//   const [message, setMessage] = useState('')
//   const [isPlayerTurn, setIsPlayerTurn] = useState(true)
//   const [attackLogs, setAttackLogs] = useState('')
//   const [battleEnded, setBattleEnded] = useState(false)
//   const attackSound = useRef(null)

//   /*   messaging & battle logic   */
//   useEffect(() => {
//     if (player && opponent) {
//       setMessage(
//         `${trainerName}'s ${player.name} vs Enemy wizard's ${opponent.name}! Let the battle begin!`
//       )
//     }
//   }, [player, opponent, trainerName])

//   const addLog = log => setAttackLogs(prev => prev + `<li>${log}</li>`)

//   const renderLifeBar = (hp, maxHp) => {
//     const pct = Math.max(0, (hp / maxHp) * 100)
//     let color = '#4caf50'
//     if (pct < 50) color = '#ff9800'
//     if (pct < 25) color = '#f44336'
//     return (
//       <div className="life-bar-container">
//         <div
//           className="life-bar"
//           style={{ width: `${pct}%`, backgroundColor: color }}
//         />
//       </div>
//     )
//   }

//   const playerAttack = attack => {
//     if (!player || !opponent || battleEnded || !isPlayerTurn) return

//     if (attack.uses <= 0) {
//       setMessage(`No more uses left for ${attack.name}`)
//       return
//     }
//     if (Math.random() > attack.accuracy) {
//       const log = `${player.name} tried ${attack.name} but missed!`
//       setMessage(log)
//       addLog(log)
//       return void setTimeout(() => setIsPlayerTurn(false), 1000)
//     }

//     attackSound.current?.play().catch(() => {})

//     const dmg = attack.damage
//     setOpponent(o => ({ ...o, hp: Math.max(0, o.hp - dmg) }))
//     setPlayer(p => ({
//       ...p,
//       attacks: p.attacks.map(a =>
//         a.name === attack.name ? { ...a, uses: a.uses - 1 } : a
//       ),
//     }))

//     let commentary = ''
//     if (dmg > 15) commentary = " It's super effective!"
//     const log = `${player.name} uses ${attack.name} for ${dmg} damage!${commentary}`
//     setMessage(log)
//     addLog(log)

//     if (opponent.hp - dmg <= 0) {
//       const win = `You win! ${player.name} is victorious!`
//       setMessage(win)
//       addLog(win)
//       return setBattleEnded(true)
//     }

//     setTimeout(() => setIsPlayerTurn(false), 1000)
//   }

//   const opponentAttack = () => {
//     if (!player || !opponent || battleEnded || isPlayerTurn) return

//     const avail = opponent.attacks.filter(a => a.uses > 0)
//     if (avail.length === 0) {
//       const log = `${opponent.name} has no attacks left!`
//       setMessage(log)
//       addLog(log)
//       const win = `You win by default!`
//       setMessage(win)
//       addLog(win)
//       return setBattleEnded(true)
//     }
//     const attack = avail[Math.floor(Math.random() * avail.length)]

//     if (Math.random() > attack.accuracy) {
//       const log = `${opponent.name} tried ${attack.name} but missed!`
//       setMessage(log)
//       addLog(log)
//       return void setTimeout(() => setIsPlayerTurn(true), 1000)
//     }

//     attackSound.current?.play().catch(() => {})

//     const dmg = attack.damage
//     setPlayer(p => ({ ...p, hp: Math.max(0, p.hp - dmg) }))
//     setOpponent(o => ({
//       ...o,
//       attacks: o.attacks.map(a =>
//         a.name === attack.name ? { ...a, uses: a.uses - 1 } : a
//       ),
//     }))

//     let commentary = ''
//     if (dmg > 15) commentary = " It's super effective!"
//     const log = `${opponent.name} uses ${attack.name} for ${dmg} damage!${commentary}`
//     setMessage(log)
//     addLog(log)

//     if (player.hp - dmg <= 0) {
//       const lose = `You lose! ${opponent.name} wins!`
//       setMessage(lose)
//       addLog(lose)
//       return setBattleEnded(true)
//     }

//     setTimeout(() => setIsPlayerTurn(true), 1000)
//   }

//   /* trigger AI turn */
//   useEffect(() => {
//     if (player && opponent && !isPlayerTurn && !battleEnded) {
//       opponentAttack()
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isPlayerTurn])

 
//   return (
//     <div className="battle-arena" role="application">
//       {/* header */}
//       <header className="battle-header">
//         <h2>{trainerName}</h2>
//         <span
//           className={`nes-badge ${
//             difficulty === 'easy'
//               ? 'is-success'
//               : difficulty === 'hard'
//               ? 'is-error'
//               : 'is-warning'
//           }`}
//         >
//           <span className="is-dark">{difficulty.toUpperCase()}</span>
//         </span>
//       </header>

//       {/* live battle message */}
//       <div className="battle-message" aria-live="polite">
//         <p>{message}</p>
//       </div>

//       {/* two-panel grid */}
//       <section className="battle-layout">
//         {/* left: arena */}
//         <article className="battle-field">
//           <div className="familiar-status">
//             {/* player */}
//             <div className="player-side">
//               <img src={trainerSprites.player} alt="Player wizard" width={80} />
//               <h3>{player?.name}</h3>
//               <img
//                 src={player?.sprite}
//                 alt={player?.name}
//                 className="familiar-sprite"
//               />
//               {player && renderLifeBar(player.hp, player.maxHp)}
//               <p>
//                 {player?.hp}/{player?.maxHp} HP
//               </p>
//             </div>

//             <div className="vs-indicator nes-text is-primary">VS</div>

//             {/* opponent */}
//             <div className="opponent-side">
//               <img
//                 src={trainerSprites.opponent}
//                 alt="Opponent wizard"
//                 width={80}
//               />
//               <h3>{opponent?.name}</h3>
//               <img
//                 src={opponent?.sprite}
//                 alt={opponent?.name}
//                 className="familiar-sprite"
//               />
//               {opponent && renderLifeBar(opponent.hp, opponent.maxHp)}
//               <p>
//                 {opponent?.hp}/{opponent?.maxHp} HP
//               </p>
//             </div>
//           </div>

//           {/* attack buttons / waiting */}
//           {isPlayerTurn && !battleEnded && player && opponent && (
//             <div className="attack-options">
//               {player.attacks.map(a => (
//                 <button
//                   key={a.name}
//                   className="nes-btn is-warning"
//                   aria-label={`${a.name}, ${a.damage} damage, ${a.uses} uses left`}
//                   disabled={a.uses <= 0}
//                   onClick={() => playerAttack(a)}
//                 >
//                   {a.name}{' '}
//                   <span className="small">
//                     ({a.damage} dmg • {a.uses})
//                   </span>
//                 </button>
//               ))}
//             </div>
//           )}

//           {!isPlayerTurn && !battleEnded && (
//             <p className="waiting nes-text is-primary">
//               Opponent is thinking...
//             </p>
//           )}

//           {battleEnded && (
//             <button className="nes-btn is-primary" onClick={onReset}>
//               New Battle
//             </button>
//           )}
//         </article>

//         {/* right: log */}
//         <aside
//           className="battle-log"
//           role="log"
//           aria-live="polite"
//           aria-label="Battle log"
//         >
//           <h3 className="title">Battle Log</h3>
//           <div className="log-content">
//             <ul
//               className="nes-list is-disc"
//               dangerouslySetInnerHTML={{ __html: attackLogs }}
//             />
//           </div>
//         </aside>
//       </section>

//       {/* sfx */}
//       <audio
//         ref={attackSound}
//         src="https://vgmtreasurechest.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/izqqhmeayp/Tackle.mp3"
//         preload="auto"
//       />
//     </div>
//   )
// }




 
import { useState, useEffect, useRef } from 'react'
import './BattleArena.css'
import { speakLocal } from './LocalVoice'  


/*   Barry-style taunts via Mistral LLM API calls  */
const TAUNT_SYSTEM_PROMPT =
  'You are Barry, the hyper-energetic rival from Pokémon Diamond/Pearl. Except now you are a wizard fighting a match with your familiar \
   You ONLY speak in very short (<= 6-word) playful taunts.  \
   Stay in character, nothing else.  \
   Do not number  dialogues when you give  an output. \
   Just say the dialogue. \
   Fir example:Enemy Wizard: “Ready for a magical showdown, sorcerer? Lets duel! \
   Make sure the sentence makes sense. No '

const TAUNT_COOLDOWN = 15_000    // AU moins 15 s between taunts
const shouldTaunt = p => Math.random() < p

async function fetchTaunt () {
  const apiKey =
    import.meta.env.VITE_MISTRAL_API_KEY ||
    process.env.REACT_APP_MISTRAL_API_KEY
  if (!apiKey) return null

  try {
    const res = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'mistral-tiny',
        messages: [
          { role: 'system', content: TAUNT_SYSTEM_PROMPT },
          { role: 'user', content: 'Taunt me!' },
        ],
        max_tokens: 20,
        temperature: 0.9,
      }),
    })
    const data = await res.json()
    return data.choices?.[0]?.message?.content?.trim() || null
  } catch {
    return null            
  }
}

/*  speech synthesis  */
function speak (text) {
  if (!('speechSynthesis' in window) || !text) return
  const u = new SpeechSynthesisUtterance(text)
  u.rate = 1.15
  u.pitch = 1.1
  speechSynthesis.cancel()
  speechSynthesis.speak(u)
}

/* sprites  */
const trainerSprites = {
  player:
    'https://game-icons.net/icons/000000/ffffff/1x1/delapouite/wizard-face.png',
  opponent:
    'https://game-icons.net/icons/000000/ffffff/1x1/cathelineau/witch-face.png',
}

export default function BattleArena ({
  trainerName,
  difficulty,
  playerFamiliar: playerProp,
  opponentFamiliar: opponentProp,
  onReset,
}) {
  /*  state  */
  const [player, setPlayer] = useState(null)
  const [opponent, setOpponent] = useState(null)

  /* clone props once on mount */
  useEffect(() => {
    setPlayer({
      ...playerProp,
      attacks: playerProp.attacks.map(a => ({ ...a })),
    })
    setOpponent({
      ...opponentProp,
      attacks: opponentProp.attacks.map(a => ({ ...a })),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [message, setMessage] = useState('')
  const [isPlayerTurn, setIsPlayerTurn] = useState(true)
  const [attackLogs, setAttackLogs] = useState('')
  const [battleEnded, setBattleEnded] = useState(false)
  const [lastTaunt, setLastTaunt] = useState(0)
  const attackSound = useRef(null)
  
   // keeps the battle-log scrolled to the newest entry
   const logScrollRef = useRef(null)


  /*  utilities   */
  const addLog = txt => setAttackLogs(prev => prev + `<li>${txt}</li>`)

  const maybeTaunt = async (prob = 0.4) => {
    const now = Date.now()
    if (now - lastTaunt < TAUNT_COOLDOWN || !shouldTaunt(prob)) return
    const taunt = await fetchTaunt()
    if (!taunt) return
    setLastTaunt(now)
    addLog(`<em>Enemy Wizard:</em> “${taunt}”`)
    // speak(taunt)
    speakLocal(taunt)
  }

  /* show opening message + first taunt */
  useEffect(() => {
    if (player && opponent) {
      setMessage(
        `${trainerName}'s ${player.name} vs Enemy wizard's ${opponent.name}! Let the battle begin!`
      )
      maybeTaunt(0.8)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [player, opponent])

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

  /*   PLAYER ATTACK  */
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
      setTimeout(() => setIsPlayerTurn(false), 1_000)
      maybeTaunt(0.6)
      return
    }

    attackSound.current?.play().catch(() => {})

    const dmg = attack.damage
    setOpponent(o => ({ ...o, hp: Math.max(0, o.hp - dmg) }))
    setPlayer(p => ({
      ...p,
      attacks: p.attacks.map(a =>
        a.name === attack.name ? { ...a, uses: a.uses - 1 } : a
      ),
    }))

    const commentary = dmg > 15 ? " It's super effective!" : ''
    const log = `${player.name} uses ${attack.name} for ${dmg} damage!${commentary}`
    setMessage(log)
    addLog(log)

    if (opponent.hp - dmg <= 0) {
      const win = `You win! ${player.name} is victorious!`
      setMessage(win)
      addLog(win)
      setBattleEnded(true)
      return
    }

    setTimeout(() => setIsPlayerTurn(false), 1_000)
  }

  /*   OPPONENT ATTACK  */
  const opponentAttack = () => {
    if (!player || !opponent || battleEnded || isPlayerTurn) return

    const avail = opponent.attacks.filter(a => a.uses > 0)
    if (avail.length === 0) {
      const log = `${opponent.name} has no attacks left!`
      setMessage(log)
      addLog(log)
      addLog(`You win by default!`)
      setBattleEnded(true)
      return
    }

    const attack = avail[Math.floor(Math.random() * avail.length)]

    if (Math.random() > attack.accuracy) {
      const log = `${opponent.name} tried ${attack.name} but missed!`
      setMessage(log)
      addLog(log)
      maybeTaunt(0.7)
      setTimeout(() => setIsPlayerTurn(true), 1_000)
      return
    }

    attackSound.current?.play().catch(() => {})

    const dmg = attack.damage
    setPlayer(p => ({ ...p, hp: Math.max(0, p.hp - dmg) }))
    setOpponent(o => ({
      ...o,
      attacks: o.attacks.map(a =>
        a.name === attack.name ? { ...a, uses: a.uses - 1 } : a
      ),
    }))

    const commentary = dmg > 15 ? " It's super effective!" : ''
    const log = `${opponent.name} uses ${attack.name} for ${dmg} damage!${commentary}`
    setMessage(log)
    addLog(log)

    if (player.hp - dmg <= 0) {
      const lose = `You lose! ${opponent.name} wins!`
      setMessage(lose)
      addLog(lose)
      setBattleEnded(true)
      return
    }

    setTimeout(() => setIsPlayerTurn(true), 1_000)
    maybeTaunt(0.5)
  }

  /* trigger AI turn */
  useEffect(() => {
    if (player && opponent && !isPlayerTurn && !battleEnded) {
      opponentAttack()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlayerTurn])

  /* auto-scroll the log pane to bottom whenever attackLogs changes */
  useEffect(() => {
    const pane = logScrollRef.current
    if (pane) pane.scrollTop = pane.scrollHeight
    }, [attackLogs])

  /* ---------- RENDER ---------- */
  return (
    <div className="battle-arena" role="application">
      {/* header */}
      <header className="battle-header">
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
      </header>

      {/* live message */}
      <div className="battle-message" aria-live="polite">
        <p>{message}</p>
      </div>

      {/* grid */}
      <section className="battle-layout">
        {/* ---------- LEFT — arena ---------- */}
        <article className="battle-field">
          {/* familiar panes */}
          <div className="familiar-status">
            {/* player */}
            <div className="player-side">
              <img
                src={trainerSprites.player}
                alt="Player wizard"
                width={80}
              />
              <h3>{player?.name}</h3>
              <img
                src={player?.sprite}
                alt={player?.name}
                className="familiar-sprite"
              />
              {player && renderLifeBar(player.hp, player.maxHp)}
              <p>
                {player?.hp}/{player?.maxHp} HP
              </p>
            </div>

            <div className="vs-indicator nes-text is-primary">VS</div>

            {/* opponent */}
            <div className="opponent-side">
              <img
                src={trainerSprites.opponent}
                alt="Opponent wizard"
                width={80}
              />
              <h3>{opponent?.name}</h3>
              <img
                src={opponent?.sprite}
                alt={opponent?.name}
                className="familiar-sprite"
              />
              {opponent && renderLifeBar(opponent.hp, opponent.maxHp)}
              <p>
                {opponent?.hp}/{opponent?.maxHp} HP
              </p>
            </div>
          </div>

          {/* attack buttons */}
          {isPlayerTurn && !battleEnded && player && opponent && (
            <div className="attack-options">
              {player.attacks.map(a => (
                <button
                  key={a.name}
                  className="nes-btn is-warning"
                  aria-label={`${a.name}, ${a.damage} damage, ${a.uses} uses left`}
                  disabled={a.uses <= 0}
                  onClick={() => playerAttack(a)}
                >
                  {a.name}{' '}
                  <span className="small">
                    ({a.damage} dmg • {a.uses})
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* waiting / ended */}
          {!isPlayerTurn && !battleEnded && (
            <p className="waiting nes-text is-primary">Opponent is thinking…</p>
          )}

          {battleEnded && (
            <button className="nes-btn is-primary" onClick={onReset}>
              New Battle
            </button>
          )}
        </article>

        {/*RIGHT — log */}
        <aside
          className="battle-log"
          role="log"
          aria-live="polite"
          aria-label="Battle log"
        >
          <h3 className="title">Battle Log</h3>
          {/* <div className="log-content"> */}
          <div className="log-content" ref={logScrollRef}>
            <ul
              className="nes-list is-disc"
              dangerouslySetInnerHTML={{ __html: attackLogs }}
            />
          </div>
        </aside>
      </section>

      {/* SFX */}
      <audio
        ref={attackSound}
        src="https://vgmtreasurechest.com/soundtracks/pokemon-sfx-gen-3-attack-moves-rse-fr-lg/izqqhmeayp/Tackle.mp3"
        preload="auto"
      />
    </div>
  )
}
