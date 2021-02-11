import './HouseFilter.css'
import Button from '../Button'
import createElement from '../../lib/createElement'

export default function HouseFilter(onFilterByHouse) {
  const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'] // diese Wörter stehen auf den Buttons

  let currentFilter

  const buttons = houses.map(house => {
    // Konstante Button = für jedes Haus erstellt ich hier einen Button, welcher wiederum die onFilter und toggle -Funktion hat.
    // neue Konstante Buttons, aus dem Array mappen wir darüber und kreiieren für jedes House einen Button

    const button = Button(
      house,
      (/* hiermit rufen wir die onclick function auf */) => {
        currentFilter = currentFilter === house ? null : house
        onFilterByHouse(currentFilter)
        buttons.forEach(button => button.toggle(button.text === currentFilter))
      }
    )
    // function filterHouse(house) {
    // wenn der currentFilter=== dem House ist, dann weise dem null zu ansonsten ein house. Damit der Button sich wieder normal färbt
    // wir übergeben der Funktion onFilterByHouse den CurrentFilter
    // für jeden Button
    // }

    return button
  })

  return createElement('section', { className: 'HouseFilter' }, ...buttons)
}
