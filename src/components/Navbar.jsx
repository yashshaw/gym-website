import {Link} from 'react-router-dom';

const Navbar = () => {
return (
    <div className="navbar bg-base-100 shadow-sm flex">
        <div className='flex-1'>
            <a className="btn btn-ghost text-xl">Fitness Temple</a>
        </div>
        <div>
            <div className='flex-1'>
                <ul className='flex space-x-4 pr-4'>
                    <li><Link to={`/`}>Homepage</Link></li>
                    <li><Link to={`/portfolio`}>Portfolio</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/program`}>Program</Link></li>
                    <li><Link to={`/facilities`}>Facilities</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
)
}

export default Navbar