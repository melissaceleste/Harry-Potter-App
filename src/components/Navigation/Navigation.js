import './Navigation.css'
import createElement from '../../lib/createElement'
/* 
import homeSvg from '@fortawesome/fontawesome-free/svgs/solid/home.svg'
import Page2Svg from '@fortawesome/fontawesome-free/svgs/solid/bookmark.svg'
import Page3Svg from '@fortawesome/fontawesome-free/svgs/solid/edit.svg'
import Page4Svg from '@fortawesome/fontawesome-free/svgs/solid/cog.svg'
 const buttonsConfig = [
  { text: 'Home', svgPath: homeSvg },
  { text: 'Page2', svgPath: Page2Svg },
  { text: 'Page3', svgPath: Page3Svg },
  { text: 'Page4', svgPath: Page4Svg },
] 

OOOOOODER :

const buttonsConfig = [
  { text: 'Home', className: 'nav__bild__1' },
  { text: 'Home', className: 'nav__bild__2' },
  { text: 'Home', className: 'nav__bild__3' },
  { text: 'Home', className: 'nav__bild__4' },
]


export default function Navigation(onNavigate) {
  const buttons = buttonsConfig.map(({ svgPath, text }) => {
    const button = createElement(
      'button',
      { className: 'Navigation__button' },
      text
    )
    button.addEventListener('click', () => onNavigate(text))
    return button
  })

  return createElement('nav', { className: 'Navigation' }, ...buttons)
}
*/
export default function Navigation() {
  const buttonHome = createElement('button', { className: 'nav__bild__1' })
  const buttonPage1 = createElement('button', { className: 'nav__bild__2' })
  const buttonPage2 = createElement('button', { className: 'nav__bild__3' })
  const buttonPage3 = createElement('button', { className: 'nav__bild__4' })

  return { buttonHome, buttonPage1, buttonPage2, buttonPage3 }
}
