import image from '../../../assets/images/Hero.png'
import styles from "./HeroImage.module.css"

type HeroImageTypy={
    className?:string,
}
const HeroImage:React.FC<HeroImageTypy>=(className)=>{
    return(
        <div >
        <img className={className?`${className} ${styles.heroImage}`:`${styles.heroImage}`} src={image} alt="Hero Image" />
        </div>
    )
}
export default HeroImage