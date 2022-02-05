import {Link} from 'react-router-dom'

function Header(){
	return(
		<div className="nav">
			<Link className="nav-link" to="/">Home</Link>
			<Link className="nav-link" to="/about">About</Link>
			<Link className="nav-link" to="/contact">Contact</Link>
		</div>
	)
}
export default Header