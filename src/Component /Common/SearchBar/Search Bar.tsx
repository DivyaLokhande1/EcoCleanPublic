import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import styles from "./Search Bar.module.css";

const SearchBar = ()=>{
    const [inputData,setInputData] = useState("");

    const HandleSearchInput=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setInputData(e.target.value);
    }
    

    return(
        <div className={`${styles.searchbar}`} >
            
            <TextInput input_type="text" placeholder="Search something here" onChange={HandleSearchInput} value={inputData}/>
        </div>
    )
}
export default SearchBar