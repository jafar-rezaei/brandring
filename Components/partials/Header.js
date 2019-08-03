import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};


const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/product/[id]" as="/product/abc" >
	  <a>First Post</a>
	</Link>
    <Link href="/start" >
	  <a>start</a>
	</Link>

	<p>scoped!</p>
      <style jsx>{`
        p {
          color: blue;
        }
        div {
          background: red;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          background: #fff;
       	
        }

      `}</style>
  </div>
);

export default Header;