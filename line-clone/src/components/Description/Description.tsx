import styles from "./Description.module.css"

type Props =  {
    title: string,
    description: string,
}

interface DataProps {
    data:Props
}

const Description = ({data}:DataProps) => {
    const {title, description} = data
    return ( 
        <section id={title}>
            <div className={styles.description}>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default Description