import React from 'react';
import styles from './KavachAlert.module.css';

export default function KavachAlert(): JSX.Element {
  return (
    <div className={styles.alertContainer}>
      <div className={styles.alertContent}>
        <div className={styles.alertIcon}>🛡️</div>
        <div className={styles.alertText}>
          <strong>Kavach - Secret Management Tool</strong> is in early development stage! 
          Seeking contributors and feedback. 
          <a href="https://github.com/Gkemhcs/kavach-docs" target="_blank" rel="noopener noreferrer" className={styles.alertLink}>
            Try it out
          </a> 
          and 
          <a href="https://github.com/Gkemhcs/kavach-cli/issues" target="_blank" rel="noopener noreferrer" className={styles.alertLink}>
            report issues
          </a>
        </div>
        <a href="https://docs.kavach.gkem.cloud" target="_blank" rel="noopener noreferrer" className={styles.docsButton}>
          📚 View Docs
        </a>
      </div>
    </div>
  );
}
