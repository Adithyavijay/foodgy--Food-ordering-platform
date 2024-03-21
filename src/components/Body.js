import ResCards from "./ResCards";
import resList from "../utils/mockData";
import { useState } from "react";


const Body= ()=>{
    const [listOfRestaurants,setListOfRestaurants]= useState(resList);
    return (
       <div className="ml-16">
           <div className='filter m-3'>
            <button onClick={()=>{
                
                filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
                setListOfRestaurants(filteredList)
            
                
            }} className="bg-slate-200 hover:bg-slate-500 p-2 mt-3">Top rated restaurants</button>
           </div>
           
           <div className="res-containers flex flex-wrap">
            
             {listOfRestaurants.map((restaurant=>(
              <ResCards key={restaurant.info.id} resData={restaurant}/>
            ) )) 
            
            }    
           </div> 
       </div>
    )
}   

export default Body;