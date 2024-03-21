import { CDN_URL } from "../utils/constants";

const ResCards= (props)=>{
    const {resData}=props; 
    const {name,avgRating,cuisines,costForTwo} = resData?.info ;

    return (
        <div className='card m-4 w-60 border border-grey-100 rounded-b-lg  bg-slate-50 h-70 hover:border-black hover:shadow-md ring-2 ring-slate-100 cursor-pointer'>
            <img className='logo w-full h-32 object-cover' src={CDN_URL+resData.info.cloudinaryImageId}/>
            <h3 className="ml-8 overflow-hidden whitespace-nowrap overflow-ellipsis font-bold">{name}</h3>
            <h3 className="ml-8">{avgRating} stars</h3>
            <h3 className="ml-8 overflow-hidden whitespace-nowrap overflow-ellipsis">{cuisines.join(",")}</h3>
            <h3 className="ml-8">{costForTwo}</h3>  
        </div>  
    )   
}

export default ResCards;