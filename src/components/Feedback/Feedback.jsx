import React from "react";
import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const FeedbackColector = ({ feedByClick }) => (
  <div className={styles.feedbackColectorContainer}>
    <button
      className={styles.feedbackColectorButton}
      type="button"
      onClick={() => feedByClick("good")}
    >
      Так ;-)
    </button>
    <button
      className={styles.feedbackColectorButton}
      type="button"
      onClick={() => feedByClick("neutral")}
    >
      Тай таке :-(
    </button>
    <button
      className={styles.feedbackColectorButton}
      type="button"
      onClick={() => feedByClick("bad")}
    >
      Ні :-#
    </button>
  </div>
);

FeedbackColector.propTypes = {
  feedByClick: PropTypes.func.isRequired,
};

export default FeedbackColector;
