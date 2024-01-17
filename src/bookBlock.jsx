import { useState, useRef } from 'react';
import './App.css';
import {AiFillHeart} from 'react-icons/ai'
import styles from "./Book.module.css"

function Book({ data,  handleLikedList }) {
  const{image, title, author, lang, pages,} = data;
  const [like, setLike] = useState(false);
  const likeHandler = () =>{
    
    handleLikedList(data, like);
    setLike(like => !like);
  }

  
  
  return (
    <>
      <div className={`flex p-2 h-32 mt-4 bg-slate-700 rounded-lg justify-between ${styles.card}`}>
        <div className={`flex ${styles.singleCard}`}>
          <img src={image} alt="" className='rounded h-full' />
          <div className='block ml-3 '>
            <p className='p-1 text-xl'>{title}</p>
            <p className='p-1 text-md'>{author}</p>
            <div className='flex '>
              <p className='p-1 text-sm'>{lang}</p>
              <p className='p-1 text-sm'>{pages} pages</p>
            </div>
          </div>
        </div>

        <div className='cursor-pointer h-2' onClick={likeHandler}>
          <AiFillHeart  color={like ? "red" : "#e0e0e0"} fontSize="1.8rem"></AiFillHeart>
        </div>
      </div>
    </>
  );
}

export default Book;
