import { useEffect, useState } from "react"
import { API } from "../utils/constants"

const useRestarantMenu = (resId) =>{
    const [resInfo, setResInfo] = useState(null)
    

    useEffect(()=>{
        fetchApi()
     },[])
 
     const fetchApi = async () => {
           const data = await fetch(API+resId);
           const menuCard = await data.json()
           setResInfo(menuCard.data)
          
     }

    
    
   return resInfo
}



export default useRestarantMenu