import Header from './partials/Header'
import Footer from './partials/Footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
