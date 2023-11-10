import styles from "../../styles/Pokemon.module.css"
import Image from "next/image";

export const getStaticPaths = async () => {
    const maxPokemon = 151;
    const api = "https://pokeapi.co/api/v2/pokemon"

    const res = await fetch(`${api}/?limit=${maxPokemon}`);
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths, fallback: false
    }

}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json()

    return {
        props: { pokemon: data }
    }
}
export default function Pokemon({ pokemon }) {
    return (
        <div className={styles.pokemon_container}>
            <div className={styles.teste}>
                <h1 className={styles.title}>{pokemon.name}</h1>
                <div className={styles.title_top}>


                    <Image src={`/images/${pokemon.id}.png`}
                        width={200}
                        height={200}
                        alt={pokemon.name}
                    />
                </div>
                <div className={styles.info}>
                    <div>
                        <h3>Número: </h3>
                        <p>#{pokemon.id}</p>
                    </div>
                    <div className={styles.types}>
                        <h3>Tipo: </h3>
                        <div>
                            {pokemon.types.map((item, index) => (
                                <span
                                    key={index}
                                    className={`${styles.type} ${styles['type_' + item.type.name]}`}
                                >
                                    {item.type.name}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className={styles.data_container}>
                        <div className={styles.data_height}>
                            <h4>Altura: </h4>
                            <p>{pokemon.height * 10} cm</p>
                        </div>
                        <div className={styles.data_weight}>
                            <h4>Peso: </h4>
                            <p>{pokemon.weight / 10} kg</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}