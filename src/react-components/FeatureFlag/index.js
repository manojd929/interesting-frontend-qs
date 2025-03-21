import Page from './pages/Page';
import './style.css';

const FeatureFlag = () => {
  return (
    <div className="app">
      <h1>Feature Flag</h1>
      <main>
        <div className="datetime-now">{new Date().toLocaleString()}</div>
        <hr />
        <Page />
      </main>
    </div>
  );
};

export default FeatureFlag;
