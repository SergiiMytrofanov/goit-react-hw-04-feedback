import React, { useState } from "react";
import FeedbackColector from "./Feedback/Feedback";
import StatBlock from "./StatBlock/StatBlock";
import Section from "./Section/Section";
import Notification from "./StatBlock/Notіfication";
import styles from "./App.module.css";


const AppFeedbackStat = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedbackClick = (feedbackType) => {
   setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const calculatePositiveRate = () => {
    const { good, neutral, bad } = feedback;
    const totalFeedback = good + neutral + bad;
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  };

  const { good, neutral, bad } = feedback;
  const totalFeed = good + neutral + bad;
  const positiveRate = calculatePositiveRate();

    return (
      <div className={styles.feedbackContainer}>
        <Section title="Вам сподобалося у нас &#9829;">
          <FeedbackColector feedByClick={(type) => handleFeedbackClick(type)} />
        </Section>
          {totalFeed === 0 ? (
            <Section>
            <Notification message={"Тут ще немає відгуків. Ви перший:)"} />
            </Section>
          ) : (
            <Section title="Результат опитування">
            <StatBlock
              good={good}
              neutral={neutral}
              bad={bad}
              totalFeed={totalFeed}
              positiveRate={positiveRate}
            />
            </Section>
          )}

      </div>
    );

}

export default AppFeedbackStat;
