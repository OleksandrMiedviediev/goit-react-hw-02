export default function Feedback({ click, totalFeedback, percent}) {
  return (
    <>
      <p>Good: {click.good}</p>
      <p>Neutral: { click.neutral}</p>
      <p>Bad: {click.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {percent}%</p>
    </>
  )
}