import React, {useState, useEffect} from 'react'
import authHeader from "../../../services/auth-header"
import axios from 'axios'

function UserDashboard() {

    const [message, setMessage ] = useState('Initial message')
    console.log("Here it is")
    useEffect(() => {
      // Make the API request when the component mounts
      axios.get('http://localhost:8001/user',{headers:authHeader()})
        .then(response => {
          // Handle the response and set the message state
          setMessage(response.data.message);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

   
    const varr = "hlelk"

  return (
    <div>
    <div className='h-[40vh] w-[40vw] mt-20 text-white'>
        !
        {message}
        !
        {varr}
        !
    </div>
    </div>
  )
}



export default UserDashboard
