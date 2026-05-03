export function StudentForm({
  draftName,
  draftScore,
  onNameChange,
  onScoreChange,
  onSubmit,
}) {
  return (
    <article className="card">
      <div className="card-header">
        <div>
          <p className="eyebrow">Register student</p>
          <h2>New entry</h2>
        </div>
        <span className="subtle-text">Keep it simple</span>
      </div>

      <form className="student-form" onSubmit={onSubmit}>
        <label className="field">
          <span>Student name</span>
          <input
            type="text"
            value={draftName}
            onChange={(event) => onNameChange(event.target.value)}
            placeholder="Enter name"
          />
        </label>

        <label className="field">
          <span>Score</span>
          <input
            type="number"
            min="0"
            max="100"
            value={draftScore}
            onChange={(event) => onScoreChange(event.target.value)}
            placeholder="0-100"
          />
        </label>

        <button className="primary-button" type="submit">
          + Add
        </button>
      </form>
    </article>
  )
}