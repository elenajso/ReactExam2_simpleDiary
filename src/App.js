import {useRef, useState} from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList=[
//   {
//     id:1,
//     author:"elena",
//     content:"하이 1",
//     emotion:5,
//     created_date:new Date().getTime(),
//   },
//   {
//     id:2,
//     author:"권율",
//     content:"하이 1",
//     emotion:5,
//     created_date:new Date().getTime(),
//   },
//   {
//     id:3,
//     author:"홍길동",
//     content:"하이 1",
//     emotion:5,
//     created_date:new Date().getTime(),
//   },
//   {
//     id:4,
//     author:"신사임당",
//     content:"하이 1",
//     emotion:5,
//     created_date:new Date().getTime(),
//   },
// ]

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem,...data]);
  }

  
  return (
    <div className="App">
      <h2>일기장
        <DiaryEditor onCreate={onCreate} />
        <DiaryList diaryList={data} />
      </h2>
    </div>
  );
}

export default App;
