import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

// export const defaultCard = () => Card('Harry Potter')

export const base = () =>
  Card({
    name: 'Harry Potter',
    image: 'https://unsplash.com/random',
    wand: { wood: 'yew', core: 'nope' },
  })
