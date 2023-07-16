import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

function AlertMessage({ variant, messages }) {
  const [show, setShow] = useState(true);

  if (show && Object.keys(messages).length) {
    return (
      <Alert variant={variant ?? "danger"} onClose={() => setShow(false)} dismissible>
        {
          Object.entries(messages ?? {})
            .map(([inputName, error]) => (
              <p key={inputName}>{error[0]??""}</p>
            ))

        }
      </Alert>
    );
  }

  return <></>;
}

export default AlertMessage;