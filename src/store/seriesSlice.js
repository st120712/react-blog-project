import { createSlice } from "@reduxjs/toolkit";

let seriesItem = createSlice({
  name: 'seriesItem',
  initialState: [
    {
      id: 0,
      title: '시리즈1',
      content: '시리즈1시리즈1시리즈1시리즈1시리즈1시리즈1시리즈1시리즈1시리즈1시리즈1',
      img: 'https://picsum.photos/id/11/200/300'
    },
    {
      id: 1,
      title: '시리즈2',
      content: '시리즈2시리즈2시리즈2시리즈2시리즈2시리즈2시리즈2시리즈2시리즈2시리즈2',
      img: 'https://picsum.photos/id/22/200/300'
    },
    {
      id: 2,
      title: '시리즈3',
      content: '시리즈3시리즈3시리즈3시리즈3시리즈3시리즈3시리즈3시리즈3시리즈3시리즈3',
      img: 'https://picsum.photos/id/33/200/300'
    },
    {
      id: 3,
      title: '시리즈4',
      content: '시리즈4시리즈4시리즈4시리즈4시리즈4시리즈4시리즈4시리즈4시리즈4시리즈4',
      img: 'https://picsum.photos/id/44/200/300'
    },
    {
      id: 4,
      title: '시리즈5',
      content: '시리즈5시리즈5시리즈5시리즈5시리즈5시리즈5시리즈5시리즈5시리즈5시리즈5',
      img: 'https://picsum.photos/id/55/200/300'
    }
  ],
})

export default seriesItem;