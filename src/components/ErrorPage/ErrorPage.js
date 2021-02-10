import './ErrorPage.css'
import createElement from '../../lib/createElement'

export default function ErrorPage() {
  // const errorMain = createElement('main', { className: 'ErrorMain' })
  const errorImage = createElement('div', { className: 'ErrorImage' })
  // const errorText = createElement('div', { className: 'ErrorText' }, 'upsala')

  return { errorImage }
}
