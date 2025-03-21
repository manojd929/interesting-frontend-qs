import React from 'react';
import Page from './pages/Page';
import './style.css';

const FeatureFlag = () => {
  return (
    <div className="feature-flag-container">
      <h1>Feature Flag</h1>
      <main>
        <Page />
      </main>
    </div>
  );
};

export default FeatureFlag;
