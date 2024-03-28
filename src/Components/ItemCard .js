import {useRestarantMenu} from '../utils/useRestroMenu'
const ItemCard = () => {
    const data = useRestarantMenu()
    console.log(data,"itemcard")
    return(
        <div>
            <h1></h1>
        </div>
    )

}

export default ItemCard