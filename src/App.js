import AppHeader from './components/AppHeader'
// import ErrorPage from './components/ErrorPage'
import getCharacters from './services/getCharacters'
import Card from './components/Card'
import createElement from './lib/createElement'
import HouseFilter from './components/HouseFilter'
import Navigation from './components/Navigation'
import './styles/_base.css'
// import ErrorPage from './components/ErrorPage/ErrorPage'

export default function App() {
  const header = AppHeader('Harry Potter App')
  const houseFilter = HouseFilter(onFilterByHouse)
  const cardContainer = createElement('div')

  const app = createElement(
    'div',
    { className: 'App' },
    header,
    houseFilter,
    cardContainer,
    Navigation
  )

  /* function onNavigate(text) {
    if (text === 'Home') {
      Home.show()
      Page2.hide()
    }
  
    if (text === 'Page2') {
      Home.hide()
      Page2.show()
    }
  }
 */
  let characters

  getCharacters().then(data => {
    createCards(data)
    characters = data
  })
  // .catch(error => ErrorPage())

  function onFilterByHouse(house) {
    console.log('App says: ', house)
    const filteredCharacters = characters.filter(
      character => house == null || character.house === house
    )

    createCards(filteredCharacters)
  }

  function createCards(characters) {
    const cards = characters.map(character => Card(character))
    cardContainer.innerHTML = ''
    cardContainer.append(...cards)
  }

  /* function ErrorPage() {
    const errorMessage = createElement('section')
    errorMessage.append(errorImage)
  } */

  return app
}
