import { useState } from 'react' ;
import Favorites from './favorites';
import './App.css';
import search from "./assets/search.png";
import styles from "./app.module.css";
import Book from './bookBlock';
import one from "./assets/1.png";
import two from "./assets/2.png";
import three from "./assets/3.png";
import four from "./assets/4.png";
import five from "./assets/5.png";
import six from "./assets/6.png";
import seven from "./assets/7.png";
import eight from "./assets/8.png";
import nine from "./assets/9.png";
import ten from "./assets/10.png"; 
 

const books = [
  {
    id: "001",
    author: "Chinua Achebe",
    country: "Nigeria",
    image: one,
    language: "English",
    link: "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    pages: 209,
    title: "Things Fall Apart",
    year: 1958,
  },
  {
    id: "002",
    author: "Hans Christian Andersen",
    country: "Denmark",
    image: two,
    language: "Danish",
    link: "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    pages: 784,
    title: "Fairy tales",
    year: 1836,
  },
  {
    id: "003",
    author: "Dante Alighieri",
    country: "Italy",
    image: three,
    language: "Italian",
    link: "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    pages: 928,
    title: "The Divine Comedy",
    year: 1315,
  },
  {
    id: "004",
    author: "Maureen Gallery Kovacs",
    country: "Sumer and Akkadian Empire",
    image: four,
    language: "Akkadian",
    link: "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    pages: 160,
    title: "The Epic Of Gilgamesh",
    year: -1700,
  },
  {
    id: "005",
    author: "Graham Ricardo",
    country: "Achaemenid Empire",
    image: five,
    language: "Hebrew",
    link: "https://en.wikipedia.org/wiki/Book_of_Job\n",
    pages: 176,
    title: "The Book Of Job",
    year: -600,
  },
  {
    id: "006",
    author: "Hanan Al-Shaykh",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    image: six,
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
  },
  {
    id: "007",
    author: "Robert Cook",
    country: "Iceland",
    image: seven,
    language: "English",
    link: "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    pages: 384,
    title: "Nj\u00e1l's Saga",
    year: 1350,
  },
  {
    id: "008",
    author: "Jane Austen",
    country: "United Kingdom",
    image: eight,
    language: "English",
    link: "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    pages: 226,
    title: "Pride and Prejudice",
    year: 1813,
  },
  {
    id: "009",
    author: "Honor\u00e9 de Balzac",
    country: "France",
    image: nine,
    language: "French",
    link: "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    pages: 443,
    title: "Le P\u00e8re Goriot",
    year: 1835,
  },
  {
    id: "010",
    author: "Samuel Beckett",
    country: "Republic of Ireland",
    image:ten,
    language: "French",
    link: "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    pages: 256,
    title: "Molloy, Malone Die",
    year: 1952,
  },
];

function App() { 
  const[allCards , setAllCards] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const searchHandler =  () =>{
    // setSearchTruth(true);
    const results = [];
    const searchInput = document.getElementById('searchInput');
    const searchValue = searchInput.value.toLowerCase().trim();
   const searchh =  books.map((book) =>{
      if(book.title.toLowerCase().trim().includes(searchValue)){ 
        setAllCards(false);
        results.push(book);
        setSearchResult(results); 
        
        
      }else if(!(book.title.toLowerCase().trim().includes(searchValue))){
        setAllCards(false);
        // searchResult.length =0
        
      }
      searchResult.length =0
      
      
      
    })
    console.log(searchResult.length)
  }


  
  
  const homeHandler = () =>{
    searchResult.length = 0;
    setAllCards(true);
  }

  const noResultHandler = () =>{
    searchResult.length = 0;
    setAllCards(false);
  }
  
  //lifting state up - favorite box
  const [liked, setLike] = useState([]);
  const handleLikedList = (book, status) =>{
    if(status){
       const newLikedList = liked.filter(i => i.id !== book.id);
       setLike(newLikedList);
    }else{
      setLike(liked => [...liked, book]);
    }
  }

  return (
    <main className={`py-6 mx-4`}>
      <nav className='w-full full flex justify-center '>
        <div className='flex justify-between w-full bg-gray-700 p-3 rounded-lg'>
          <button onClick={homeHandler}><div className='flex justify-center'><p className='text-white bold text-lg'>Book App</p></div></button>
          <div className='flex justify-center'><p>Hemmatjoo | Portfolio</p></div>
        </div>
      </nav>

      <div>
        <div className=' mt-12'>
          <label><p>Search a book: </p></label>
          <br></br>
          
          <div className=' flex justify-between'>
            <div className='flex'>
            <input id='searchInput' type='text' placeholder='Search title' className='rounded bg-gray-200 p-1 focus:border-black' ></input>
            <img src={search} className='w-8 h-8 bg-indigo-600 rounded-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110 ml-2'onClick={searchHandler} />
            </div>
            <div className='cursor-pointer mr-12'><p className='text-slate-300 border-b-2 border-gray-500'  >Favorites</p></div>
          </div>
        </div>
      </div>

      {
        (!allCards ) &&(
          <> 
          <p className='text-slate-300 mt-5 text-lg'>No results!</p>
          <p className=' text-slate-300 border-b-2 border-gray-500 w-24 cursor-pointer mt-2' onClick={homeHandler}>Return home</p>
          </>
        )
       }


       

       {!!liked.length && (
        <div className={`bg-indigo-500 p-4 rounded-lg   float-right mr-10 mt-6 ${styles.favoritesBox}`} >
          {liked.map(book => 
            <Favorites key={book.id} data={book} ></Favorites>
        )}
       </div>
         
       )}




       {
        allCards ? (
          <ul className={`mt-8 h-full ${styles.main}`}>
        {
           books.map((book) =>(
            <li key={book.id} className={styles.main} >
              <Book key={book.id} data={book} handleLikedList={handleLikedList} ></Book>
            </li>
           ))
        }
       </ul>
        ) : (
          null
        )
       }

       

        
        

{

  searchResult.length> 0 ? (
    <p className='mt-4 text-slate-400 font-bold'>Found {searchResult.length} results</p>
  ) : (null
  )
}
           

          

          {
            searchResult.length >0 ? ( 
              searchResult.map((book) =>{
                
                return(
                  <>
                  
                  <Book key={book.id} data={book} handleLikedList={handleLikedList}></Book>
                  </>
                )
                // console.log(
                //   card.title
                // )
              })
            ) :(noResultHandler)
              
          }
      
      

    </main>
  )
}

export default App;

