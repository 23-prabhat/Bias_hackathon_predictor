import { useState } from 'react'
import { predict } from '../api/predict'

const TEAM_MEMBERS = ['Prabhat', 'Krutarth', 'Other']

export default function Form({ onPredictionResult }) {
  const [formData, setFormData] = useState({
    hackathonName: '',
    teamLeader: '',
    duration: '',
    presentationDoneBy: '',
    roundReached: ''
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleRadioChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handlePredict = async () => {
    if (!formData.hackathonName || !formData.teamLeader || !formData.duration || 
        !formData.presentationDoneBy || formData.roundReached === '') {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      const backendData = {
        Team_Lead: formData.teamLeader,
        Presentation_By: formData.presentationDoneBy,
        Round_Reached: Number(formData.roundReached),
        Total_Hours: Number(formData.duration),
        hackathon_name: formData.hackathonName
      }

      console.log("📤 Sending data:", backendData)
      const result = await predict(backendData)
      
      onPredictionResult({
        ...backendData,
        prediction: result.prediction
      })
    } catch (error) {
      console.error('Prediction error:', error)
      alert('Error making prediction: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({
      hackathonName: '',
      teamLeader: '',
      duration: '',
      presentationDoneBy: '',
      roundReached: ''
    })
  }

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h2>Prediction Form</h2>
        <p>Fill in your hackathon details for accurate prediction</p>
      </div>

      <form className="modern-form">
        <div className="form-group">
          <label htmlFor="teamLeader">Team Leader</label>
          <select
            id="teamLeader"
            name="teamLeader"
            value={formData.teamLeader}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select team leader</option>
            {TEAM_MEMBERS.map(member => (
              <option key={member} value={member}>{member}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="presentationDoneBy">Presentation By</label>
          <select
            id="presentationDoneBy"
            name="presentationDoneBy"
            value={formData.presentationDoneBy}
            onChange={handleChange}
            className="form-select"
          >
            <option value="">Select presenter</option>
            {TEAM_MEMBERS.map(member => (
              <option key={member} value={member}>{member}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Round Reached</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="roundReached"
                value="0"
                checked={formData.roundReached === '0'}
                onChange={(e) => handleRadioChange('roundReached', e.target.value)}
              />
              <span>Round 1</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="roundReached"
                value="1"
                checked={formData.roundReached === '1'}
                onChange={(e) => handleRadioChange('roundReached', e.target.value)}
              />
              <span>Final Round</span>
            </label>
          </div>
        </div>

       
        <div className="form-group">
          <label>Total Hours</label>
          <div className="segmented-control">
            <button
              type="button"
              className={`segment ${formData.duration === '0' ? 'active' : ''}`}
              onClick={() => handleRadioChange('duration', '0')}
            >
              &lt; 12 Hours
            </button>
            <button
              type="button"
              className={`segment ${formData.duration === '1' ? 'active' : ''}`}
              onClick={() => handleRadioChange('duration', '1')}
            >
              ≥ 12 Hours
            </button>
          </div>
        </div>

        
        <div className="form-group">
          <label htmlFor="hackathonName">Hackathon Name </label>
          <input
            id="hackathonName"
            type="text"
            name="hackathonName"
            value={formData.hackathonName}
            onChange={handleChange}
            placeholder="e.g., Smart India Hackathon"
            className="form-input"
          />
        </div>


        <div className="form-actions">
          <button 
            type="button" 
            onClick={handlePredict} 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Predicting...' : 'Get Prediction'}
          </button>
          <button type="button" onClick={handleReset} className="btn btn-secondary">
            Reset
          </button>
        </div>
      </form>
    </div>
  )
}
