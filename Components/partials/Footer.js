import Link from '../main/link'

const Footer = props => (
  <div className={'footer'}>

    <div className="container footerLinks">
      <Link activeClassName={'active'} href="/product/[id]" as="/product/abc">
        <a className={'partners'}>blog</a>
      </Link>
    </div>
    <div style={{ textAlign: 'center' }}>
			Powered by brandring ™
    </div>
  </div>
)

export default Footer
