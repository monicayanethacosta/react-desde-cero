import React from 'react';
import './styles/styles.scss'
import Curso from './Curso'


const cursos = [
  {
    "title": "React desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
    "price": 30,
    "profesor": "Monica Acosta"   
  },
  {
    "title": "HTML desde cero",
    "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/typescript.png",
    "price": 30,
    "profesor": "Monica Acosta"   
  },
  {
    "title": "PHP desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-06/Seo%20desde%20cero.png",
    "price": 30,
    "profesor": "Monica Acosta"   
  },
  {
    "title": "GO desde cero",
    "image": "https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2019-03/Redes%20Infraestructura.png",
    "price": 30,
    "profesor": "Monica Acosta"   
  }
]
const App = () => (
<>
  <div className="main-banner img-container l-section" id="main-banner">
    <div className="ed-grid lg-grid-6">
      <div className="lg-cols-4 lg-x-2">
        <img className="main-banner__img" src="https://images.unsplash.com/photo-1470219556762-1771e7f9427d?ixlib=rb-1.2.1&w=1000&q=80" alt="banner" />
        <div className="main-banner__data s-center">
          <p className="t2 s-mb-0">curso</p>
          <p> Prueba</p>
          <a href="https://ed.team" className="button">Subcribirse</a>
        </div>
     </div>
    </div>
  </div>

  <div className= "ed-grid m-grid-3">
   {
     cursos.map( c => <Curso title={c.title} image={c.image} price={c.price} profesor={c.profesor} />)
   }  
  </div>
</>
)

export default App;


