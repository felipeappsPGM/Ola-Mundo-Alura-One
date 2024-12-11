import PostModelo from "../../components/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png"
import styles from './SobreMim.module.css'
import fotoSobreMim from '../../assets/sobre_mim_foto.png'
export default function Sobremim(){
    return(
        <PostModelo 
        FotoCapa={fotoCapa}
        titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>Olá, eu sou o Felipe</h3>
            <img src={fotoSobreMim} alt="foto sobre mim" className={styles.fotoSobreMim}/>
            <p className={styles.paragrafo}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia eveniet recusandae repudiandae architecto perspiciatis ut dignissimos voluptatem odit quidem ratione doloremque quibusdam et enim, commodi obcaecati placeat nisi eum dolor.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime eveniet neque accusamus quae, incidunt architecto aperiam, dolorem asperiores voluptatum nisi quaerat magnam cupiditate! Harum, consequuntur? Quos temporibus vitae ea.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime eveniet neque accusamus quae, incidunt architecto aperiam, dolorem asperiores voluptatum nisi quaerat magnam cupiditate! Harum, consequuntur? Quos temporibus vitae ea.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime eveniet neque accusamus quae, incidunt architecto aperiam, dolorem asperiores voluptatum nisi quaerat magnam cupiditate! Harum, consequuntur? Quos temporibus vitae ea.</p>
            <p className={styles.paragrafo}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo maxime eveniet neque accusamus quae, incidunt architecto aperiam, dolorem asperiores voluptatum nisi quaerat magnam cupiditate! Harum, consequuntur? Quos temporibus vitae ea.</p>

        </PostModelo>
    )
}