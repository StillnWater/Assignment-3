import { useState } from 'react'

function createScoreDraftMap(students) {
  return Object.fromEntries(students.map((student) => [student.id, String(student.score)]))
}

export function useStudents(initialStudents) {
  const [students, setStudents] = useState(initialStudents)
  const [draftName, setDraftName] = useState('')
  const [draftScore, setDraftScore] = useState('')
  const [scoreDrafts, setScoreDrafts] = useState(() => createScoreDraftMap(initialStudents))

  const totalStudents = students.length
  const passedStudents = students.filter((student) => student.score >= 50).length
  const averageScore =
    totalStudents === 0
      ? 0
      : Math.round(
          students.reduce((sum, student) => sum + student.score, 0) / totalStudents,
        )

  const addStudent = (event) => {
    event.preventDefault()

    const trimmedName = draftName.trim()
    const parsedScore = Number(draftScore)

    if (!trimmedName || Number.isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) {
      return
    }

    const newStudent = {
      id: Date.now(),
      name: trimmedName,
      score: parsedScore,
    }

    setStudents((currentStudents) => [...currentStudents, newStudent])
    setScoreDrafts((currentDrafts) => ({
      ...currentDrafts,
      [newStudent.id]: String(parsedScore),
    }))
    setDraftName('')
    setDraftScore('')
  }

  const updateScoreDraft = (studentId, value) => {
    setScoreDrafts((currentDrafts) => ({
      ...currentDrafts,
      [studentId]: value,
    }))
  }

  const saveScore = (studentId) => {
    const nextScore = Number(scoreDrafts[studentId])

    if (Number.isNaN(nextScore) || nextScore < 0 || nextScore > 100) {
      return
    }

    setStudents((currentStudents) =>
      currentStudents.map((student) =>
        student.id === studentId ? { ...student, score: nextScore } : student,
      ),
    )
  }

  return {
    addStudent,
    averageScore,
    draftName,
    draftScore,
    passedStudents,
    scoreDrafts,
    saveScore,
    setDraftName,
    setDraftScore,
    students,
    totalStudents,
    updateScoreDraft,
  }
}