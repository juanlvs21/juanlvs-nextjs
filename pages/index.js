import React from 'react'

// Layout
import Layout from '../layouts/Default'

// Components
import Typed from '../components/Typed'

const index = ({url}) => {
  return (
    <Layout title="Inicio" route={url.pathname}>
      <div className="inicio-bg">
        <div className="container text-center text-white">
          <Typed
            text={['Simple.', 'Fiable.', 'Maravilloso.']}
            size="56"
            color="#fff"
            weight="bold"
          />
          <h2>¡Todo lo que buscabas!</h2>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4 text-center">
          <div className="col-md-12">
            <h3>¿Por qué tener una página web?</h3>
          </div>
        </div>
        <div className="row mt-3 text-center razones">
          <div className="col-md-4">
            <img
              src="/static/svg/group.svg"
              alt="Atrae más clientes"
              width="100"
            />
            <h5>Atrae más clientes.</h5>
            <p>
              En estos tiempos que corren, en la era del mundo online, se
              produce el fenómeno de la propagación a través de medios como el
              correo electrónico, Facebook u otras redes sociales, así como a
              través de los clásicos foros.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="/static/svg/growth.svg"
              alt="Atrae más clientes"
              width="100"
            />
            <h5>Incrementa las ventas.</h5>
            <p>
              Gracias a que las tiendas virtuales están disponibles 24/7, las
              ventas nunca se detienen y tus clientes siempre podrán visitarte.
              La comunicación con los usuarios mejora y las experiencia de
              compra, en la mayoria de los casos, siempre es positiva.
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="/static/svg/shopping-bag.svg"
              alt="Atrae más clientes"
              width="100"
            />
            <h5>Permite llegar a más mercados.</h5>
            <p>
              No importa lo nueva o antugua que sea tu idea de negocio, si
              decides crear una página web, esta podrá competir con cualquier
              otro mercado y llegar hasta los lugares más lejanos del planeta.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .inicio-bg {
          height: 40vh;
          width: 100%;
          display: flex;
          align-items: center;
          background-image: url(/static/img/tools.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .razones p {
          font-size: 15px !important;
        }
        .razones h5 {
          margin-top: 10px;
          font-weight: bold;
        }
      `}</style>
    </Layout>
  )
}

export default index
