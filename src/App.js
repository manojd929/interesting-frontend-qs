import React, { useState } from 'react';
import OverlappingCircle from './problems/OverlappingCircle';
import TreeView from './problems/TreeView';
import './style.css';

const PROBLEMS_SET = {
  OVERLAPPING_CIRCLE: 'Overlapping Circle Identification',
  TREE_VIEW: 'Tree View / Folder Structure',
};

const App = () => {
  const [problem, setProblem] = useState(PROBLEMS_SET.OVERLAPPING_CIRCLE);

  const getComp = () => {
    switch (problem) {
      case PROBLEMS_SET.OVERLAPPING_CIRCLE:
        return <OverlappingCircle />;
      case PROBLEMS_SET.TREE_VIEW:
        return <TreeView />;
      default:
        return <OverlappingCircle />;
    }
  };

  return (
    <div>
      <section>
        <form>
          <fieldset>
            <legend>Choose Problem</legend>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.OVERLAPPING_CIRCLE}
                  name="problem"
                  value={PROBLEMS_SET.OVERLAPPING_CIRCLE}
                  checked={problem === PROBLEMS_SET.OVERLAPPING_CIRCLE}
                  onChange={(e) => setProblem(e.target.value)}
                />
                {PROBLEMS_SET.OVERLAPPING_CIRCLE}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.TREE_VIEW}
                  name="problem"
                  value={PROBLEMS_SET.TREE_VIEW}
                  checked={problem === PROBLEMS_SET.TREE_VIEW}
                  onChange={(e) => setProblem(e.target.value)}
                />
                {PROBLEMS_SET.TREE_VIEW}
              </label>
            </div>
          </fieldset>
        </form>
      </section>
      <section>
        <h3>Demo of {problem}</h3>
        <div
          className="sb-playground"
          style={{
            marginTop: '2rem',
            minHeight: '100vh',
            width: '100vw',
            borderTop: '1px solid black',
          }}
        >
          {getComp()}
        </div>
      </section>
    </div>
  );
};

export default App;
