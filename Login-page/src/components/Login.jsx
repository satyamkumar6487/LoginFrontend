import { useState } from "react";
import Form from "./form";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const LoginData = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/Login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.text();
      console.log("Response from server:", data);
      setMessage(data);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong");
    }
  };


return (

<Form 

username={username}
setUsername={setUsername}
password={password}
setPassword={setPassword}
onSubmit={LoginData}
headingText="please sign in"
buttonText= "sign in "
message={message}
/>
)

};

export default Login;












