import Link from './main/link'

const Breadcrumb = props => {
  const paths = props.paths || []
  console.log({ paths })
  return (
    <div className={'breadcrumb'}>
      <Link href={'/'}>
			  <a><i className={'lnr lnr-home'}/> Home</a>
      </Link>
      {
			  paths.map(path => {
			    return (
			      <Link href={path.href || '/'} as={path.as || '' }>
			        <a>{path.label}</a>
			      </Link>
			    )
			  })
      }
    </div>
  )
}

export default Breadcrumb
