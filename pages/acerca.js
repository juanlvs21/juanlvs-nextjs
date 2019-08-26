import React from 'react'
import {HorizontalBar} from 'react-chartjs-2'

// Layout
import Layout from '../layouts/Default'

const acerca = ({url}) => {
  // const data = [{x: '2016-12-25', y: 20}, {x: '2016-12-26', y: 10}]
  const data = {
    labels: [
      'HTML',
      'JavaScript',
      'ReactJS',
      'Angular',
      'VueJS',
      'ExpressJS',
      'Django',
      'Laravel'
    ],
    datasets: [
      {
        label: 'Conocimientos (Porcentaje)',
        backgroundColor: '#00a78c',
        borderColor: '#004b50',
        borderWidth: 1,
        hoverBackgroundColor: '#004a4f',
        hoverBorderColor: '#8bc34a',
        data: [90, 90, 70, 60, 70, 60, 40, 50, 100, 0]
      }
    ]
  }

  return (
    <Layout title="¿Quien soy?" route={url.pathname}>
      <div className="about-container">
        <div className="row pt-4">
          <div className="col text-center">
            <h1>¿Quién soy?</h1>
          </div>
        </div>
        <div className="row text mt-3">
          <div className="col">
            <p>
              Soy Juan Villarroel, venezolano estudiante de Licenciatura en
              Informática. Siempre he tenido como hábitat natural el entorno de
              la programación web, tanto a nivel informativo como laboral. En el
              transcurso de mi carrera universitaria siempre he buscado
              información adicional relacionada al diseño web, he realizado
              varios proyectos por hobbie. Adicionalmente poseo conocimientos
              prácticos en el uso de Photoshop siendo un gran apoyo en el diseño
              de algún proyecto. Me considero una persona con compromiso, y por
              poner mucho empeño en las cosas hago, programar para mi se vuelve
              entretenido, me divierte, me emociona. Es por eso que cuando se
              trata de programar siempre doy el 200% de mi y así enfrentar todas
              las dificultades al momento de proponerme algo.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <HorizontalBar
                  options={{responsive: true}}
                  height={100}
                  data={data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .text p {
          text-align: justify;
        }
        .about-container {
          background-image: url(/static/img/tools.png);
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: #fff;
          height: 100vh;
          padding: 0px 30px;
        }
      `}</style>
    </Layout>
  )
}

export default acerca
