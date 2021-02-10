const charactersUrl = 'XXXXXhttp://hp-api.herokuapp.com/api/characters'

export default function getCharacters() {
  return fetch(charactersUrl).then(res => res.json())
}
