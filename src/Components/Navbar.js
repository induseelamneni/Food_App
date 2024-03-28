import { useContext, useState } from 'react'
import {LOGO} from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'



const NavBar = () => {
    const [btnNameChange,setBtnNameChange] = useState(true) 

    const onlineStatus = useOnlineStatus()
    const {loggedInUser}= useContext(UserContext)
    
    const cartItem  = useSelector((store) => (store.cart.items))
   
    
    return (
        <div className='flex justify-between' style={{alignItems:"center", height:"80px", borderBottom:"solid 1px gray"}} >
        <img src={LOGO} alt="food-logo" className='w-10 h-10'/>
      
       <ul className='flex  items-center'>
        <li className='m-2'>Online Status : {onlineStatus ? '\u{1F7E9}'  : '🔴'  } </li>
           <li className='m-2'>
            <Link to="/" className="text-slate-900 hover:text-sky-500 text-sm font-semibold">Home</Link>
            </li>
           <li className='m-2'>
            <Link to="/about" className="text-slate-900 hover:text-sky-500 text-sm font-semibold link-styles" >About Us</Link>
            </li>
           <li className='m-2'>
           <Link to="/contact" className='link-styles text-slate-900 hover:text-sky-500 text-sm font-semibold'>Contact Us</Link>
           </li>
           <li className='m-2'>
           <Link to="/grocery" className='link-styles text-slate-900 hover:text-sky-500 text-sm font-semibold'>Grocery</Link>
           </li>
           <li className='m-2 font-bold' >
           <Link to="/cart" className='link-styles hover:text-sky-500'>cart ({cartItem.length} Items)</Link>
            
           </li>
           <li className='m-2' >{loggedInUser}
           </li>
           <li className='m-2 '><button type='button' className='text-slate-900 hover:text-sky-500 text-sm font-semibold' onClick={() => {setBtnNameChange(!btnNameChange)}}>{btnNameChange ? "Login":"Logout"}</button></li>
       </ul>
       
   </div>
    )
}

export default NavBar