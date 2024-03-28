import { useState } from "react"
import ItemList from "./ItemList"

const RestarentCategory = ({data,showItems,setShowIndex}) => {
   
    const onClickContainer = () => {
        setShowIndex()

    }
    return (
     <div key={data.title}>
        
        <div className="w-6/12 mx-auto my-4 bg-gray-250 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={onClickContainer}>
            <span className="font-bold text-lg"> {data.title} {data.itemCards.length}</span>
            <span>⬇</span>

          

        </div>
        {showItems  && <ItemList items = {data.itemCards}/> }
        </div>

       
     </div>
    )

}

export default RestarentCategory