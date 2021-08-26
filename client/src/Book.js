import React from 'react'


const Book=({img,title,author})=>{
    // const {img,title,author}=props.book;
         //{props.clildren}
    
      const clickHandler=()=>{
        alert('hello world') 
      };
      const complexExample=(author)=>{
    console.log(author)
      }
      return(
        <article className='book'>
          <img src={img} alt="img" />
          <h1  onClick={()=> console.log(title)}>{title}</h1>
          <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>click here</button>
        <button type='button' onClick={()=>complexExample(author)}>more info</button>
        </article>
      )
    }
    

export default Book
