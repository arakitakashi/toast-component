import React from "react";
import useEscapeKey from "../../hooks/use-escape-key";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  function createToast(message, variant) {
    const newToast = {
      message,
      variant,
      id: crypto.randomUUID(),
    };
    setToasts([...toasts, newToast]);
  }

  function dismissToast(id) {
    const nextToasts = toasts.filter((toast) => toast.id !== id);
    setToasts(nextToasts);
  }

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
        createToast,
        dismissToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
