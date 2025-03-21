import Page from './pages/Page';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <h1>Bar Graph</h1>
      <main>
        <div className="datetime-now">{new Date().toLocaleString()}</div>
        <hr />
        <Page />
      </main>
    </div>
  );
};

export default App;
