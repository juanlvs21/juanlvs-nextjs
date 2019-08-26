import React, {Component, Fragment} from 'react'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'

// Components
import SideBar from '../components/SideBar'

// Styles
import '../static/css/nprogress.css'

// Nprogress
Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class Default extends Component {
  componentDidMount() {
    if (typeof window !== 'undefined') {
      // jQuery
      require('jquery')
      // Bootstrap
      require('bootstrap/dist/css/bootstrap.min.css')
      require('bootstrap/dist/js/bootstrap.bundle')
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>{this.props.title} | Juan Villarroel</title>
        </Head>
        <div className="row">
          <div className="col-md-3 sin-padding">
            <SideBar route={this.props.route} />
          </div>
          <div className="col-md-9 sin-padding scroll-container">
            <div>{this.props.children}</div>
          </div>
        </div>
        <style jsx>{`
          :global(body) {
            overflow: hidden;
          }
          .sin-padding {
            padding: 0px !important;
          }
          .scroll-container {
            height: 100vh;
            overflow-y: scroll;
          }
        `}</style>
      </Fragment>
    )
  }
}
