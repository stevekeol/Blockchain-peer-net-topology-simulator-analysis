import React, { createContext, useState, useContext, useReducer } from "react";

// 简单数据
export const TestContext = createContext<
  // 演示类型声明
  [string, React.Dispatch<React.SetStateAction<string>>]
>(null);

// 复杂数据
export const TestReducerContext = createContext(null);

export function DisplayTest() {
  const [test, setTest] = useContext(TestContext);
  const [testReducerState, testReducerDispatch] = useContext(
    TestReducerContext
  );
  return (
    <div>
      <p>now the value of test: {test}</p>
      <input value={test} onChange={e => setTest(e.target.value)}></input>
      <p>I want to say: {JSON.stringify(testReducerState)}</p>
      <button
        onClick={() => {
          testReducerDispatch("fuck");
        }}
      >
        fuck it!
      </button>
    </div>
  );
}

export default () => {
  const test = useState("test");
  const testReducer = useReducer(
    (state, action) => {
      if (action === "fuck") {
        state.obj.test = "fuck you too";
      }
      // simple immutable
      return JSON.parse(JSON.stringify(state));
    },
    { obj: { test: "hello?" } }
  );
  return (
    <div>
      <TestContext.Provider value={test}>
        <TestReducerContext.Provider value={testReducer}>
          <style jsx global>{`
            body {
              background-color: blue;
              color: white;
            }
          `}</style>
          <DisplayTest></DisplayTest>
        </TestReducerContext.Provider>
      </TestContext.Provider>
    </div>
  );
};