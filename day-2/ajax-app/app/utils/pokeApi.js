import fetch from 'isomorphic-fetch'
const ENDPOINT = 'http://pokeapi.co/api/v2'

export default function getPokemon() {
  return fetch(`${ENDPOINT}/pokemon/`).then(res => res.json())
}
