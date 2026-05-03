export function StatsRow({ totalStudents, passedStudents, averageScore }) {
  return (
    <article className="card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Quick summary</p>
          <h2>Score overview</h2>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Total</span>
          <div className="stat-value">{totalStudents}</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">Passed</span>
          <div className="stat-value">{passedStudents}</div>
        </div>
        <div className="stat-card">
          <span className="stat-label">Average</span>
          <div className="stat-value">{averageScore}</div>
        </div>
      </div>
    </article>
  )
}