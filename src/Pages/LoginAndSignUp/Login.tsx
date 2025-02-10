import { Link, useNavigate } from "react-router-dom";
import TextInput from "../../Component /Common/TextInput/TextInput";
import Button from "../../Component /Common/Button/Button";
import styles from "./LoginandSignup.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { loginUser } from "../../utils/axios/auth";

const Login: React.FC = () => {
  const [ishidden, setIsHidden] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const togglePassword = () => {
    setIsHidden(!ishidden); 
  };

  const handleEmailField=(e:ChangeEvent<HTMLInputElement>)=>{
          setEmail(e.target.value)
  }
  const handlePasswordField=(e:ChangeEvent<HTMLInputElement>)=>{
          setPassword(e.target.value)
      }
  const handleSubmit= async (e:FormEvent<HTMLFormElement>)=>{
          e.preventDefault();
          const result = await loginUser( email, password );
  
          if (result.status === 200) {
              alert("User LoggedIn successfully");
              setEmail("");
              setPassword("");
              navigate("/dashboard");
            }else if(result.status === 400 ){
              alert(`Error during Login: ${result.error}. Please re-enter Credentials`);
              setPassword("");
            } else{
              alert(`Error during Login: ${result.error || "error: Something went wrong(Not my fault)"}`);
            } 
       }    

  return (
    <form onSubmit={handleSubmit}>
      <p className={`${styles.headings}`}>Log in to manage your junk, track pickups, and contribute to a greener planet.</p>
      <h3 className={`${styles.headings}`}>Email</h3>
      <TextInput placeholder="Enter your Email" onChange={handleEmailField}/>
      <h3 className={`${styles.headings}`} >Password</h3>
      <div className={`${styles.PasswordDiv}`}>
        <TextInput
          className={`${styles.PasswordInput}`}
          input_type={ishidden ? "password" : "text"}
          placeholder="Enter your Password" onChange={handlePasswordField}
        />
        <Button className={`${styles.Eye}`} onClick={togglePassword}>
          {ishidden ? <VisibilityOff /> : <Visibility />}
        </Button>
      </div>

      <div className={`${styles.rememberForgot}`}>
        <label><input type="checkbox" /> Remember me</label>
        <span>
          <Link to="/loginandsignup/login/forgotpassword" >Forgot password</Link>
        </span>
      </div>

      <div className={`${styles.login}`}>
          <Button button_type="submit" label="Login" />
      </div>
    </form>
  );
};

export default Login;
