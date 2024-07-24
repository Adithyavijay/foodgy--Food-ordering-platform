import { useEffect,useState } from 'react';
import { json, useParams } from 'react-router-dom';
import Shimmer from './shimmer';
import { Params } from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useState } from 'react';
import React from 'react';
import RestaurantCategory from './RestaurantCategory';



const restoMenu =()=>{

const [showIndex,setShowIndex]=useState(null);

const {id}=useParams();

const menu=useRestaurantMenu(id);

const handleToggleAccordion = (index)=>{
  setShowIndex((prevIndex)=>(prevIndex===index ? null : index))
}

if(!menu) 
return (
  <Shimmer/>
)


const { name, cuisines ,costForTwo} = menu?.cards[2]?.card?.card?.info || {} ;


const categories =   menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>(category?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
console.log(categories)
  return (
    <div className="text-center ">
      <h1 className='text-3xl font-bold text my-6'>{name}</h1>
      <p className='text-lg font-bold mb-4'>{cuisines.join(',')}- {costForTwo}</p>
      <div>
        {categories.map((category,index)=>(
             <RestaurantCategory key={category.card.card.title} category={category} 
             showItems={index===showIndex ? true : false } 
             setShowIndex ={()=>{ handleToggleAccordion(index) } }
             />
        ))}
       
      </div>
    </div>
  )
}
export default restoMenu;