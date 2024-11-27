import React , {useState}from "react"
import CustomButton from "../reuseables/CustomButton"
import style from "../styles/Login.module.css"

const Login = () =>{

  const userLoginDetails = {
    email: "",
    password: ""
  }

  const [data, setLoginData] = useState(userLoginDetails)

  function handleChange(event){
    console.log(event)
    const {name, value} = event.target
    // setData((prevData)=>({...prevData, [name]:value}));
    setLoginData((prevDataLogin)=>{
      return {...prevDataLogin, [name]:value}
    })
  }


  return(
    <div>
      <form action="">
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
    </div>
  )
}

export default Login