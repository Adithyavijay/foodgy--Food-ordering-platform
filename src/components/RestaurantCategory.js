
import { AiOutlineDown,AiOutlineUp } from "react-icons/ai";
import ListItem from "./ListItem";
import { useState } from "react";


const RestaurantCategory = ({category,showItems,setShowIndex}) => {

  
  handleClick=()=>{
   
      setShowIndex();
      
    }
  return (
    <div>
        <div className="bg-gray-50 w-10/12 md:w-6/12 mx-auto shadow-md my-2 p-4 ">
            <div className="flex justify-between cursor-pointer"onClick={handleClick}>
            <span className="font-bold">{category.card.card.title} ({category.card.card.itemCards.length})</span>
            {showItems?<span><AiOutlineUp/></span> :<span><AiOutlineDown/></span>}
            </div>
           <div  >
             {showItems&&(<ListItem item={category.card.card.itemCards} />)}
            </div>
            
        </div>

    </div>  
  ) 
}

export default RestaurantCategory