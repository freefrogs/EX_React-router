import React from 'react';
import {Link} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const Navigation = props => (
	<div>
		<nav className="navbar navbar-inverse">
			<div className="container-fluid">
				<div className="navbar-header">
					<Link className="navbar-brand" to="/">Countries app</Link>
				</div>
				<div className="collapse navbar-collapse">
					<ul className="nav navbar-nav">
						<li><Link to="/countries">Countries</Link></li>
						<li><Link to="/continents">Continents</Link></li>
						<li><Link to="/contact">Contact</Link></li>
					</ul>
				</div>
			</div>
		</nav>
		<div className="container-fluid">
			{props.children}
		</div>
	</div>
);

export default Navigation;