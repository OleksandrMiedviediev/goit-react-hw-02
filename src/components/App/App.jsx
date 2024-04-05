import { useState, useEffect } from 'react'
import Description from '../Description/Description.jsx'
import Options from '../Options/Options.jsx'
import Feedback from '../Feedback/Feedback.jsx'
import Notification from '../Notification/Notification.jsx'

export default function App() {
  
  
  const [click, setClick] = useState(() => {

    const savedClicks = JSON.parse(window.localStorage.getItem("key"));
    return savedClicks ? savedClicks : { good: 0, neutral: 0, bad: 0 }
  });
  

const updateFeedback = feedbackType => {
  setClick(obj => ({
    ...obj,
    [feedbackType]: obj[feedbackType] + 1
  }));  
}
  const resetFeedback = () => {
  setClick({
    good: 0,
    neutral: 0,
    bad: 0
    });  
}
  
  const totalFeedback = click.good + click.neutral + click.bad;
  const percent = Math.round((click.good / totalFeedback) * 100)

useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(click));
  }, [click]);

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={ resetFeedback} />
      {totalFeedback > 0?
        <Feedback click={click} totalFeedback={totalFeedback} percent={percent} />
      :<Notification />}
    </>
  )
}

