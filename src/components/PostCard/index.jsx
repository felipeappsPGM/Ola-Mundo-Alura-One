import { Link } from 'react-router-dom'
import styles from './PostCard.module.css'
import BotaoPrincial from '../BotaoPrincipal'

export default function PostCard({ post }) {

    return (
        <Link to={`/posts/${post.id}`}>
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`../../assets/posts/1/capa.png`}
                alt="imagem de capa do post"
            />
            <h2 className={styles.titulo}>{post.titulo}</h2>
            <BotaoPrincial>Ler</BotaoPrincial>
        </div>
        </Link>
        
    )
}