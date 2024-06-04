import "./Title.css"

export default function Title({subtitle, title}) {
  return (
    <div className="title container">
        <p>{subtitle}</p>
        <h2>{title}</h2>
    </div>
  )
}
