import { useLoaderData, useParams ,Link} from "react-router-dom";
import { resiveViewList, resiveWishList } from "../Utility/localStrorage";
const BookDetails = () => {
    const books = useLoaderData();
  const {id} = useParams();
  const intId = parseInt(id)
    const {logo,
           bookNames,
           review,
           story,
           poin,
           btn,btn1,
           writerName
         } = books.find((book)=>book.id === parseInt(id));
    // console.log(logo,id);
    const handleWishList=(id)=>{
         resiveWishList(intId);   
    }
    const handleViewList=(id)=>{
      resiveViewList(intId);   
 }

    return (
        <div>
             <div className="text-center grid grid-cols-2">
               <div className="place-items-center mt-16 p-6 rounded-lg bg-gray-50">
                     <img src={logo} alt="" width="300px" className="mt-12" />         
               </div>
               <div className="text-start p-12 mt-4">
                     <h1 className="text-3xl">{bookNames}</h1>
                       <h1 className="mt-4 mb-4">{writerName}</h1>
                       <hr />
                       <h1 className="mt-2 mb-2">{story}</h1>
                       <hr />
                       <p> <span className="text-xl">Review </span>:{review}</p>
                       <div className="card-actions justify-start ms-4 mt-6 text-green-600 bg-white">
                        <h1 className=" text-xl ">Tag </h1>
                       <div className="badge badge-outline mt-2 ms-2">Fashion</div>
                       <div className="badge badge-outline mt-2 mb-3">Products</div>
                        </div>
                        <hr />
                        <div className="mt-5">
                        <p >Number of Pages:     281</p>
                        <p>Publisher:     J.B Lippincott & Co.</p>
                        <p>Year of Publishing:     1960</p>
                        <p>Rating:      4.8</p>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <button  onClick={()=>handleViewList(id)} className="btn btn-outline btn-warning"> Read</button>
                            {/* <Link to={`/wishlist`}> */}
                            <button onClick={()=>handleWishList(id)} className="btn btn-outline btn-accent">Wishlist</button>
                            {/* </Link> */}
                        </div>

                       
               </div>

             </div>
        </div>
    );
};

export default BookDetails;