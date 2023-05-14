import express from 'express'
import ProjectsRoute from './routes/Projects.routes.js'
import ProjectsRouteAPI from './api/routes/Projects.api.routes.js'
import { useRef } from "react";
import './App.css';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  const app = express()
  const Mobile = useRef(null);
  const LandingPage = useRef(null);
  const Web_App = useRef(null);
  const E_Commerce = useRef(null);
  const Games = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <ScrollToTop />
     <div className="heroe">
      <ul>
        <li onClick={() => scrollToSection(Mobile)}className="link">Mobile</li>
        <li onClick={() => scrollToSection(LandingPage)}className="link">LandingPage</li>
        <li onClick={() => scrollToSection(Web_App)}className="link">Web_App</li>
        <li onClick={() => scrollToSection(E_Commerce)}className="link">E_Commerce</li>
        <li onClick={() => scrollToSection(Games)}className="link">Games</li>
      </ul>
     </div>
     <div ref={Mobile}className="Mobile">
      <h3>Mobile</h3>
     </div>
     <div ref={LandingPage}className="LandingPage">
      <h3>LandingPage</h3>
     </div>
     <div ref={Web_App}className="Web_App">
      <h3>Web App</h3>
     </div>
     <div ref={E_Commerce}className="E_Commerce">
      <h3>E-Commerce</h3>
     </div>
     <div ref={Games}className="Games">
      <h3>Games</h3>
     </div>
    </div>
  );
}
// configuracion del servidor
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 
app.use('/', express.static('public'))

app.use(ProjectstRoute)
app.use('/api', ProjectsRouteAPI)

app.listen(2222, function () {
    console.log('Server is running in http://localhost:2222')
})

export default App;
