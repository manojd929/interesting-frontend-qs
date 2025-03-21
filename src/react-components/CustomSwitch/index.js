import Page from './pages/Page';

const App = () => {
  return (
    <div className="app">
      <h1>Custom Switch</h1>
      <main>
        <div className="datetime-now">{new Date().toLocaleString()}</div>
        <hr />
        <Page />
      </main>
    </div>
  );
};

export default App;
