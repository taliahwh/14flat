import React, { useState, useEffect } from 'react';

const Alert = ({ variant, children }) => {
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    if (variant === 'success') {
      // when the component is mounted, the alert is displayed for 3 seconds
      setTimeout(() => {
        setAlert(false);
      }, 3000);
    }
  }, [variant]);

  return (
    <>
      {alert && (
        <div
          className={
            variant === 'error'
              ? 'p-4 mb-4 text-sm text-red-700 bg-red-100 font-robotoLight'
              : variant === 'warning'
              ? 'p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 font-robotoLight'
              : variant === 'success'
              ? 'p-4 mb-4 text-sm text-green-800 bg-[#94c691] font-robotoLight'
              : variant === 'info'
              ? 'p-4 mb-4 text-sm text-neutral-600 bg-neutral-200 font-robotoLight'
              : ''
          }
          role="alert"
        >
          {children}
        </div>
      )}
    </>
  );
};

Alert.defaultProps = {
  variant: 'error',
};

export default Alert;
