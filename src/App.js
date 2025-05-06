import React, { useState } from 'react';
import OverlappingCircle from './react-components/DetectOverlappingCircle';
import TreeView from './react-components/TreeView';
import PausableAutoIncrementer from './react-components/PausableAutoIncrementer';
import UseDebounceCustomHook from './react-components/UseDebounceCustomHook';
import FetchAndAbort from './react-components/FetchAndAbort';
import FetchWithTimeout from './react-components/FetchWithTimeout';
import InfiniteScroller from './react-components/InfiniteScroller';
import SnakeGame from './react-components/SnakeGame';
import Calculator from './react-components/Calculator';
import FeatureFlag from './react-components/FeatureFlag';
import BarGraph from './react-components/BarGraph';
import CustomSwitch from './react-components/CustomSwitch';
import TicTacToe from './react-components/TicTacToe';
import Carousel from './react-components/Carousel';
import './style.css';

const PROBLEMS_SET = {
  OVERLAPPING_CIRCLE: 'Overlapping Circle Identification',
  TREE_VIEW: 'Tree View / Folder Structure',
  PAUSABLE_AUTO_INCREMENTER: 'Pausable Auto Incrementer',
  USE_DEBOUNCE_CUSTOM_HOOK: 'Use Debounce - Custom Hook',
  FETCH_AND_ABORT: 'Fetch and Abort',
  FETCH_WITH_TIMEOUT: 'Fetch With Timeout',
  INFINITE_SCROLLER: 'Infinite Scrolling',
  SNAKE_GAME: 'Snake Game',
  CALCULATOR: 'Calculator',
  FEATURE_FLAG: 'Feature Flag',
  BAR_GRAPH: 'Bar Graph',
  CUSTOM_SWITCH: 'Custom Switch',
  TIC_TAC_TOE: 'Tic Tac Toe',
  CAROUSEL: 'Carousel'
};

const App = () => {
  const [problem, setProblem] = useState(PROBLEMS_SET.TIC_TAC_TOE);

  const getComp = () => {
    switch (problem) {
      case PROBLEMS_SET.OVERLAPPING_CIRCLE:
        return <OverlappingCircle />;
      case PROBLEMS_SET.TREE_VIEW:
        return <TreeView />;
      case PROBLEMS_SET.PAUSABLE_AUTO_INCREMENTER:
        return <PausableAutoIncrementer />;
      case PROBLEMS_SET.USE_DEBOUNCE_CUSTOM_HOOK:
        return <UseDebounceCustomHook />;
      case PROBLEMS_SET.FETCH_AND_ABORT:
        return <FetchAndAbort />;
      case PROBLEMS_SET.FETCH_WITH_TIMEOUT:
        return <FetchWithTimeout />;
      case PROBLEMS_SET.INFINITE_SCROLLER:
        return <InfiniteScroller />;
      case PROBLEMS_SET.SNAKE_GAME:
        return <SnakeGame />;
      case PROBLEMS_SET.CALCULATOR:
        return <Calculator />;
      case PROBLEMS_SET.FEATURE_FLAG:
        return <FeatureFlag />;
      case PROBLEMS_SET.BAR_GRAPH:
        return <BarGraph />;
      case PROBLEMS_SET.CUSTOM_SWITCH:
        return <CustomSwitch />;
      case PROBLEMS_SET.TIC_TAC_TOE:
        return <TicTacToe />;
      case PROBLEMS_SET.CAROUSEL:
        return <Carousel />
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
                  id={PROBLEMS_SET.FETCH_WITH_TIMEOUT}
                  name="problem"
                  value={PROBLEMS_SET.FETCH_WITH_TIMEOUT}
                  checked={problem === PROBLEMS_SET.FETCH_WITH_TIMEOUT}
                  onChange={() => setProblem(PROBLEMS_SET.FETCH_WITH_TIMEOUT)}
                />
                {PROBLEMS_SET.FETCH_WITH_TIMEOUT}
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
                  id={PROBLEMS_SET.SNAKE_GAME}
                  name="problem"
                  value={PROBLEMS_SET.SNAKE_GAME}
                  checked={problem === PROBLEMS_SET.SNAKE_GAME}
                  onChange={() => setProblem(PROBLEMS_SET.SNAKE_GAME)}
                />
                {PROBLEMS_SET.SNAKE_GAME}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.CALCULATOR}
                  name="problem"
                  value={PROBLEMS_SET.CALCULATOR}
                  checked={problem === PROBLEMS_SET.CALCULATOR}
                  onChange={() => setProblem(PROBLEMS_SET.CALCULATOR)}
                />
                {PROBLEMS_SET.CALCULATOR}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.FEATURE_FLAG}
                  name="problem"
                  value={PROBLEMS_SET.FEATURE_FLAG}
                  checked={problem === PROBLEMS_SET.FEATURE_FLAG}
                  onChange={() => setProblem(PROBLEMS_SET.FEATURE_FLAG)}
                />
                {PROBLEMS_SET.FEATURE_FLAG}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.BAR_GRAPH}
                  name="problem"
                  value={PROBLEMS_SET.BAR_GRAPH}
                  checked={problem === PROBLEMS_SET.BAR_GRAPH}
                  onChange={() => setProblem(PROBLEMS_SET.BAR_GRAPH)}
                />
                {PROBLEMS_SET.BAR_GRAPH}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.CUSTOM_SWITCH}
                  name="problem"
                  value={PROBLEMS_SET.CUSTOM_SWITCH}
                  checked={problem === PROBLEMS_SET.CUSTOM_SWITCH}
                  onChange={() => setProblem(PROBLEMS_SET.CUSTOM_SWITCH)}
                />
                {PROBLEMS_SET.CUSTOM_SWITCH}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.TIC_TAC_TOE}
                  name="problem"
                  value={PROBLEMS_SET.TIC_TAC_TOE}
                  checked={problem === PROBLEMS_SET.TIC_TAC_TOE}
                  onChange={() => setProblem(PROBLEMS_SET.TIC_TAC_TOE)}
                />
                {PROBLEMS_SET.TIC_TAC_TOE}
              </label>
            </div>
            <div>
              <label htmlFor="problem">
                <input
                  type="radio"
                  id={PROBLEMS_SET.CAROUSEL}
                  name="problem"
                  value={PROBLEMS_SET.CAROUSEL}
                  checked={problem === PROBLEMS_SET.CAROUSEL}
                  onChange={() => setProblem(PROBLEMS_SET.CAROUSEL)}
                />
                {PROBLEMS_SET.CAROUSEL}
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
            margin: '2rem 0rem',
            padding: '1rem 0',
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
