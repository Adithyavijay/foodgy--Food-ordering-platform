import { useEffect,useState } from "react"

const useRestaurantlist=()=>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRest,setFilteredRest]=useState([]);
    useEffect(()=>{
        fetchList();
    },[])

   const fetchList = async()=>{
    const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.91850&lng=76.25580&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTIN')
  
    const json =await data.json();


    setListOfRestaurants(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants)
    setFilteredRest(json?.data?.cards[4]?.card.card.gridElements?.infoWithStyle?.restaurants)   


   }
   return { listOfRestaurants,filteredRest,setFilteredRest }
}

export default useRestaurantlist