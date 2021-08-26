import React from 'react'
import './index.css'
import {data} from './Books'
import Book from './Book'
//vars


function App() {
 
  return (
  <section className='booklist'>
   {data.map((book)=>{
     return <Book {...book} key={book.id}></Book>
   })}
  </section>
  );
}


export default App;
