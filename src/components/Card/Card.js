import './Card.css'
import createElement from '../../lib/createElement'

/* export default function Card(name, house) {
  // hier genauso anpassen
  return createElement('section', { className: 'Card' }, name, house) // hier karten anpassen
}
 */
export default function Card(character) {
  const cardImage = createElement('img', {
    className: 'CardImage',
    src: character.image,
    height: '200',
  })

  const cardEl = createElement(
    'section',
    {
      className: 'CardEl',
      innerHTML: `
      <h2>
  ${character.name} </h2>
  <h3>
  <img
            src="images/wand.png"
            alt=""
            width="50"
            class= "wobble-hor-bottom"
        />
  ${character.patronus} </h3>
  
  `,
    },
    cardImage
  )

  if (character.house === 'Gryffindor') {
    cardEl.classList.add('red')
  }
  if (character.house === 'Slytherin') {
    cardEl.classList.add('green')
  }
  if (character.house === 'Hufflepuff') {
    cardEl.classList.add('yellow')
  }
  if (character.house === 'Ravenclaw') {
    cardEl.classList.add('blue')
  }

  /* if (character.patronus === '') {
    hidden = true
  } */
  // if character.patronous === "" class:hidden=true
  // else class:hidden=false

  return cardEl
}

/*  const cardContent = createElement('section', character.age, character.wand)

  const cardEl = createElement(
    'section',
    {
      className: 'CardEl',
    },
    character.name,
    cardContent,
    cardImage
  )

  if (character.house === 'Gryffindor') {
    cardEl.classList.add('red')
  }
  if (character.house === 'Slytherin') {
    cardEl.classList.add('green')
  }
  if (character.house === 'Hufflepuff') {
    cardEl.classList.add('yellow')
  }
  if (character.house === 'Ravenclaw') {
    cardEl.classList.add('blue')
  }

  return cardEl
} 
*/
