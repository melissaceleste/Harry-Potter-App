import './Card.css'
import createElement from '../../lib/createElement'

export default function Card(name) {
  // hier genauso anpassen
  return createElement('section', { className: 'Card' }, name) // hier karten anpassen
}
