export function DashboardHeader({ title, subtitle }) {
  return (
    <header className="dashboard-header">
      <p className="eyebrow">Web Development Assignment</p>
      <h1>{title}</h1>
      <p className="hero-text">{subtitle}</p>
    </header>
  )
}