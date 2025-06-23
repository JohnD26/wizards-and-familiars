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
