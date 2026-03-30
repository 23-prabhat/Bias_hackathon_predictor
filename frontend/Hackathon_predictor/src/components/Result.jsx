export default function Result({ data, onClose }) {
  if (!data) return null

  const predictionValue = data.prediction
  
  const getPredictionMessage = () => {
    if (predictionValue === 0 || predictionValue === '0') {
      return { 
        text: 'You will Lose', 
        emoji: '😔', 
        color: 'loss',
        description: 'Better luck next time!'
      }
    } else if (predictionValue === 1 || predictionValue === '1') {
      return { 
        text: 'You will Win!', 
        emoji: '🎉', 
        color: 'win',
        description: 'Congratulations on your victory!'
      }
    }
    return { 
      text: 'Prediction: ' + predictionValue, 
      emoji: '📊', 
      color: 'neutral',
      description: 'See details below'
    }
  }

  const message = getPredictionMessage()

  return (
    <div className="result-wrapper">
      <div className="result-container">
        <div className={`prediction-card ${message.color}`}>
          <div className="prediction-emoji">{message.emoji}</div>
          <h2 className="prediction-title">{message.text}</h2>
          <p className="prediction-description">{message.description}</p>
        </div>

        <div className="details-card">
          <h3>Prediction Details</h3>
          <div className="details-grid">
            <div className="detail-item">
              <span className="detail-label">Team Leader</span>
              <span className="detail-value">{data.Team_Lead}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Presentation By</span>
              <span className="detail-value">{data.Presentation_By}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Round Reached</span>
              <span className="detail-value">{data.Round_Reached === 0 ? 'Round 1' : 'Final'}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Total Hours</span>
              <span className="detail-value">{data.Total_Hours === 0 ? '< 12h' : '≥ 12h'}</span>
            </div>
            {data.hackathon_name && (
              <div className="detail-item">
                <span className="detail-label">Hackathon</span>
                <span className="detail-value">{data.hackathon_name}</span>
              </div>
            )}
          </div>
        </div>

        <button onClick={onClose} className="btn btn-primary">
          Make Another Prediction
        </button>
      </div>
    </div>
  )
}
