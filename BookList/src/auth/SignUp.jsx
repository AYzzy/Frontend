import React, { useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link, useNavigate} from "react-router-dom";


const SignUp = () => {

  const navigate = useNavigate()

  const userDetails = {
    username: "",
    email: "",
    password: ""
  }

  const [data, setData] = useState(userDetails)

  function handleChange(event){
    console.log(event)
    const {name, value} = event.target
    // setData((prevData)=>({...prevData, [name]:value}));
    setData((prevData)=>{
      return {...prevData, [name]:value}
    })
  }

  const handSubmit=()=>{
    console.log("Submitted .......")
    // setTimeout(()=>{
      navigate("/Login")
    // }, 2000)
  }

  function name(param) {}

  function name(param) {}

  return (
    <div>
      <form onSubmit={handSubmit} action = "">
        <div>
          <input
            type="text"
            name="Username"
            className={style.input}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="Email"
            className= {style.input}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="Password"
            className="input"
            placeholder="Enter Password"
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton style={style.btn}  type="Submit" textContent="Submit"/>
      </form>
      <div>
        <span>Already have an account?</span>
        <span><Link to={'/Login'}>Login</Link></span>
      </div>
    </div>
  );
};

export default SignUp;
