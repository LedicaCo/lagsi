import "../assets/css/servicios.css";
import ImageFinance from "../../public/educacion-financiera.jpg";
import ImageAdvisory from "../../public/asesoria-empresarial.png";
import ImageSaving from "../../public/ahorro-programado.jpg";
import ImageBible from "../../public/finanzas-biblia.jpg";
import ImageVisado from '../../public/american-visa-document.jpg';
import ImageSeguroEducativo from '../../public/seguro-educativo.jpg';

const Servicios = () => {
  return (
    <>
      <article className="servicios section" id="servicios">
        <div className="service-title">
          <h2 className="service-title-text">Servicios</h2>
        </div>

        <div className="service-content">
          <div className="card">
            <img src={ImageFinance} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">Educación Financiera</span>
              <p>
              Te brinda habilidades y estrategias para administrar tus recursos diarios con menos riesgos, permitiéndote construir un futuro más sólido. Aprenderás técnicas y herramientas que te ayudarán a tomar decisiones financieras más informadas y efectivas en tu vida cotidiana.
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582" target="_blank">Whatsapp me</a>
                <a href="#contacto">Contacto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias" target="_blank">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageAdvisory} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">Asesoría Empresarial</span>
              <p>
              Mediante asesoría empresarial, las compañías identificarán estrategias financieras eficaces, optimizando recursos para un crecimiento sostenible y preparándose para futuras expansiones con inteligencia y seguridad.
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582" target="_blank">Whatsapp me</a>
                <a href="#contacto">Contacto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias" target="_blank">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageSaving} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">Ahorro Programado</span>
              <p>
              Descubre cómo el ahorro programado puede transformar tu futuro financiero. Explora una variedad de herramientas rentables y seguras que te permitirán alcanzar tus metas sin depender de créditos. Conoce estrategias efectivas para construir un patrimonio sólido y alcanzar la estabilidad económica deseada.
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582" target="_blank">Whatsapp me</a>
                <a href="#contacto">Contacto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias" target="_blank">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageBible} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">
                Finanzas a la Luz de la Biblia
              </span>
              <p>
              Explora el fascinante vínculo entre las finanzas y la espiritualidad a través de nuestro programa ¡Finanzas a la Luz de la Biblia!. A través de talleres interactivos, te guiaremos para que organices tus recursos financieros mientras descubres la conexión profunda entre tus metas monetarias y tus propósitos espirituales.
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582" target="_blank">Whatsapp me</a>
                <a href="#contacto">Contacto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias" target="_blank">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageSeguroEducativo} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">
                Seguro Educativo
              </span>
              <p>
              Los seguros educativos ofrecen una estrategia financiera para asegurar los fondos necesarios destinados a la educación universitaria de los hijos, facilitando la planificación y la tranquilidad económica familiar.
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582" target="_blank">Whatsapp me</a>
                <a href="#contacto">Contacto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias" target="_blank">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={ImageVisado} className="card-image" alt="..." />
            <div className="srv-card-body">
              <span className="srv-card-body-title">
                Asesoría legal Visas para EE. UU.
              </span>
              <p>
              Nos especializamos en hacer realidad los sueños de nuestros clientes, guiándolos a través del complejo proceso de obtención de visas para Estados Unidos. Con un equipo experto de 12 años de experiencia, brindamos asesoría con empatía, calidez humana y un alto nivel de profesionalismo.
              </p>
              <div className="srv-links">
                <a href="https://wa.me/3128368582" target="_blank">Whatsapp me</a>
                <a href="#contacto">Contacto</a>
                <a href="https://koalendar.com/e/reunion-con-laura-arias" target="_blank">
                  Agendar una reunión
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Servicios;
