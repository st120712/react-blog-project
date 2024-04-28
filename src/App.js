/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  let [글정보, 글정보변경] = useState([['남자 코트 추천', '2월 17일 발행', false, 0], ['강남 우동 맛집', '2월 18일 발행', false, 0], ['코딩 일기', '2월 19일 발행', false, 0]]);
  let [inputText, setInputText] = useState();

  let upload = () => {
    var tmp = [...글정보];
    tmp.push([inputText, '2월 17일 발행', false, 0]);
    글정보변경(tmp);
  }

  let favorite = (i) => {
    var tmp = [...글정보];
    tmp[i][3] = tmp[i][3] + 1;
    글정보변경(tmp);
  }

  let openModal = (i) => {
    var tmp = [...글정보];
    tmp[i][2] = !tmp[i][2];
    글정보변경(tmp);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      {
        글정보.map(function (a, i) {
          return (
            <>
              <div className="list">
                <h4 onClick={() => { openModal(i) }}>
                  {a[0]}
                  <span onClick={(e) => {
                    e.stopPropagation();
                    favorite(i);
                  }}>👍</span>
                  {a[3]}
                </h4>
                <p>
                  {a[1]}
                </p>
                <hr />
              </div>
              {a[2] ? <Modal 글정보={글정보[i]} /> : null}
            </>
          )
        })
      }

      <div>
        <input onChange={(e) => {
          setInputText(e.target.value);
        }}></input>
        <button onClick={() => {
          upload();
        }}>업로드</button>
      </div>


    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글정보[0]}</h4>
      <p>{props.글정보[1]}</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
