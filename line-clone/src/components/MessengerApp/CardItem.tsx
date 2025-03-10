'use client'
import styles from "./CardItem.module.css"
type Card = {
    id: number,
    title:string,
    msg: string,
    image:string,
}

interface CardProps {
    card: Card
}
const CardItem = ({card}:CardProps) => {

    const { title, msg, image} = card

    return (
        <div className={styles.cardItem}>
            <div className={styles.image}>
                <img src={image} alt="image" />
            </div>
            <div className={styles.content}>
                <h2>{title}</h2>
                <p>{msg}</p>
            </div>
        </div>
    )
}

export default CardItem