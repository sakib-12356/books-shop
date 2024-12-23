const View = ({view}) => {
    const {logo, bookNames, review, story,poin, btn,btn1,writerName }=view;
    return (
        <div>
              <div  className=" flex ms-10 mt-10 gap-8 border p-3">
         <div className="p-6 bg-gray-100 rounded-lg">
         <img src={logo} alt="" width="90px"/>
         </div>
         <div>
          <h1 className="text-2xl mb-3 mt-6">{bookNames}</h1>
           <span>{writerName}</span>
            <div>
            <div className="card-actions justify-start  text-green-600 mt-2 bg-white">
            <h1 className="text-black">Tag </h1>
                       <div className="badge badge-outline mt-1 ">Fashion</div>
                       <div className="badge badge-outline mt-1">Products</div>
                       <p className="text-black">Year of Publishing: 1924</p>
                        </div>
                        <div className="mt-2">
                        <button className="badge badge-outline p-3 bg-lime-400 text-white ">Category: Classic</button>
                        <button className="badge badge-outline p-3 text-white bg-purple-500">Rating: 4.5</button>
                        <button className="badge badge-outline p-3 text-white bg-pink-400">View Details</button>
                        </div>
            </div>
         </div>
        </div>
        </div>
    );
};

export default View;