function getStatus(score) {
  return score >= 50 ? 'Pass' : 'Fail'
}

export function StudentTable({
  students,
  scoreDrafts,
  onScoreDraftChange,
  onSaveScore,
}) {
  return (
    <article className="card table-card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Student records</p>
          <h2>Marks list</h2>
        </div>
        <span className="subtle-text">{students.length} entries</span>
      </div>

      <div className="table-wrap">
        <table className="student-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
              <th>Status</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td className="score-cell">{student.score}</td>
                <td>
                  <span className={`score-badge ${student.score >= 50 ? 'pass' : 'fail'}`}>
                    {getStatus(student.score)}
                  </span>
                </td>
                <td>
                  <div className="score-tools">
                    <input
                      className="score-input"
                      type="number"
                      min="0"
                      max="100"
                      value={scoreDrafts[student.id] ?? ''}
                      onChange={(event) =>
                        onScoreDraftChange(student.id, event.target.value)
                      }
                    />
                    <button
                      className="save-button"
                      type="button"
                      onClick={() => onSaveScore(student.id)}
                    >
                      Save
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}