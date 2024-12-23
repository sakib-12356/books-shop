import { Link } from "react-router-dom";

const BookList = ({Book}) => {
   const{logo,bookNames,story,poin,btn,btn1,writerName,id }=Book;
    return (
        <div> 
          <Link to={`/bookDetils/${id}`}>
          <div className="card bg-base-100 w-100% h-full shadow-xl p-2">
  <figure  className="bg-gray-100 p-5">
    <img width="100px" 
      src={logo}
      alt="" />
  </figure>

  <div className="card-actions justify-start ms-4 mt-6 text-green-600 bg-white">
      <div className="badge badge-outline ">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
    
  <div className="card-body">
    <h2 className="card-title">
    {bookNames}
    
    </h2>
    <p>{writerName}</p>
    <hr />
   <div className="flex space-x-32">
    <div> <h1>{story}</h1></div>
    <div> <p>{poin}</p></div>
   </div>
    
  </div>
</div>
          </Link>
        </div>
    );
};

export default BookList;