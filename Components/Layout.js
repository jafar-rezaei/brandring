import Header from './partials/Header'
import Footer from './partials/Footer'

const Layout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
)

export default Layout
