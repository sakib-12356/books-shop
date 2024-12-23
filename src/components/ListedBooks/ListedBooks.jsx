import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getIemFromLocalStrorages } from "../Utility/localStrorage";
import Wish from "../Wish/Wish";


const ListedBooks = () => {
    const lists =useLoaderData();
    const [wish, setWish]= useState([]);
    // console.log(wish)

    useEffect(() => {
        const listed = getIemFromLocalStrorages();
        if (lists.length > 0){
          const listedData = lists.filter((list) => listed.includes(list.id));
             setWish(listedData);
        }
         } ,[]);
    return (
        <div>
            {/* <h1> Total json :{lists.length}</h1> */}
            <div  className="text-center text-2xl mt-10 p-5 bg-gray-100 rounded-md">
                <h1>Books</h1>
            </div>
            <div className=" mt-5 text-center">
<details className="dropdown">
  <summary className="btn m-1 p-4 bg-pink-400 text-white">Sort By </summary>
  <ul  tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
    <li><a>Rating
Number of pages
Publisher year</a></li>
    <li><a></a></li>
  </ul>
</details>
            </div>
            <div>
                <div className="flex ms-10 gap-4">
                <h1 className="btn">Read Books</h1>
                <h1 className="btn">Wishlist Books</h1>
                </div>
             <div>
                        
            {
                wish.map((job)=> <Wish key={job.id} job={job}></Wish>)
               
            }
                </div>
            </div>
    
        </div>
     );
    };

export default ListedBooks;


