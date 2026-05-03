import './App.css'
import { DashboardHeader } from './components/DashboardHeader.jsx'
import { StatsRow } from './components/StatsRow.jsx'
import { StudentForm } from './components/StudentForm.jsx'
import { StudentTable } from './components/StudentTable.jsx'
import { useStudents } from './hooks/useStudents.js'
import { initialStudents, studentNotes } from './data/studentDashboard.js'

function App() {
  const {
    addStudent,
    averageScore,
    draftName,
    draftScore,
    passedStudents,
    scoreDrafts,
    setDraftName,
    setDraftScore,
    saveScore,
    students,
    totalStudents,
    updateScoreDraft,
  } = useStudents(initialStudents)

  return (
    <main className="dashboard-shell">
      <DashboardHeader
        title="Student Dashboard"
        subtitle="A simple React practice project for adding students and tracking scores."
      />

      <section className="top-grid">
        <StudentForm
          draftName={draftName}
          draftScore={draftScore}
          onNameChange={setDraftName}
          onScoreChange={setDraftScore}
          onSubmit={addStudent}
        />

        <StatsRow
          totalStudents={totalStudents}
          passedStudents={passedStudents}
          averageScore={averageScore}
        />
      </section>

      <StudentTable
        students={students}
        scoreDrafts={scoreDrafts}
        onScoreDraftChange={updateScoreDraft}
        onSaveScore={saveScore}
      />

      <section className="note-card">
        <h2>Beginner friendly setup</h2>
        <ul>
          {studentNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
