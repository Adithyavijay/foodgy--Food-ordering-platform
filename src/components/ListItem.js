import { BsCurrencyRupee } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ListItem = ({ item }) => { 
    const dispatch = useDispatch()
    
    const handleCart = (item,e)=>{
        
        dispatch(addItem(item))
    } 
   return (
        <div>
            {item.map((item,index) => (
                <div className="text-start p-2 border-b-2 mb-2" key={`${item.card.info.id}-${index}`}>
                    <div className="flex justify-between ">
                        <div className="w-7/12">
                            <div className="font-bold mt-3">
                                {item.card.info.name}
                            </div>
                            <div className="font-bold mb-1 flex items-center">
                                <BsCurrencyRupee />{" "}
                                {item.card.info.price
                                    ? item.card.info.price / 100
                                    : item.card.info.defaultPrice / 100}
                            </div>
                            <div className="text-green-700 flex items-center">
                                {" "}
                                <FaStar className="mr-2"/>{" "}
                                {item.card.info.ratings.aggregatedRating.rating}
                            </div>

                            <div className="text-gray-700  pb-16 text-xs">
                                {" "}
                                {item.card.info.description}{" "}
                            </div>
                        </div>
                    
                        <div className="w-28 h-28 relative">
                            <button 
                            onClick={(e)=>(handleCart(item,e))}
                            className="absolute font-bold bottom-0 left-4 bg-white text-green-600 py-1 px-6 rounded-lg transform translate-y-1/2 border border-gray-300">ADD+</button>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full h-full rounded-lg" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListItem;
