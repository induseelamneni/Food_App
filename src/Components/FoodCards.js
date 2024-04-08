import { CLOUDANARYIMAGE } from "../utils/constants"
const FoodCards = (props) => {
    const data = {...props}
   
    return (
        <div className='group block max-w-xs m-2 mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500'>
            <img src= {CLOUDANARYIMAGE+data.resData.info.cloudinaryImageId} alt='food' className='w-80'/>
            <h1 className="text-slate-900 group-hover:text-white text-sm font-semibold">{data.resData.info.name}</h1>
            <p className="text-slate-500 group-hover:text-white text-sm">{data.resData.info.cuisines.join(", ")}</p>
            <p className="marker:text-sky-400"> {data.resData.info.avgRating} Rating</p>
            <p> {data.resData.info.costForTwoString}</p>
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