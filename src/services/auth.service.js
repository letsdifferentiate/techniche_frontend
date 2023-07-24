import axios from "axios";
import { json, resolvePath, useNavigate } from "react-router-dom";


const API_URL= "http://localhost:3000";

const signup = (email, password) => {
    return axios.post(
        API_URL + "/signup", {
            email,
            password
        }
    )
    .then(
        (response) => {
            
            console.log("hello")
            
            if(response.data.accessToken){
                localStorage.setItem("user", json.stringify(response.data));
            }
            return response.data;
        }
    )
};


const  login =  (email,password) => {
    return axios.post(
        API_URL+"/login", {
            email, password
        }
    ).then(
        (response) => {
            console.log("heelo")
            localStorage.setItem("user", "chu chu");
            const navigate = useNavigate();
            navigate("/signup")
            if(response.data.accessToken){
                localStorage.setItem("user", "chu chu");
            }
            return response.data;
        }
    )
}

const logout = () => {
    localStorage.removeItem("user");
}

const getCurrentUser = () => {
    return json.parse(localStorage.getItem("user"));
}

const authService = {
    signup,
    login,
    logout,
    getCurrentUser
}

export default authService