import styles from "../styles/About.module.css"
import Image from "next/image"
export default function About() {
    return (
        <main className={styles.about}>
            <h1>Sobre</h1>
            <h2>Projeto - PokéDex NextJS</h2>
            <Image src={"/images/charizard.png"} width={300} height={300} />
        </main>
    )
}