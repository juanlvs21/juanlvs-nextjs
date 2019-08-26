import React, {Component, Fragment} from 'react'
import Link from 'next/link'

class SideBar extends Component {
  componentDidMount() {
    // Ancho credits
    const sidebar = document.querySelector('.sidebar')
    const credits = document.querySelector('.credits')
    credits.style.width = `${sidebar.clientWidth}px`
  }

  render() {
    const year = new Date().getFullYear()
    console.log
    return (
      <Fragment>
        <aside className="sidebar">
          <div className="text-center title">
            <img
              src="/static/img/avatar.jpg"
              className="avatar"
              alt="Juan Villarroel"
            />
            <h4>Juan Villarroel</h4>
            <span>Desarrollador Web</span>
          </div>
          <div className="mt-3">
            <ul className="nav flex-column text-center">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      'nav-link ' + (this.props.route == '/' ? 'active' : ' ')
                    }
                  >
                    Inicio
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/acerca">
                  <a
                    className={
                      'nav-link ' +
                      (this.props.route == '/acerca' ? 'active' : ' ')
                    }
                  >
                    ¿Quien soy?
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/certificaciones">
                  <a
                    className={
                      'nav-link ' +
                      (this.props.route == '/certificaciones' ? 'active' : ' ')
                    }
                  >
                    Certificaciones
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contacto">
                  <a
                    className={
                      'nav-link ' +
                      (this.props.route == '/contacto' ? 'active' : ' ')
                    }
                  >
                    Contacto
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="credits text-center">
            <span>{year} © Todos los derechos reservados</span>
          </div>
        </aside>
        <style jsx>{`
          .sidebar {
            height: 100vh;
            color: #fff;
            background-color: #00a78c;
            //background-color: #106339;
          }
          .avatar {
            margin: 20px;
            width: 40%;
            border-radius: 50%;
          }
          .title h4 {
            font-weight: bold;
          }
          .nav a {
            color: #fff;
          }
          .nav-item .active {
            background-color: #ffffff21;
            margin: 5px 10%;
            font-weight: 800;
            border-radius: 20px;
            height: 40px;
          }
          .nav-link :hover {
            font-weight: 800;
          }
          .credits {
            position: fixed;
            bottom: 0;
            padding: 5px 10px;
          }
        `}</style>
      </Fragment>
    )
  }
}

export default SideBar
