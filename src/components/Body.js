import ResCards,{withPromotedLabel} from "./ResCards";
import { useEffect, useState } from "react";
import resList from '../utils/mockData';
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import useRestaurantList from "../utils/useRestaurantList";


const Body= ()=>{
   console.log("body rerender")
    const {listOfRestaurants,filteredRest,setFilteredRest} = useRestaurantList();
    const RestaurantPromoted = withPromotedLabel(ResCards) 
    const [search,setSearch]=useState("")
    const onlineStatus=useOnlineStatus();
    
    
    
        if(onlineStatus===false)
        return (<h1 className="text-3xl m-5 font-bold">looks like you are offline!!!</h1>)
        
        
        if (!listOfRestaurants || listOfRestaurants.length === 0) {
            return (<Shimmer/>);
          }
    return ( 
       <div className="ml-16">
            
           <div className='filter m-3 flex' >
           <div className="searchbox p-2 mt-3">

                <input className="border border-black px-2" type="text" placeholder="search" value={search} onChange={(e)=>{
                    setSearch(e.target.value)                 
                    
                }}></input>
                <button className="px-2 border border-black bg-slate-300" onClick={()=>{

                   
                    filterRest=listOfRestaurants.filter((rest)=>rest.info.name.toLowerCase().includes(search.toLowerCase()))  
                    setFilteredRest(filterRest) ;
                    
                    
                } }>Search

                </button>
            </div>
            <button onClick={()=>{
                
                filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.5)
                setFilteredRest(filteredList)
            
                
            }} className="bg-slate-200 hover:bg-slate-500 p-2 mt-3">Top rated restaurants</button>
           </div>
        
           
           <div className="res-containers flex flex-wrap"> 
           {    
            filteredRest.map((rest) => (
             <Link to={"/rest/"+rest.info.id} key={rest.info.id}>
                
                {

                    rest.info.isOpen?<RestaurantPromoted  resData={rest} /> : <ResCards  resData={rest}/>
                }
                </Link>     
             ))
}
           </div> 
       </div>
    )
}   

export default Body;