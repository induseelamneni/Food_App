import { useContext, useEffect, useState } from "react"
import FoodCards, {promotedRestroCard} from "./FoodCards"
import Shimmer from './Shimmer'
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"

const FoodDeliveryApp = () =>  {
    
    const [listOfRestarents2 ,setListOfRestarents2] = useState([])
    const [filteredRes,setFilteredRes] = useState(listOfRestarents2)
    const [searchText,setSearchText] = useState("")

    const withPromotedRestroCard = promotedRestroCard(FoodCards)
    const {loggedInUser, setUser} = useContext(UserContext) 
    useEffect(()=> {
        fetchData()
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5164593&lng=78.4176358&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING") //&page_type=DESKTOP_WEB_LISTING
        // https://corsproxy.io/?
        const jsonData =await data.json()
        console.log(jsonData,"js")
        const parsedData = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
         console.log(parsedData,"in")

        setListOfRestarents2(parsedData)
        setFilteredRes(parsedData)
        
    }

    const onlineStatus = useOnlineStatus()

    const onClickTopratedBtn = () => {
        let filteredList = listOfRestarents2?.filter(
            (list) => (list.data.avgRating > 4)
        )
        setListOfRestarents2(filteredList)
    }

    const onSeasrchText = () => {
        let filteredRes = listOfRestarents2?.filter((each)=>( (each.info.name).toLowerCase().includes(searchText.toLowerCase())))
        setFilteredRes(filteredRes)
    
        
    }

    if (onlineStatus === false) return ( <h1>please check your internet connection</h1> )
       
    

    return (
        <div className="bg-slate-300">   
        <div className="p-2 bg-slate-300 flex">
            <input type="search" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-half rounded-md sm:text-sm focus:ring-1 mr-2" placeholder="enter text"/>
            <button type="button" onClick={onSeasrchText} className="mr-2 ">Search</button>
        {/* <button type="button" onClick={onClickTopratedBtn} className="bg-blue-300 border-spacing-x-1">
            Top Rated Restarents
        </button>
        */}
        <div className="p-2 bg-slate-300 flex" > <label className="mr-1">User Name</label> <input className="flex align-middle" onChange={(e) => setUser(e.target.value)} value={loggedInUser}/></div>
        
        </div>
       
        {listOfRestarents2?.length === 0 ? <Shimmer /> : 
        <div style={{display:'flex',flexDirection:"row",flexWrap:"wrap"}}>
        {filteredRes?.map((restent) => (
           <Link key={restent.info.id} to={"/restaurant/"+ restent.info.id} className="m-2">
            {restent.info.promoted ? <withPromotedRestroCard resData = {restent}/> :  <FoodCards  resData = {restent}/> }
            
             </Link>
        ))}
    </div>
        }
        </div>
    )
    }

export default FoodDeliveryApp