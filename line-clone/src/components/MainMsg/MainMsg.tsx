"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styles from "./MainMsg.module.css"
type Props = {
    title: string,
    primaryMsg: string,
    secondaryMsg: string,
    logo: string,
    image: string,
}

interface DataProps{
    data:Props
}

const MainMsg = ({data}:DataProps) => {
    const {title, primaryMsg, secondaryMsg, image, logo} = data
    return (
        <div className={styles.service}>
            <div className={styles.left}>
                <div className={styles.logo} style={{backgroundImage: `url(${logo})`}}>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.primary}>{primaryMsg}</h3>
                <p className={styles.secondary}>{secondaryMsg}</p>
                <div >
                    <button className={styles.button}> 
                        <span>
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}>
                            </FontAwesomeIcon>
                        </span>
                        More Details
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <img src={image} alt="image" />
            </div>
        </div>
    )
}

export default MainMsg