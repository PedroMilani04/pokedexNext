import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Card from '../../components/Card';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export async function getStaticProps() {



  const maxPokemon = 151;
  const api = "https://pokeapi.co/api/v2/pokemon"

  const res = await fetch(`${api}/?limit=${maxPokemon}`);

  const data = await res.json();


  data.results.forEach((item, index) => {
    item.id = index + 1;
  })

  return {
    props: {
      pokemons: data.results
    }
  }
}

export default function Home({ pokemons }) {
  //console.log(pokemons);

  return (
    <div className={styles.t}>
      <div className={styles.geral}>

        <div className={styles.center_line}></div>
        <div className={styles.first_circle}></div>
        <div className={styles.white_pokeball}></div>
        <div className={styles.line_pokeball}></div>
        <div className={styles.pokeball_circle_one}></div>
        <div className={styles.pokeball_circle_two}></div>
        <div className={styles.right_button_one}></div>
        <div className={styles.right_button_two}></div>


        <div className={styles.title_container}>
          <h1 className={styles.title}>Poké<span>Next</span></h1>
          <Image className={styles.bola} src={"/images/pokeball.png"} width={50} height={50} alt='pokeball' />
        </div>
        <div className={styles.poke_container}>
          {pokemons.map((pokemon) => (
            <Card key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>

      </div>

    </div>
  )
}
