export const getStaticPaths = async() => {
    const maxPokemon = 151;
    const api = "https://pokeapi.co/api/v2/pokemon"

    const res = await fetch(`${api}/?limit=${maxPokemon}`);
    const data = await res.json();

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index+1).toString() }
        }
    })

    return {
        paths, fallback: false
    }

}

export const getStaticProps = async(context) => {
    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json()

    return {
        props: { pokemon: data}
    }
}
export default function Pokemon({pokemon}) {
    return <p>{pokemon.name}</p>
}