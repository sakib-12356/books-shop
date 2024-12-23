import { Link } from "react-router-dom";

const Bannar = () => {
    return (
        <div className="grid grid-cols-2 mt-10 p-8  bg-gray-100 rounded-2xl">
            <div  className="text-pretty mt-14 mb-16 ms-10">
                <h1 className="text-5xl">
                Books to freshen up  your bookshelf
                </h1>

                <Link to={`/viewTheList`}>
                <button  className="btn btn-active mt-12 text-white bg-blue-400">
                    View The List</button></Link>
       
            </div>
            <div className="flex place-content-center mt-4 ">
            <img src="https://i.ibb.co.com/DG25BFw/pngwing-1.png" alt="" width="200px" />
            </div>
        </div>
    );
};

export default Bannar;