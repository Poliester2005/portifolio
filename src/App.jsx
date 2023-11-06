import { useEffect } from 'react'
import './App.scss'
import Nav from './Nav'
import muitoEu from '/src/assets/muitoEu.png'

import WebFont from 'webfontloader';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lato']
      }
    });
  }, []);

  return (
    <>
      <Nav />
      <div className='Introducao'>
        <img src={muitoEu} alt='muitoEu' />
        <div className='container'>
          <h1>Quem sou eu?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique sem in purus vulputate, non dapibus lectus ornare. In lorem felis, facilisis ac purus vel, varius feugiat orci. Etiam lacinia porttitor sem, id dignissim ante. Maecenas pretium purus a maximus congue. In et lectus quis orci hendrerit rhoncus. Nam egestas turpis nec tempor faucibus. Vivamus nec dolor ultricies, ultricies leo eget, scelerisque dolor. Vivamus massa enim, rutrum sit amet consectetur ut, convallis a nulla. Nulla volutpat orci ac metus facilisis, sed dictum nulla placerat. Quisque turpis urna, ultrices id euismod feugiat, porttitor et nisi.
          </p>
        </div>
      </div>
      <div className='Estudo'>
        <div className='container'>
          <h1>Formação</h1>
          <p>Graduação em Ciência da Computação</p>
        </div>
        <img src={muitoEu} alt='muitoEu' />
      </div>
      <div className='CallToAction'>
        <img src={muitoEu} alt='muitoEu' />
        <div className='container'>
          <h1>Pessoal</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tristique sem in purus vulputate, non dapibus lectus ornare. In lorem felis, facilisis ac purus vel, varius feugiat orci. Etiam lacinia porttitor sem, id dignissim ante. Maecenas pretium purus a maximus congue. In et lectus quis orci hendrerit rhoncus. Nam egestas turpis nec tempor faucibus. Vivamus nec dolor ultricies, ultricies leo eget, scelerisque dolor. Vivamus massa enim, rutrum sit amet consectetur ut, convallis a nulla. Nulla volutpat orci ac metus facilisis, sed dictum nulla placerat. Quisque turpis urna, ultrices id euismod feugiat, porttitor et nisi.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
