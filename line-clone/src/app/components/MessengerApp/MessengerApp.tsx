'use client'
import Description from "../Description/Description"
import CardList from "./CardList"
import styles from "./MessengerApp.module.css"

type Card = {
    id: number,
    title:string,
    msg: string,
    image:string,
}

interface CardListProps {
    cards: Card[]
}

const MessengerApp = ({cards}:CardListProps ) => {
    const data = {
        title: 'Messenger APP',
        description: 'New communication app which allows you to make FREE voice calls and send FREE messages whenever and wherever you are, 24 hours a day!'
      }
    return (
        <section id="messengerApp">
            <div className={styles.bigContainer}>
                <Description data = {data}/>
                <CardList cards = {cards}/>
            </div>
        </section>
    )
}

export default MessengerApp