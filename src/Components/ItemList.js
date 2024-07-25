import { useDispatch } from "react-redux"
import { CLOUDANARYIMAGE } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const ItemList = ({items,dummy}) => {
     console.log(items,"initem")
    const dispatch = useDispatch()
    const addItemToTheCart = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div>
         
            {items.map((item) => (
                 <div className="flex flex-row justify-between  border-gray-200 border-b-2 m-2 p-2" key ={item.card.info.id}>
                <div  className="w-9/12 text-start">
                   
                   
                    <div className="mb-2">
                    <span className="mr-2 mb-2 font-bold " >{item.card.info.name} -</span>
                        
                    <span className="font-bold mb-2">RS :{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
                    </div> 
                    <p className="text-xs">{item.card.info.description}</p>
                   
                  
                   
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                <button className="p-1 m-auto bg-white bg-shadow-lg my-16 mx-16 rounded-lg" onClick={() => addItemToTheCart(item)}>+ Add</button>
                </div>
                
                <img src= { CLOUDANARYIMAGE+item.card.info.imageId} alt="restarent" className="w-full" />
                
                </div>
                    </div>
            ))}
          
        </div>
    )
}

export default ItemList