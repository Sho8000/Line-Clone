'use client'
import CardItem from "./CardItem"
import styles from "./CardList.module.css"
type Card = {
    id: number,
    title:string,
    msg: string,
    image:string,
}

interface CardListProps {
    cards: Card[]
}

const CardList = ({cards} : CardListProps) => {

    if (!cards.length) return <p>No data available.</p>;

    return (
        <div className={styles.listContainer}>
            <ul className={styles.cardList}>
                {cards.map((card:Card) => (
                    <li key={card.id}>
                        <CardItem card = {card}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CardList