import React from "react";
import PropTypes from "prop-types";
import styles from "./StatBlock.module.css";

const StatBlock = ({ good, neutral, bad, totalFeed, positiveRate }) => (
  <>
    <p className={styles.statValue}>Так: {good}</p>
    <p className={styles.statValue}>Тай таке: {neutral}</p>
    <p className={styles.statValue}>Ні: {bad}</p>
    <p className={styles.statValue}>Загалом: {totalFeed}</p>
    <p className={styles.statValue}>Позитив: {positiveRate.toFixed(2)}&#37;</p>
  </>
);

StatBlock.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeed: PropTypes.number,
  positiveRate: PropTypes.number.isRequired,
};

export default StatBlock;
