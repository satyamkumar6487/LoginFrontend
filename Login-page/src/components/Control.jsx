import { useState } from "react"
import Login from "./Login";
import Register from "./Register";
const Control = () => {

const [showRegister , setShowRegister] = useState(false);

return (
<div>
<button type="button" 
class="btn btn-primary"

onClick={() => setShowRegister(!showRegister)}
>

{showRegister ? "go to login " : "Go to register"}</button>

{showRegister ? <Register/> : <Login/>}


</div>

);

}

export default Control;