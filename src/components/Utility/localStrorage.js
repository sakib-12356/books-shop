const getIemFromLocalStrorages =()=>{
    const storeWishList = localStorage.getItem("Wish-list");
    if(storeWishList){
        return JSON.parse(storeWishList);
    } 
     return[];
    
};
    const resiveWishList =(id)=>{
    const stroreSave = getIemFromLocalStrorages();
    const exits = stroreSave.find((bookId)=>bookId === id);
    if(!exits){
        stroreSave.push(id);
        localStorage.setItem("Wish-list" , JSON.stringify(stroreSave));
    };
   };

   const getItemFromLocalStrorages =()=>{
    const storeViewList = localStorage.getItem("View-list");
    if(storeViewList){
        return JSON.parse(storeViewList);
    } 
     return[];
    
};
    const resiveViewList =(id)=>{
    const stroreSaves = getItemFromLocalStrorages();
    const exits = stroreSaves.find((booksId)=>booksId === id);
    if(!exits){
        stroreSaves.push(id);
        localStorage.setItem("View-list" , JSON.stringify(stroreSaves));
    };
   };



   export{getIemFromLocalStrorages ,resiveWishList,getItemFromLocalStrorages,resiveViewList};