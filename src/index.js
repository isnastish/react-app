import React from 'react';
import ReactDOM from 'react-dom/client';
// class component is not used for now
import AppClass from './AppClass';

// using functional component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // message is a property
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <App message="Hello, world" /> */}
          <AppClass message="Hello from AppClass" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
