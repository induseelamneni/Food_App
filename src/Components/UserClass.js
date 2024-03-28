import { Component } from "react"
import UserContext from "../utils/UserContext"


class UserClass extends Component{
    constructor(props){
       super(props)

       this.state = {
            login:"",
            avatharUrl:""
       }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/induseelamneni")
        const jsonData = await data.json()
        this.setState(
            {
            login : jsonData.login,
            avatharUrl : jsonData.avatar_url
            }
             )
    }
   

    render(){
        const {login,avatharUrl} = this.state
    
        return(
            <div>
                <img src={avatharUrl} alt="avatharURL" />
                <h1>Name : {login}</h1>
                <h2>Location : India</h2>
               
               <div>
               <UserContext.Consumer>
                {(data) => (
                    <h1>{data.loggedInUser}</h1>
                )}
           </UserContext.Consumer>
               </div>
            </div>
        )
    }
}

export default UserClass