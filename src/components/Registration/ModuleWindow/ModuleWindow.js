import React from "react"
import styles from "./ModuleWindow.module.css";

const ModuleWindow = ({ text, isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <div>{text}</div>
            <button onClick={onClose}>X</button>
          </div>
        </div>
      )}
    </>
  );
};

export default ModuleWindow;