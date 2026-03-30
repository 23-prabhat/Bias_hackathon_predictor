export default function RulesCard() {
  return (
    <div className="rules-card">
      <div className="rules-header">
        <h3>Input Format Guide</h3>
        <p>Understand what values to enter for each field</p>
      </div>

      <div className="rules-list">
        <div className="rule-item">
          <div className="rule-icon">📊</div>
          <div className="rule-content">
            <h4>Round Reached</h4>
            <div className="rule-options">
              <span className="option"><strong>0</strong> = Round 1</span>
              <span className="option"><strong>1</strong> = Final Round</span>
            </div>
          </div>
        </div>

        <div className="rule-item">
          <div className="rule-icon">⏱️</div>
          <div className="rule-content">
            <h4>Total Hours</h4>
            <div className="rule-options">
              <span className="option"><strong>0</strong> = Less than 12h</span>
              <span className="option"><strong>1</strong> = 12h or above</span>
            </div>
          </div>
        </div>

        <div className="rule-item">
          <div className="rule-icon">👥</div>
          <div className="rule-content">
            <h4>Team Details</h4>
            <p className="rule-text">Enter real names for Team Leader and Presenter. Hackathon name is optional.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
