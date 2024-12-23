import { useEffect, useState } from "react";
import BookList from "../BookList/BookList";

const Books = () => {
    const [books ,setBooks] =useState([]);
    const [count,setCount]=useState(6)
    useEffect(()=>{
        fetch("Books.json")
        .then((res)=>res.json())
        .then((data)=>setBooks(data))
      },[])
    return (
        <div>
            <h1 className="text-center text-3xl mt-10">Books</h1>
        <div className="grid grid-cols-3 gap-10 mt-8">
           
            {
                books.slice(0,count).map((Book)=><BookList key={books.id} Book={Book}></BookList>)
            }
        
 
        </div>
        <div className={`text-center mt-6 mb-24 ${count == books.length && "hidden"}`}>
                        <button onClick={()=>setCount(books.length)} className="btn bg-blue-400">
                            See All Books</button>
                       </div>
        </div>
    );
};

export default Books;