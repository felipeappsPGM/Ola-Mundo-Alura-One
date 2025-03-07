import Banner from "../../components/Banner";
import styles from './Inicio.module.css';
import posts from  '../../json/posts.json'
import PostCard from "../../components/PostCard";
export default function Inicio() {
    
    return (
        <main>
            <ul className={styles.posts}>
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard post={post}/>
                    </li>
                ))}
            </ul>
        </main>
    )

}