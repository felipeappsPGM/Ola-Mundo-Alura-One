import styles from './NaoEncontrada.module.css'
import error404 from '../../assets/erro_404.png';
import BotaoPrincial from '../../components/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
    const navegar = useNavigate();
    return (
        <>
        <div className={styles.conteudoContainer}>
            <span className={styles.texto404}>404</span>
            <h1 className={styles.titulo}>Ops! Página não encontrada</h1>
            <p className={styles.paragrafo}>Tem certeza de que era isso que você estava procurando?</p>
            <p className={styles.paragrafo}>Aguarde um instante e recarregue a página, ou volte para página anterior</p>
            <div 
            className={styles.botaoContainer}
            onClick={() => navegar(-1)}
            >
                <BotaoPrincial lg='lg'>Voltar</BotaoPrincial>
            </div>

            <img className={styles.imagemCachorro} src={error404} alt="cachorro com lupa" />

        </div>
        <div className={styles.espacoEmBranco}>

        </div>
        </>
        
    )
}