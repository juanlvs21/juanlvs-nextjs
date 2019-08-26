import React from 'react'
// React Responsive Carousel
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

// Layout
import Layout from '../layouts/Default'

const certificaciones = ({url}) => {
  return (
    <Layout title="Certificaciones" route={url.pathname}>
      <div className="carousel-container">
        <Carousel showThumbs={false}>
          <div>
            <img src="/static/img/certificaciones/django.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/react.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/react-router.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/redux.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/next-js.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/php-laravel.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/vuejs.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/vuejs-profesional.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/git-github.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/creacion-de-empresas.png" />
          </div>
          <div>
            <img src="/static/img/certificaciones/ibm-cloud.png" />
          </div>
        </Carousel>
      </div>
      <style jsx>{`
        .carousel-container {
          background-color: #004b50 !important;
          height: 100vh;
        }
        :global(.slide) {
          background-color: #004b50 !important;
          overflow: auto;
        }
      `}</style>
    </Layout>
  )
}

export default certificaciones
