import { useLoaderData } from "react-router-dom";
import { getItemFromLocalStrorages } from "../Utility/localStrorage";
import { useEffect, useState } from "react";
import View from "../View/View";

const ViewList = () => {
    const lists =useLoaderData();
    console.log(lists)
    const [views,setViews]=useState([]);

    useEffect(() => {
        const liste = getItemFromLocalStrorages();
        if (lists.length > 0){
           const listeData = lists.filter((list) => liste.includes(list.id));
           setViews(listeData);
        }
         } ,[]);
    return (
        <div>
              {
                views.map((view)=> <View key={view.id} view={view}></View>)  
              }
        </div>
    );
};

export default ViewList;