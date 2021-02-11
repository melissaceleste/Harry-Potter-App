import './Button.css'
import createElement from '../../lib/createElement' // funktioniert wie das document.CreateElement - ('Typ', {Properties}, childrens, wenn wir welche haben)

export default function Button(text, onClick) {
  const el = createElement('button', { className: 'Button' }, text)
  el.addEventListener('click', onClick)

  function toggle(force) {
    el.classList.toggle('selected', force)
  }

  function updateText(text) {
    // anstelle von Gryffindor könnten wir hier andere Houses schreiben
    el.innerText = text
  }

  return { el, updateText, toggle, text: el.innerText }
}
