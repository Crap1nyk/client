import { useState } from "react";
import InputType from "./InputType";
import { handleLogin } from "../../../services/authService";

const Form1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div>
      <form onSubmit={(e) => {
        return handleLogin(e,email,password)
      }}>
     <h1 className="text-center">Login Page</h1> 
     <hr />
     
                  <InputType
                    labelText={"email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                    <div>
                   <button className="btn btn-primary">Submit</button>
                   </div>
                    </form>
                    </div>
                    );
                  };
export default Form1;
