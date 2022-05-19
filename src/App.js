// import React, { useState, useEffect } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "홍제섭",
    content: "아자아자",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "노영훈",
    content: "아자아자",
    emotion: 4,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "정성운",
    content: "아자아자",
    emotion: 3,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
