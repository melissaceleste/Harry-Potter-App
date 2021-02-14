import './AliveFilter.css'
// import Button from '../Button'
import createElement from '../../lib/createElement'

export default function AliveFilter(onFilterByAlive) {
  // App.js:
  const buttonAlive = createElement('button', { className: 'buttonAlive' })
  buttonAlive.addEventListener('click', onFilterByAlive())

  /* const buttonDeath = createElement('button', { className: 'buttonDeath' })
  buttonDeath.addEventListener('click', filterByDeath())
 */
  // AliveFilter.js:

  /*   filterByAlive() = console.log(
    characters.filter(characters => characters.alive === 'true')
  ) */
  // wird so  noch nicht funktionieren, weil ich noch die Cards ansprechen muss
  /* filterByDeath() = console.log(
    characters.filter(characters => characters.alive === 'false')
  ) */

  return AliveFilter(onFilterByAlive)
}
