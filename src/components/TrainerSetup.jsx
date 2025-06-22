// import { useState } from 'react'
// import './TrainerSetup.css'

// const TrainerSetup = ({ onSetupComplete }) => {
//   const [name, setName] = useState('')
//   const [difficulty, setDifficulty] = useState('easy')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (name.trim()) {
//       onSetupComplete(name.trim(), difficulty)
//     }
//   }

//   const difficultyOptions = [
//     {
//       value: 'easy',
//       label: 'Easy',
//       description: 'Opponents have reduced HP and damage',
//       icon: '🟢'
//     },
//     {
//       value: 'medium',
//       label: 'Medium',
//       description: 'Balanced challenge for most trainers',
//       icon: '🟡'
//     },
//     {
//       value: 'hard',
//       label: 'Hard',
//       description: 'Opponents have increased HP and damage',
//       icon: '🔴'
//     }
//   ]

//   return (
//     <div className="trainer-setup">
//       <h2>Welcome, Trainer!</h2>
//       <p>Prepare yourself for the ultimate familiar battle experience.</p>
      
//       <form onSubmit={handleSubmit}>
//         <div className="nes-field">
//           <label htmlFor="trainer-name">What's your name, trainer?</label>
//           <input 
//             type="text" 
//             id="trainer-name"
//             className="nes-input"
//             placeholder="Enter your trainer name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             maxLength={20}
//             required
//           />
//         </div>

//         <div className="difficulty-selection">
//           <h3>Choose your challenge level:</h3>
//           <div className="difficulty-options">
//             {difficultyOptions.map((option) => (
//               <label key={option.value} className="difficulty-option">
//                 <input
//                   type="radio"
//                   className="nes-radio"
//                   name="difficulty"
//                   value={option.value}
//                   checked={difficulty === option.value}
//                   onChange={(e) => setDifficulty(e.target.value)}
//                 />
//                 <span className="difficulty-info">
//                   <span className="difficulty-icon">{option.icon}</span>
//                   <strong>{option.label}</strong>
//                   <small>{option.description}</small>
//                 </span>
//               </label>
//             ))}
//           </div>
//         </div>

//         <button 
//           type="submit" 
//           className="nes-btn is-primary"
//           disabled={!name.trim()}
//         >
//           Begin Your Journey!
//         </button>
//       </form>

//       <style jsx>{`
//         .trainer-setup {
//           text-align: center;
//           max-width: 600px;
//           margin: 0 auto;
//           padding: 20px;
//         }

//         .trainer-setup h2 {
//           color: #fff;
//           margin-bottom: 10px;
//         }

//         .trainer-setup p {
//           color: #ccc;
//           margin-bottom: 30px;
//         }

//         .nes-field {
//           margin-bottom: 30px;
//         }

//         .nes-field label {
//           display: block;
//           margin-bottom: 10px;
//           color: #fff;
//           font-weight: bold;
//         }

//         .difficulty-selection {
//           margin-bottom: 30px;
//         }

//         .difficulty-selection h3 {
//           color: #fff;
//           margin-bottom: 20px;
//         }

//         .difficulty-options {
//           display: flex;
//           flex-direction: column;
//           gap: 15px;
//           align-items: flex-start;
//         }

//         .difficulty-option {
//           display: flex;
//           align-items: center;
//           gap: 15px;
//           padding: 15px;
//           border: 2px solid #333;
//           border-radius: 8px;
//           width: 100%;
//           cursor: pointer;
//           transition: border-color 0.2s;
//         }

//         .difficulty-option:hover {
//           border-color: #555;
//         }

//         .difficulty-option input[type="radio"]:checked + .difficulty-info {
//           color: #fff;
//         }

//         .difficulty-info {
//           display: flex;
//           flex-direction: column;
//           text-align: left;
//           color: #ccc;
//         }

//         .difficulty-icon {
//           font-size: 1.2em;
//           margin-right: 10px;
//         }

//         .difficulty-info strong {
//           font-size: 1.1em;
//           margin-bottom: 5px;
//         }

//         .difficulty-info small {
//           font-size: 0.9em;
//           opacity: 0.8;
//         }

//         .nes-btn:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default TrainerSetup


import { useState } from 'react'
import './TrainerSetup.css'

const TrainerSetup = ({ onSetupComplete }) => {
  const [name, setName] = useState('')
  const [difficulty, setDifficulty] = useState('easy')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) onSetupComplete(name.trim(), difficulty)
  }

  const difficultyOptions = [
    { value: 'easy', label: 'Easy', description: 'Opponents have reduced HP and damage', icon: '🟢' },
    { value: 'medium', label: 'Medium', description: 'Balanced challenge', icon: '🟡' },
    { value: 'hard', label: 'Hard', description: 'Opponents have increased HP and damage', icon: '🔴' }
  ]

  return (
    <div className="trainer-setup-container">
      <div className="trainer-setup">
        <h2>Welcome, Wizard!</h2>
        <p>Prepare yourself for the ultimate familiar battle experience.</p>
        <form onSubmit={handleSubmit}>
          <div className="nes-field">
            <label htmlFor="trainer-name">What's your name, wizard?</label>
            <input
              id="trainer-name"
              type="text"
              className="nes-input"
              placeholder="Enter your wizard name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={20}
              required
            />
          </div>

          <div className="difficulty-selection">
            <h3>Choose your challenge level:</h3>
            <div className="difficulty-options">
              {difficultyOptions.map(opt => (
                <label key={opt.value} className="difficulty-option">
                  <input
                    type="radio"
                    className="nes-radio"
                    name="difficulty"
                    value={opt.value}
                    checked={difficulty === opt.value}
                    onChange={() => setDifficulty(opt.value)}
                  />
                  <span className="difficulty-info">
                    <span className="difficulty-icon">{opt.icon}</span>
                    <strong>{opt.label}</strong>
                    <small>{opt.description}</small>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="nes-btn is-primary"
            disabled={!name.trim()}
          >
            Begin Your Journey!
          </button>
        </form>
      </div>
    </div>
  )
}

export default TrainerSetup