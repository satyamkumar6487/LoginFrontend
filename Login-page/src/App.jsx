import React from "react";


import 'bootstrap/dist/css/bootstrap.min.css';

import Control from "./components/control.jsx";
import Form from "./components/form.jsx";
import AllUser from "./components/AllUser.jsx";

const App = () => {

return (

    <div className="container mt-5">
           <AllUser></AllUser>
      <Control></Control>
      <Form></Form>

    </div>

);
}

export default App;













// import React, { useState } from "react";
// import Register from  "./components/Register.jsx"
// import Login from "./components/Login.jsx";

// function App() {
//   const [showRegister, setShowRegister] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowRegister(!showRegister)}>
//         {showRegister ? "Go to Login" : "Go to Register"}
//       </button>
//       {showRegister ? <Register /> : <Login />}
//     </div>
//   );
// }

// export default App;
