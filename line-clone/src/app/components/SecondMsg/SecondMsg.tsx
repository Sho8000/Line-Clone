"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import styles from "./SecondMsg.module.css"
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

const SecondMsg = ({data}:DataProps) => {
    const {title, primaryMsg, secondaryMsg, image, logo} = data
    return (
        <div className={styles.service}>
            <div className={styles.left}>
                <div className={styles.logo} style={{backgroundImage: `url(${logo})`}}>
                </div>
                <h2 className={styles.title}>{title}</h2>
                <h3 className={styles.primary}>{primaryMsg}</h3>
                <p className={styles.secondary}>{secondaryMsg}</p>
                <div className={styles.buttons}>
                    <button className={styles.smallButton}>
                        <FontAwesomeIcon icon={faApple}>
                        </FontAwesomeIcon>
                    </button>
                    <button className={styles.smallButton}>
                        <FontAwesomeIcon icon={faGooglePlay}>
                        </FontAwesomeIcon>
                    </button>
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

export default SecondMsg