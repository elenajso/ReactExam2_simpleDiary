import React, {useState, useEffect} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList=[
  {
    id:1,
    author:"elena",
    content:"하이 1",
    emotion:5,
    created_date:new Date().getTime(),
  },
  {
    id:2,
    author:"권율",
    content:"하이 1",
    emotion:5,
    created_date:new Date().getTime(),
  },
  {
    id:3,
    author:"홍길동",
    content:"하이 1",
    emotion:5,
    created_date:new Date().getTime(),
  },
  {
    id:4,
    author:"신사임당",
    content:"하이 1",
    emotion:5,
    created_date:new Date().getTime(),
  },
]

function App() {
  return (
    <div className="App">
      <h2>일기장
        <DiaryEditor/>
        <DiaryList diaryList={dummyList} />
      </h2>
    </div>
  );
}

export default App;
