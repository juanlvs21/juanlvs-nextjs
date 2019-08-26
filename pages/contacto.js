import React, {Component} from 'react'

// Layout
import Layout from '../layouts/Default'

export default class contacto extends Component {
  handleChange(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <Layout title="Contacto" route={this.props.url.pathname}>
        <div className="contacto-container">
          <div className="col-md-6">
            <div className="pt-4 text-center text-white">
              <h1>Contáctame</h1>
            </div>
            <div className="card">
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Nombre"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Correo electrónico"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="attached"
                      placeholder="Asunto"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="Mensaje"
                      onChange={this.handleChange}
                    ></textarea>
                  </div>
                  {/* <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                  </div> */}
                  <div>
                    <button className="btn btn-primary btn-block">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .text p {
            text-align: justify;
          }
          .contacto-container {
            background-image: url(/static/img/tools.png);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 100vh;
            padding: 0px 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          textarea {
            resize: none;
          }
          .btn-primary {
            background-color: #00a78c !important;
            border-color: #004a4f !important;
          }
          .btn-primary :hover {
            background-color: #004a4f !important;
            border-color: #00a78c !important;
          }
        `}</style>
      </Layout>
    )
  }
}
