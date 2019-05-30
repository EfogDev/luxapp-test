import React from 'react';
import styles from './index.module.css';
import TimeDiff from './pages/TimeDiff';

function App() {
  return (
    <div className={styles.content}>
      <TimeDiff />
    </div>
  );
}

export default App;
