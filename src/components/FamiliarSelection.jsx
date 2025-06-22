// import { useState } from 'react'
// import familiarData from '../familiarData'

// const FamiliarSelection = ({ trainerName, difficulty, onFamiliarChoice, onBack }) => {
//   const [selectedFamiliar, setSelectedFamiliar] = useState(null)
//   const [showDetails, setShowDetails] = useState(false)

//   const handleFamiliarSelect = (familiar) => {
//     setSelectedFamiliar(familiar)
//     setShowDetails(true)
//   }

//   const confirmChoice = () => {
//     if (selectedFamiliar) {
//       onFamiliarChoice(selectedFamiliar)
//     }
//   }

//   const getDifficultyBadge = () => {
//     const badges = {
//       easy: { color: 'is-success', icon: '🟢', text: 'Easy' },
//       medium: { color: 'is-warning', icon: '🟡', text: 'Medium' },
//       hard: { color: 'is-error', icon: '🔴', text: 'Hard' }
//     }
//     return badges[difficulty]
//   }

//   return (
//     <div className="familiar-selection">
//       <div className="trainer-info">
//         <h2>Welcome, {trainerName}!</h2>
//         <span className={`nes-badge ${getDifficultyBadge().color}`}>
//           <span className="is-dark">{getDifficultyBadge().icon} {getDifficultyBadge().text}</span>
//         </span>
//       </div>

//       {!showDetails ? (
//         <div className="selection-phase">
//           <h3>Choose your familiar companion:</h3>
//           <div className="familiar-grid">
//             {familiarData.map((familiar) => (
//               <div 
//                 key={familiar.name} 
//                 className="familiar-card"
//                 onClick={() => handleFamiliarSelect(familiar)}
//               >
//                 <div className="familiar-sprite">
//                   <img 
//                     src={familiar.sprite} 
//                     alt={familiar.name}
//                     onError={(e) => {
//                       e.target.src = 'https://via.placeholder.com/64x64?text=?'
//                     }}
//                   />
//                 </div>
//                 <h4>{familiar.name}</h4>
//                 <div className="familiar-stats">
//                   <span>HP: {familiar.hp}</span>
//                   <span>Attacks: {familiar.attacks.length}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="confirmation-phase">
//           <h3>Confirm your choice:</h3>
//           <div className="selected-familiar-details">
//             <div className="familiar-preview">
//               <img 
//                 src={selectedFamiliar.sprite} 
//                 alt={selectedFamiliar.name}
//                 className="large-sprite"
//                 onError={(e) => {
//                   e.target.src = 'https://via.placeholder.com/128x128?text=?'
//                 }}
//               />
//               <h4>{selectedFamiliar.name}</h4>
//             </div>
            
//             <div className="familiar-info">
//               <div className="stat-row">
//                 <strong>HP:</strong> {selectedFamiliar.hp}
//               </div>
              
//               <div className="attacks-section">
//                 <strong>Available Attacks:</strong>
//                 <div className="attacks-list">
//                   {selectedFamiliar.attacks.map((attack, index) => (
//                     <div key={index} className="attack-item">
//                       <span className="attack-name">{attack.name}</span>
//                       <span className="attack-damage">{attack.damage} dmg</span>
//                       <span className="attack-uses">{attack.uses} uses</span>
//                       <span className="attack-accuracy">{Math.round(attack.accuracy * 100)}% acc</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="action-buttons">
//             <button 
//               className="nes-btn"
//               onClick={() => setShowDetails(false)}
//             >
//               Choose Different
//             </button>
//             <button 
//               className="nes-btn is-primary"
//               onClick={confirmChoice}
//             >
//               Confirm Choice
//             </button>
//           </div>
//         </div>
//       )}

//       <button 
//         className="nes-btn is-error back-button"
//         onClick={onBack}
//       >
//         Back to Setup
//       </button>

//       <style jsx>{`
//         .familiar-selection {
//           max-width: 800px;
//           margin: 0 auto;
//           padding: 20px;
//         }

//         .trainer-info {
//           text-align: center;
//           margin-bottom: 30px;
//         }

//         .trainer-info h2 {
//           color: #fff;
//           margin-bottom: 10px;
//         }

//         .selection-phase h3,
//         .confirmation-phase h3 {
//           color: #fff;
//           text-align: center;
//           margin-bottom: 20px;
//         }

//         .familiar-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
//           gap: 20px;
//           margin-bottom: 20px;
//         }

//         .familiar-card {
//           background: #222;
//           border: 2px solid #333;
//           border-radius: 8px;
//           padding: 15px;
//           text-align: center;
//           cursor: pointer;
//           transition: all 0.2s;
//         }

//         .familiar-card:hover {
//           border-color: #555;
//           transform: translateY(-2px);
//         }

//         .familiar-sprite img {
//           width: 64px;
//           height: 64px;
//           object-fit: contain;
//         }

//         .familiar-card h4 {
//           color: #fff;
//           margin: 10px 0;
//         }

//         .familiar-stats {
//           display: flex;
//           justify-content: space-between;
//           color: #ccc;
//           font-size: 0.9em;
//         }

//         .selected-familiar-details {
//           display: flex;
//           gap: 30px;
//           margin-bottom: 30px;
//           background: #222;
//           border-radius: 8px;
//           padding: 20px;
//         }

//         .familiar-preview {
//           text-align: center;
//           min-width: 150px;
//         }

//         .large-sprite {
//           width: 128px;
//           height: 128px;
//           object-fit: contain;
//         }

//         .familiar-preview h4 {
//           color: #fff;
//           margin-top: 10px;
//         }

//         .familiar-info {
//           flex: 1;
//           color: #fff;
//         }

//         .stat-row {
//           margin-bottom: 15px;
//           font-size: 1.1em;
//         }

//         .attacks-section strong {
//           display: block;
//           margin-bottom: 10px;
//         }

//         .attacks-list {
//           display: flex;
//           flex-direction: column;
//           gap: 8px;
//         }

//         .attack-item {
//           display: grid;
//           grid-template-columns: 1fr auto auto auto;
//           gap: 10px;
//           padding: 8px;
//           background: #333;
//           border-radius: 4px;
//           font-size: 0.9em;
//         }

//         .attack-name {
//           font-weight: bold;
//         }

//         .attack-damage {
//           color: #ff6b6b;
//         }

//         .attack-uses {
//           color: #4ecdc4;
//         }

//         .attack-accuracy {
//           color: #ffe66d;
//         }

//         .action-buttons {
//           display: flex;
//           gap: 15px;
//           justify-content: center;
//           margin-bottom: 20px;
//         }

//         .back-button {
//           display: block;
//           margin: 0 auto;
//         }

//         @media (max-width: 768px) {
//           .selected-familiar-details {
//             flex-direction: column;
//             text-align: center;
//           }
          
//           .attack-item {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default FamiliarSelection




import { useState } from 'react'
import './FamiliarSelection.css'
import familiarData from '../familiarData'

const FamiliarSelection = ({ trainerName, difficulty, onFamiliarChoice, onBack }) => {
  const [selectedFamiliar, setSelectedFamiliar] = useState(null)
  const [showDetails, setShowDetails] = useState(false)

  const handleFamiliarSelect = (familiar) => {
    setSelectedFamiliar(familiar)
    setShowDetails(true)
  }

  const confirmChoice = () => {
    if (selectedFamiliar) onFamiliarChoice(selectedFamiliar)
  }

  const getDifficultyBadge = () => {
    const badges = {
      easy:   { color: 'is-success', icon: '🟢', text: 'Easy'   },
      medium: { color: 'is-warning', icon: '🟡', text: 'Medium' },
      hard:   { color: 'is-error',   icon: '🔴', text: 'Hard'   }
    }
    return badges[difficulty]
  }

  return (
    <div className="familiar-selection-container">
      <div className="familiar-selection">
        <div className="trainer-info">
          <h2>Welcome, {trainerName}!</h2>
          <span className={`nes-badge ${getDifficultyBadge().color}`}>
            <span className="is-dark">
              {getDifficultyBadge().icon} {getDifficultyBadge().text}
            </span>
          </span>
        </div>

        {!showDetails ? (
          <div className="selection-phase">
            <h3>Choose your familiar companion:</h3>
            <div className="familiar-grid">
              {familiarData.map((familiar) => (
                <div
                  key={familiar.name}
                  className="familiar-card"
                  onClick={() => handleFamiliarSelect(familiar)}
                >
                  <div className="familiar-sprite">
                    <img
                      src={familiar.sprite}
                      alt={familiar.name}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/64x64?text=?' }}
                    />
                  </div>
                  <h4>{familiar.name}</h4>
                  <div className="familiar-stats">
                    <span>HP: {familiar.hp}</span>
                    <span>Attacks: {familiar.attacks.length}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="confirmation-phase">
            <h3>Confirm your choice:</h3>
            <div className="selected-familiar-details">
              <div className="familiar-preview">
                <img
                  src={selectedFamiliar.sprite}
                  alt={selectedFamiliar.name}
                  className="large-sprite"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/128x128?text=?' }}
                />
                <h4>{selectedFamiliar.name}</h4>
              </div>
              <div className="familiar-info">
                <div className="stat-row">
                  <strong>HP:</strong> {selectedFamiliar.hp}
                </div>
                <div className="attacks-section">
                  <strong>Available Attacks:</strong>
                  <div className="attacks-list">
                    {selectedFamiliar.attacks.map((attack, idx) => (
                      <div key={idx} className="attack-item">
                        <span className="attack-name">{attack.name}</span>
                        <span className="attack-damage">{attack.damage} dmg</span>
                        <span className="attack-uses">{attack.uses} uses</span>
                        <span className="attack-accuracy">{Math.round(attack.accuracy * 100)}% acc</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="action-buttons">
              <button className="nes-btn" onClick={() => setShowDetails(false)}>
                Choose Different
              </button>
              <button className="nes-btn is-primary" onClick={confirmChoice}>
                Confirm Choice
              </button>
            </div>
          </div>
        )}

        <button className="nes-btn is-error back-button" onClick={onBack}>
          Back to Setup
        </button>
      </div>
    </div>
  )
}

export default FamiliarSelection
