/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  let [글정보, 글정보변경] = useState([['남자 코트 추천', '2월 17일 발행',false], ['강남 우동 맛집', '2월 18일 발행',false], ['코딩 일기', '2월 19일 발행',false]]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let posts = '강남 고기 맛집';

  let openModal = (i)=>{
    var tmp = [...글정보];
    tmp[i][2] = !tmp[i][2];
    글정보변경(tmp);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      {/* <div className="list">
        <h3>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3 onClick={() => { setModal(!modal) }}>{글제목[2]}</h3>
        <p>2월 19일 발행</p>
        <hr />
      </div> */}

      {
        글정보.map(function (a, i) {
          return (<>
            <div className="list">
              <h4 onClick={()=>{openModal(i)}}>{a[0]}</h4>
              <p>{a[1]}</p>
              <hr />
            </div>
           {a[2] ? <Modal 글정보 = {글정보[i]}/> : null}
            </>
          )
        })
      }

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
