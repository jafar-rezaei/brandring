import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <header>
    <div className="container">
      <div className={'headbar'}>
        <div className="logo">Brandring</div>
        <div className="navbar">
          <Link href="/">
            <a style={linkStyle}>Home</a>
          </Link>
          <Link href="/about">
            <a style={linkStyle}>About</a>
          </Link>
          <Link href="/product/[id]" as="/product/abc">
            <a>First Post</a>
          </Link>
          <Link href="/start">
            <a>start</a>
          </Link>
        </div>
        <div className={'sentence'}>The joy of powerfull static data</div>
      </div>
    </div>
  </header>
)

export default Header
