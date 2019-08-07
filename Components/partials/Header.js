import Link from './../main/link'

const Header = () => (
  <header>
    <div className="container">
      <div className={'headbar'}>
        <div className="logo">Brandring</div>
        <div className="navbar">
          <Link activeClassName={'active'} href="/">
            <a className={'home'}>Home</a>
          </Link>
          <Link activeClassName={'active'} href="/about">
            <a className={'about'}>About</a>
          </Link>
          <Link activeClassName={'active'} href="/partners">
            <a className={'partners'}>Partners</a>
          </Link>
          <Link activeClassName={'active'} href="/register">
            <a className={'joinus'}>JoinUs</a>
          </Link>
        </div>
        <div className={'sentence'}>The joy of reliable great products</div>
      </div>
    </div>
  </header>
)

export default Header
