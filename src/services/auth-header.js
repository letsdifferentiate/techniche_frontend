import authService from "./auth.service"
const authHeader = () => {

    const user = localStorage.getItem("user")

    if(user && user.accessToken){
        return { Authorization: 'Bearer ' + user.accessToken };
    }
    return {}


}