import { useContext, useState } from "react"
import Button from "../Button/Button";
import styles from "./Navbar.module.css"
import {  useNavigate } from "react-router-dom";
import { LoginPageContext } from "../../../Context/LoginContext";

const Navbar=() => {
  const [dummystate, setDummystate] = useState(true); //determines which navbar will be shown

  const contextState= useContext(LoginPageContext);
  const navigate = useNavigate();
  
  const handleOnClickLogin=()=>{
    contextState===null ? null :contextState.setIsLoginPage(true);
    navigate("/loginandsignup/login")
  }
  const handleOnClickSignUp=()=>{
    contextState===null ? null :contextState.setIsLoginPage(false);
    navigate("/loginandsignup/register")
  }
  return (
    <nav className={`${styles.navbar}`} >
      {dummystate?
      <div className={`${styles.navbar1}`}>
        <Button onClick={handleOnClickLogin} label="Login" />
        <Button className={`${styles.SignUp}`} onClick={handleOnClickSignUp} label="Sign Up" />
      </div>
      :
      <div></div>
      }
    </nav>
  )
}

export default Navbar