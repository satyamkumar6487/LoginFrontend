import { useState } from "react";

const AllUser = () => {



const [message , setMesaage] = useState([]);
 

const fetchAllUsers = async(e) => {
  e.preventDefault();
try{


const response = await fetch("http://localhost:8080/api/auth/users");

const result = await response.json();
setMesaage(result);

} catch(error) {
  console.error("error fetching data" , error);
}

};



return(
<div>
  <button onClick={fetchAllUsers} > Get All Users</button>

  {message.map ((user , index) => (

    <li key={index}>{user.username}</li>
  )) }

</div>
)

};

export default AllUser;