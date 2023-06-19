import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.length !== 0
        ? toasts.map(({ message, id, variant }) => (
            <li key={id} className={styles.toastWrapper}>
              <Toast id={id} variant={variant}>
                {message}
              </Toast>
            </li>
          ))
        : null}
    </ol>
  );
}

export default ToastShelf;
