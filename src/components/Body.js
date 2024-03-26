import ResCards from "./ResCards";
import { useEffect, useState } from "react";
import resList from '../utils/mockData';
import Shimmer from "./shimmer";



const Body= ()=>{
    const [listOfRestaurants,setListOfRestaurants]= useState([]);
    const [filteredRest,setFilteredRest]=useState([]);
    const [search,setSearch]=useState("")
    
 
    useEffect(()=>{
        fetchData();    
    },[])
        const fetchData= async() =>{
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=10.0488633&lng=76.3260992&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
            
        const json= await data.json();
    
        setListOfRestaurants(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants)
        setFilteredRest(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants)
        
        console.log(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants)
        console.log(listOfRestaurants);
        }

    if(listOfRestaurants.length===0)
    return (<Shimmer/>)
    return ( 
       <div className="ml-16">
            
           <div className='filter m-3 flex' >
           <div className="searchbox p-2 mt-3">

                <input className="border border-black px-2" type="text" placeholder="search" value={search} onChange={(e)=>{
                    setSearch(e.target.value)                 
                    
                }}></input>
                <button className="px-2 border border-black bg-slate-300" onClick={()=>{

                    console.log(search)   
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
             filteredRest.map((rest)=>(
                <ResCards key={rest.info.id} resData={rest}/>
            ))
          }
           </div> 
       </div>
    )
}   

export default Body;