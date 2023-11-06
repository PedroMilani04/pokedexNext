import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import Card from '../../components/Card';

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

export default function Home({pokemons}) {
  //console.log(pokemons);

  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src={"/images/pokeball.png"} width={50} height={50} alt='pokeball' />
      </div>
      <div className={styles.poke_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
