import styles from './BotaoPrincial.module.css'

export default function BotaoPrincial({children, lg}){
    return(
        <button className={`${styles.botao} ${styles[lg]}`}>{children}</button>
    )
}