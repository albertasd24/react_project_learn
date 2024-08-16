import './App.css'
import Footer from './components/Footer/Footer'
import GalleryPhotoGigant from './components/GalleryPhotoGigant/GalleryPhotoGigant'
import ImageTestimonio1 from './assets/img/testimonio1.jpg'
import ImageTestimonio2 from './assets/img/testimonio2.jpg'
import Header from './components/Header/Header'
import GalleryPhotos from './components/GalleryPhotos/GalleryPhotos'

function App() {
  return (
    <>
      <Header />
      <main id='home'>
        <div className="banner" >
          <div className="banner__information">
            <h1 className='banner__tittle'>Transforma Tu Sonrisa Hoy</h1>
            <p className='banner__description'>Confía en nuestros expertos para brindarte el mejor cuidado dental y lograr una sonrisa deslumbrante. Aprovecha nuestras ofertas y experimenta la diferencia en tu salud buca</p>
          </div>
        </div>
        <section className='section' id='services'>
          <h2 className='tittle__light'>Nuestros <span className='mark'>Servicios</span> para ti</h2>
          <div className="section__gallery">
            <GalleryPhotoGigant />
            <GalleryPhotos />
          </div>
        </section>
        <section className='section section__about' id='about'>
          <article>
            <h2 className='tittle__light'>SOBRE NOSOTROS</h2>
          </article>
          <article>
            <div className="acorddeon">
              <div className="item">
                <p>Cuidado Personalizado</p> <span>01</span>
              </div>
              <div className="item">
                <p>Conveniente y Accesible</p> <span>02</span>
              </div>
              <div className="item">
                <p>Resultados de Apariencia Natural</p> <span>03</span>
              </div>
              <div className="item">
                <p>Soluciones Personalizadas</p> <span>04</span>
              </div>
              <div className="item">
                <p>Rápido y Eficaz</p> <span>05</span>
              </div>
              <div className="item">
                <p>Alta Calidad</p> <span>06</span>
              </div>
            </div>
          </article>
        </section>
        <section className='section'>
          <h2 className='tittle__light'>NUESTROS ESPECIALISTAS</h2>
        </section>
        <section className='section'>
          <h2 className='tittle__light'>Testimonios</h2>
          <div className="container__testimoni">
            <div className="card__testimonio">
              <div className="card__testimonio__header">
                <img src={ImageTestimonio1} alt='testimonio' />
              </div>
              <div className="card__testimonio__body">
                <h3>Andrea</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis rutrum purus a est fermentum, in eleifend lectus posuere. Donec luctus, metus vel lobortis vulputate, dui nisi volutpat velit, id bibendum arcu velit id neque.</p>
              </div>
            </div>
          </div>
        </section>
        <section className='section section__contact'>
          <h2 className='tittle__light'>CONTACTANOS</h2>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
