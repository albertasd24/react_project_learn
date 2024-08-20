import './App.css'
import Footer from './components/Footer/Footer'
import GalleryPhotoGigant from './components/GalleryPhotoGigant/GalleryPhotoGigant'
import Header from './components/Header/Header'
import GalleryPhotos from './components/GalleryPhotos/GalleryPhotos'
import iconStar from './assets/icons/icon-star.svg'
import iconStarHalf from './assets/icons/icon-star-half.svg'
import { sendMessage } from './services/sendMessageWhatsApp'
import { useState } from 'react'
import FrecuentlAskedQuestions from './components/FrecuentlAskedQuestions/FrecuentlAskedQuestions'

function App() {
  const [name, setname] = useState("");
  const [asunto, setAsunto] = useState("");
  const [message, setmessage] = useState("");
  const formContact = (e) => {
    e.preventDefault()
    const messageData = {
      name: name,
      asunto: asunto,
      text: message
    }
    sendMessage(messageData)
  }
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
        <section className='section' id='testimony'>
          <h2 className='tittle__light'>Testimonios</h2>
          <div className="container__testimony">
            <div className="testimony">
              <div className="testimony__head">
                <img src="https://robohash.org/blue" alt="" />
                <div className="">
                  <p className='author'>Name Lastname</p>
                  <div className="starts">
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam impedit sapiente debitis, quo ducimus fugit atque blanditiis exercitationem eligendi quas tempore modi quis suscipit cumque quasi repellendus. Tempora, porro? Veniam!</p>
            </div>
            <div className="testimony">
              <div className="testimony__head">
                <img src="https://robohash.org/sao" alt="" />
                <div className="">
                  <p className='author'>Name Lastname</p>
                  <div className="starts">
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam impedit sapiente debitis, quo ducimus fugit atque blanditiis exercitationem eligendi quas tempore modi quis suscipit cumque quasi repellendus. Tempora, porro? Veniam!</p>
            </div>
            <div className="testimony">
              <div className="testimony__head">
                <img src="https://robohash.org/bell" alt="" />
                <div className="">
                  <p className='author'>Name Lastname</p>
                  <div className="starts">
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStar} alt="" />
                    <img src={iconStarHalf} alt="" />
                  </div>
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam impedit sapiente debitis, quo ducimus fugit atque blanditiis exercitationem eligendi quas tempore modi quis suscipit cumque quasi repellendus. Tempora, porro? Veniam!</p>
            </div>
          </div>
        </section>
        <section className='section section__contact' id='contacts'>
          <h2 className='tittle__light'>CONTACTANOS</h2>
          <div className="container__form">
            <form onSubmit={formContact} className='form__contact' >
              <div className="">
                <label htmlFor="">Nombre:</label>
                <input type="text" onChange={(e) => setname(e.target.value)} />
              </div>
              <div className="">
                <label htmlFor="">Asunto:</label>
                <input type="text" onChange={(e) => setAsunto(e.target.value)} />
              </div>
              <div className="">
                <label htmlFor="">Descripción:</label>
                <textarea name="" onChange={(e) => setmessage(e.target.value)} id=""></textarea>
              </div>
              <button type='submit' className='button__primary'>Contactar</button>
            </form>
          </div>
        </section>
        <FrecuentlAskedQuestions />
      </main>
      <Footer />
    </>
  )
}

export default App
