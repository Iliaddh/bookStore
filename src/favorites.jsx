import { useState } from 'react' 
import './App.css';
import heart from "./assets/heart.svg";
import BookBlock from "./bookBlock";
import styles from "./app.module.css"


function favorites({data:{image, title}}) { 

  return (
    <>
    <div className={`p-2 h-20 mt-4 flex bg-indigo-400 rounded-md items-center ${styles.singleFavorite}`}>

        <img className='h-full rounded-md' src={image} alt={title}/>
        <div className=''><p className=' ml-6'>{title}</p></div>
    </div>
        

    
    
    </>
  )
}

export default favorites
