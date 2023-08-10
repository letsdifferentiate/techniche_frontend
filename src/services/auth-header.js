import authService from "./auth.service"
const authHeader = () => {

    const user = JSON.parse(localStorage.getItem("user"));

    console.log("authheader")
    console.log(user)
    console.log("authheader!!!")
    console.log(user.accessToken)
    console.log("authheader###")

    if(user && user.accessToken){
        return { Authorization: 'Bearer ' + user.accessToken };
    }
    return {}


}

export default authHeader