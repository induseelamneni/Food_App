import { CLOUDANARYIMAGE } from "../utils/constants"
const FoodCards = (props) => {
    const data = {...props}
    
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwoString} = data?.resData.info
   
   
    return (
        <div className='group block max-w-xs m-2 mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'>
            <img src= {CLOUDANARYIMAGE+cloudinaryImageId} alt='food' className='w-80'/>
            <h1 className="text-slate-900 group-hover:text-white text-sm font-semibold">{name}</h1>
            <p className="text-slate-500 group-hover:text-white text-sm">{cuisines.join(", ")}</p>
            <p className="marker:text-sky-400"> {avgRating} Rating</p>
            <p> {costForTwoString}</p>
            {/* <p>{data.resData.data.slaString}</p> */}

        </div>
    )
}

export const promotedRestroCard = (FoodCards) => {
    return (props) => {
       return(
          <div>
           <h1>Promoted</h1>
           <FoodCards {...props}/>
          </div>
         
       )
    }
 }


export default FoodCards