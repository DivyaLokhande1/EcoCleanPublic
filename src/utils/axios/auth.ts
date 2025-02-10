import axios from "axios";

export async function registerUser(
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string,
  address: string,
  pinCode: string,
  role: string
) {
    const validateInput = () => {
      let fName_alert = "";
      let lName_alert = "";
      let email_alert = "";
      let phoneNumber_alert = "";
      let password_alert = "";
      let address_alert = "";
      let pinCode_alert = "";

      const patternValidator = (pattern: RegExp, value: string, fieldName: string) => {
        return pattern.test(value) ? "" : fieldName;
      };

      fName_alert = patternValidator(/^[a-z]+$/i, firstName, "First Name should only contain alphabets");
      lName_alert = patternValidator(/^[a-z]+$/i, lastName, "Last Name should only contain alphabets");
      email_alert = patternValidator(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, email, "Enter a valid email");
      phoneNumber_alert = patternValidator(/^[0-9]{10}$/, phoneNumber, "Phone Number must be 10 digits");
      password_alert = patternValidator(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_\-+={}\[\]:;"'<>,./?]).{8,}$/, password, "Password must be atleast 8 digits containing alphabets, numbers and symbols");
      address_alert = patternValidator(/^[a-zA-Z0-9\s,.'-]{3,}$/, address, "Address must have atleast 3 characters");
      pinCode_alert = patternValidator(/^[0-9]{6}$/, pinCode, "PinCode must be 6 digits");

      const invalidFields = [fName_alert, lName_alert, email_alert, phoneNumber_alert, password_alert, address_alert, pinCode_alert].filter(alert => alert !== "");

      if (invalidFields.length > 0) {
        alert(`You have following input errors: ${invalidFields.join(", ")}!`);
        return false;
      }
      return true;
    };

  if (validateInput()) {
    
    try {
      console.log("this is working")
      const response = await axios.post("http://localhost:8080/register-user", {
        firstName,
        lastName,
        password,
        email,
        address,
        pinCode,
        phoneNumber,
        role,
      });
      return { status: "resolved", data: response.data };
    }
    catch (error:unknown){
        if(axios.isAxiosError(error)){
          console.error("Axios Error during registration:", error.response?.data || error.message);
          return { status: "rejected", error:error.response?.data || error.message };} 
        else{
          console.error("Unknown Error during registration:",error);
          return { status: "rejected", error:"Unknown Error during registration:" };} 
    }
  }
  else {
    return { status: "rejected", error: "Input validation failed" }; 
  }
}

export async function loginUser(email:string,password:string){
  try {
    const response = await axios.post(`http://localhost:8080/login`,{
      email,password
    });
    return {status:response.status , message:response.statusText};
    }
   catch (error) {
    if(axios.isAxiosError(error)){
      return {error: error.message,}}
    else{
      return{error:"Some Unknown Error occured",}}
  }
}

