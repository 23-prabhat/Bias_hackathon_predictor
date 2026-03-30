import { useState } from 'react'
import './styles.css'
import Form from './components/Form'
import Result from './components/Result'
import RulesCard from './components/RulesCard'

function App() {
  const [prediction, setPrediction] = useState(null)
  const [showResult, setShowResult] = useState(false)

  const handlePredictionResult = (data) => {
    setPrediction(data)
    setShowResult(true)
  }

  const handleCloseResult = () => {
    setShowResult(false)
    setPrediction(null)
  }

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>🎯 Hackathon Predictor</h1>
          <p>AI-powered hackathon outcome prediction</p>
        </div>
      </header>

      <main className="app-main">
        {showResult ? (
          <Result data={prediction} onClose={handleCloseResult} />
        ) : (
          <div className="layout-grid">
            <div className="form-column">
              <Form onPredictionResult={handlePredictionResult} />
            </div>
            <div className="rules-column">
              <RulesCard />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
