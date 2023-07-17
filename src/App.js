import React, { useState } from 'react';
import OverlappingCircle from './problems/OverlappingCircle';
import TreeView from './problems/TreeView';
import DeepFlatten from './problems/DeepFlatten';
import PausableAutoIncrementer from './problems/PausableAutoIncrementer';
import UseDebounceCustomHook from './problems/UseDebounceCustomHook';
import FetchAndAbort from './problems/FetchAndAbort';
import InfiniteScroller from './problems/InfiniteScroller';
import DebounceAndThrottle from './problems/DebounceAndThrottle';
import './style.css';

const PROBLEMS_SET = {
  OVERLAPPING_CIRCLE: 'Overlapping Circle Identification',
  TREE_VIEW: 'Tree View / Folder Structure',
  DEEP_FLATTEN: 'Deep Flatten Object',
  PAUSABLE_AUTO_INCREMENTER: 'Pausable Auto Incrementer',
  USE_DEBOUNCE_CUSTOM_HOOK: 'Use Debounce - Custom Hook',
  FETCH_AND_ABORT: 'Fetch and Abort',
  INFINITE_SCROLLER: 'Infinite Scrolling',
  DEBOUNCE_AND_THROTTLE: 'Debounce and Throttle',
};

const App = () => {
  const [problem, setProblem] = useState(PROBLEMS_SET.DEBOUNCE_AND_THROTTLE);

  const getComp = () => {
    switch (problem) {
      case PROBLEMS_SET.OVERLAPPING_CIRCLE:
        return <OverlappingCircle />;
      case PROBLEMS_SET.TREE_VIEW:
        return <TreeView />;
      case PROBLEMS_SET.DEEP_FLATTEN:
        return <DeepFlatten />;
      case PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER:
        return <PausableAutoIncrementer />;
      case PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK:
        return <UseDebounceCustomHook />;
      case PROBLEMS_SET.FETCH_AND_ABORT:
        return <FetchAndAbort />;
      case PROBLEMS_SET.INFINITE_SCROLLER:
        return <InfiniteScroller />;
      case PROBLEMS_SET.DEBOUNCE_AND_THROTTLE:
        return <DebounceAndThrottle />;
      default:
        return <></>;
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
                  onChange={() => setProblem(PROBLEMS_SET.OVERLAPPING_CIRCLE)}
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
                  onChange={() => setProblem(PROBLEMS_SET.TREE_VIEW)}
                />
                {PROBLEMS_SET.TREE_VIEW}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.DEEP_FLATTEN}
                  name="problem"
                  value={PROBLEMS_SET.DEEP_FLATTEN}
                  checked={problem === PROBLEMS_SET.DEEP_FLATTEN}
                  onChange={() => setProblem(PROBLEMS_SET.DEEP_FLATTEN)}
                />
                {PROBLEMS_SET.DEEP_FLATTEN}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER}
                  name="problem"
                  value={PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER}
                  checked={problem === PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER}
                  onChange={() =>
                    setProblem(PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER)
                  }
                />
                {PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK}
                  name="problem"
                  value={PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK}
                  checked={problem === PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK}
                  onChange={() =>
                    setProblem(PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK)
                  }
                />
                {PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.FETCH_AND_ABORT}
                  name="problem"
                  value={PROBLEMS_SET.FETCH_AND_ABORT}
                  checked={problem === PROBLEMS_SET.FETCH_AND_ABORT}
                  onChange={() => setProblem(PROBLEMS_SET.FETCH_AND_ABORT)}
                />
                {PROBLEMS_SET.FETCH_AND_ABORT}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.INFINITE_SCROLLER}
                  name="problem"
                  value={PROBLEMS_SET.INFINITE_SCROLLER}
                  checked={problem === PROBLEMS_SET.INFINITE_SCROLLER}
                  onChange={() => setProblem(PROBLEMS_SET.INFINITE_SCROLLER)}
                />
                {PROBLEMS_SET.INFINITE_SCROLLER}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.DEBOUNCE_AND_THROTTLE}
                  name="problem"
                  value={PROBLEMS_SET.DEBOUNCE_AND_THROTTLE}
                  checked={problem === PROBLEMS_SET.DEBOUNCE_AND_THROTTLE}
                  onChange={() =>
                    setProblem(PROBLEMS_SET.DEBOUNCE_AND_THROTTLE)
                  }
                />
                {PROBLEMS_SET.DEBOUNCE_AND_THROTTLE}
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
