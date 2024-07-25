import Shimmer from "./Shimmer"
import { CLOUDANARYIMAGE } from "../utils/constants"
// import ItemCard from "./ItemCard"
import { useParams } from "react-router-dom"
import useRestarantMenu from "../utils/useRestroMenu"
import RestarentCategory from "./RestarentCategory"
import { useState } from "react"

const RestarentMenu = () => {
    const params = useParams()

    const [showIndex ,setShowIndex] = useState(1)
  
    const {resId} = params

    let resInfo = useRestarantMenu(resId)
    if (resInfo === null) return  <Shimmer/> ;
    console.log(resInfo?.cards[0]?.card?.card?.text,"in")

    const {name ,cuisines,costForTwoMessage,cloudinaryImageId,avgRating} = resInfo?.cards[2]?.card?.card?.info

   console.log(resInfo,"in")

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => e.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories)
   
    return (
       
        <div>
            <div className="container mx-auto w-96">
         <h1 className="mb-2 font-serif">{name}</h1>
         <img src = { CLOUDANARYIMAGE+cloudinaryImageId} alt="restarent"/>
         <p>{cuisines.join(",")} - {costForTwoMessage}</p>
         <h3>{avgRating} Rating</h3>
         </div>
         {categories.map((category,index) => (
            <RestarentCategory data={category?.card?.card} showItems = {index === showIndex ? true : false} setShowIndex={() => setShowIndex(index)} key={category?.card?.card.id}/>
         ))}
    </div>
       
    )

}

export default RestarentMenu
