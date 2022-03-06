import './assets/styles/style.css'
import trex from './assets/trex.jpg'
import './canvas'

const img = document.createElement('img')
document.body.appendChild(img)

window.onload = () => {
  img.src = trex
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('SW registered: ', registration)
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError)
      })
  })
}
