import React from "react"
import Slider from "../../Component /Common/Slider/Slider"
import { Outlet } from "react-router-dom"
import styles from "./LoginandSignup.module.css"
import HeroImage from "../../Component /Common/HeroImage/HeroImage"
import Footer from "../../Component /Footer/Footer"
import Header from "../../Component /Header/Header"

const LoginAndSignup:React.FC=()=>{
    return(
        <div>
            <Header/>
            
            <div className={`${styles.LoginandSignup}`}>
                <div>
                    <HeroImage className={`${styles.heroImage}`} />
                </div>
                <div className={`${styles.interactive}`}>
                    <div>
                        <p style={{justifySelf:"center", fontFamily: "var(--poppins-regular)" }} >Welcome to <span style={{color:"var(--Secondary-green)"}} >EcoClean</span></p>
                        <Slider />
                    </div>
                    <Outlet />
                </div>
            </div>

            <Footer />
        </div>
    )
}
export default LoginAndSignup