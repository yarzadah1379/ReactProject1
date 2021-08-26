import React from 'react'
import './index.css'
//vars
const firstObj={
  title:'I lave  you to the Moon and BACK',
   author:'Amelia Hepworth',
   img :'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471_.jpg'
  
}

const secondtObj={
  title:'I lave  you to the Moon and BACK',
   author:'Amelia Hepworth',
   img :'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg'

  
}

function App() {
  return (
  <section className='booklist'>
    <Book img={firstObj.img} title={firstObj.title} author={firstObj.author} />
    <Book img={secondtObj.img} title={secondtObj.title} author={secondtObj.author} >
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem,
       aliquam beatae repudiandae soluta qui? Minima aliquam voluptas dicta facere.</p>
    </Book>
  </section>
  );
}

const Book=({img,title,author,children})=>{
//const {img,title,author}=props;
     //{props.clildren}

  return(
    <article className='book'>
      <img src={img} alt="img" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{children}</p>

    </article>
  )
}


export default App;
