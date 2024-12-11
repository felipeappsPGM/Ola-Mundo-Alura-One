import { useParams } from 'react-router-dom'
import styles from './Post.module.css';
import posts from '../../json/posts.json'
import PostModelo from '../../components/PostModelo';
import ReactMarkdown from 'react-markdown'
import './Post.css'
export default function Post(){
    const parametros = useParams();
    const post = posts.find((post) => {
        return post.id === parseInt(parametros.id);
    })
    if(!post){
        return <h1>Post não encontrado</h1>
    }
    return(
        <PostModelo
            FotoCapa={`../../assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className='post-markdown-container'>
            <ReactMarkdown>
                {post.texto}
            </ReactMarkdown>
            </div>
            
        </PostModelo>
    )

}