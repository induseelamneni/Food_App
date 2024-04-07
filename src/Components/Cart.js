import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"
const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    
    const dispatch = useDispatch()

    const clearCartBtn = () => {
        dispatch(clearCart())
       
    }
    return(
        <div className="text-center m-4 p-4">
             <h1 className="font-extrabold text-2xl">Cart</h1>
             <div className="w-6/12 m-auto" >
                <button className="bg-black rounded-lg text-white p-2 m-2" onClick={clearCartBtn}>Clear Cart</button>
             <ItemList items = {cartItem}/>

             </div>
             

        </div>
       
    )
}

export default Cart