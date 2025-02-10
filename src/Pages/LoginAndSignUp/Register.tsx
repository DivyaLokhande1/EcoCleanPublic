import TextInput from "../../Component /Common/TextInput/TextInput"
import Button from "../../Component /Common/Button/Button"
import styles from "./LoginandSignup.module.css"
import { ChangeEvent, FormEvent, useState } from "react"
import { registerUser } from "../../utils/axios/auth"
import { useNavigate } from "react-router-dom"

const Register:React.FC=()=>{
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNUmber] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [address, setAddress] = useState("");
    const [pinCode, setPinCode] = useState("");

    const navigate = useNavigate();


    const handleFirstNameField=(e:ChangeEvent<HTMLInputElement>)=>{
        setFirstName(e.target.value)
    }
    const handleLastNameField=(e:ChangeEvent<HTMLInputElement>)=>{
        setLastName(e.target.value)
    }
    const handleEmailField=(e:ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
    }
    const handlePhoneNumberField=(e:ChangeEvent<HTMLInputElement>)=>{
        setPhoneNUmber(e.target.value)
    }
    const handleAddressField=(e:ChangeEvent<HTMLInputElement>)=>{
        setAddress(e.target.value)
    }
    const handlePinCode=(e:ChangeEvent<HTMLInputElement>)=>{
        setPinCode(e.target.value)
    }
    const handlePasswordField=(e:ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
    }
    const handleUserTypeField=(e:ChangeEvent<HTMLSelectElement>)=>{
        setUserType(e.target.value)
    }
     const handleSubmit= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const result = await registerUser(firstName, lastName, email, phoneNumber, password, address, pinCode, userType);

        if (result.status === "resolved") {
            alert("User Registered successfully");
            setFirstName("");
            setLastName("");
            setEmail("");
            setAddress("");
            setPhoneNUmber("");
            setPassword("");
            setPinCode("");
            setUserType("");
            navigate("/loginandsignup/login");
          } else {
            alert(`Error during registration: ${result.error || "error: I don't know what is wrong with this code"}`);
          }
     }

    return(
        <form onSubmit={handleSubmit}>
            <p className={`${styles.headings}`}>
            Create your account to schedule pickups, track your contributions, and help build a sustainable future.
            </p>
            <div>  
                <h3 className={`${styles.headings}`}> First Name</h3>
                <TextInput onChange={handleFirstNameField} value={firstName} placeholder="Enter your First Name"/>
            </div> 
            <div>  
                <h3 className={`${styles.headings}`}> Last Name</h3>
                <TextInput onChange={handleLastNameField} value={lastName} placeholder="Enter your Last Name"/>
            </div> 
            <div>
               <h3 className={`${styles.headings}`}>Email Address</h3>
                <TextInput onChange={handleEmailField} value={email} placeholder="Enter your Email Address" />
            </div> 
            <div>
                <h3 className={`${styles.headings}`}>Phone Number</h3>
                <TextInput onChange={handlePhoneNumberField} value={phoneNumber} placeholder="Enter your Phone Number" />
            </div>
            <div>
                <h3 className={`${styles.headings}`}>Address</h3>
                <TextInput onChange={handleAddressField} value={address} placeholder="Enter your Address" />
            </div>
            <div>
                <h3 className={`${styles.headings}`}>pincode</h3>
                <TextInput onChange={handlePinCode} value={pinCode} placeholder="Enter your pinCode" />
            </div>
            <div>
                <h3 className={`${styles.headings}`}>Password</h3>
                <TextInput onChange={handlePasswordField} value={password} placeholder="Set your Password"/>
            </div>
            
            <h3 className={`${styles.headings}`}>Select User Type</h3>
            <div className={`${styles.UserType}`}>
                
                <select onChange={handleUserTypeField} value={userType} className={`${styles.Dropdown}`} >
                        <option label="Select User Type" disabled></option>
                        <option label="Consumer" selected>User</option>
                        <option label="Driver"  >Driver</option>
                </select> 
            </div>

            <div className={`${styles.register}`}>
                    <Button button_type="submit" label="Register" />
            </div>

        </form>
    )
}
export default Register