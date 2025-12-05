import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

/**
 * PasswordProtect Component
 * 
 * Wraps content in a password protection layer.
 * Password is stored in sessionStorage so users don't need to re-enter
 * during the same browser session.
 * 
 * Usage:
 * <PasswordProtect password="mypassword" projectName="Project Name">
 *   {children}
 * </PasswordProtect>
 * 
 * Props:
 * - password: The password required to access the content
 * - projectName: Display name shown on the lock screen
 * - hint: Optional hint text for the password
 * - storageKey: Optional custom key for sessionStorage (defaults to projectName)
 */
export default function PasswordProtect({ 
  children, 
  password, 
  projectName = "Protected Project",
  hint = "",
  storageKey = null
}) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const key = storageKey || `project_access_${projectName.replace(/\s+/g, '_').toLowerCase()}`;

  // Check sessionStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = sessionStorage.getItem(key);
      if (stored === password) {
        setIsUnlocked(true);
      }
    }
    setIsLoading(false);
  }, [key, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === password) {
      sessionStorage.setItem(key, password);
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setInputValue('');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(key);
    setIsUnlocked(false);
    setInputValue('');
  };

  // Show nothing while checking sessionStorage (prevents flash)
  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );
  }

  if (isUnlocked) {
    return (
      <div className={styles.unlockedContainer}>
        <div className={styles.logoutBar}>
          <span className={styles.accessGranted}>
            <i className="fa-solid fa-lock-open"></i>
            Access granted
          </span>
          <button onClick={handleLogout} className={styles.logoutButton}>
            <i className="fa-solid fa-right-from-bracket"></i>
            Lock
          </button>
        </div>
        {children}
      </div>
    );
  }

  return (
    <div className={styles.lockScreen}>
      <div className={styles.lockCard}>
        <div className={styles.lockIcon}>
          <i className="fa-solid fa-lock"></i>
        </div>
        <h2 className={styles.lockTitle}>{projectName}</h2>
        <p className={styles.lockDescription}>
          This project dashboard is password protected.
        </p>
        
        <form onSubmit={handleSubmit} className={styles.lockForm}>
          <div className={styles.inputWrapper}>
            <input
              type="password"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className={`${styles.passwordInput} ${error ? styles.inputError : ''}`}
              autoFocus
            />
            <button type="submit" className={styles.unlockButton}>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          
          {error && (
            <p className={styles.errorMessage}>
              <i className="fa-solid fa-triangle-exclamation"></i>
              Incorrect password
            </p>
          )}
          
          {hint && (
            <p className={styles.hintText}>
              <i className="fa-solid fa-lightbulb"></i>
              Hint: {hint}
            </p>
          )}
        </form>
        
        <div className={styles.lockFooter}>
          <p>Contact the project lead if you need access.</p>
        </div>
      </div>
    </div>
  );
}
