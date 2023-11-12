import './nav.scss';
import { Link } from 'react-router-dom';
const Nav =()=>{
    return<session className="nav-session">
        <div className='nav-bar'>
            <div className='logo'>
                <h1 className='k'>K</h1>
            </div>

            <div className='link'>
                <li>
                    <Link activeClassName="active" id='home' className='links anim-btn' to='/'>Home</Link>
                </li>
                <li>
                    <Link id='about' className='links anim-btn' to='/about'>About</Link>
                </li>
                <li>
                    <Link id='contact' className='links anim-btn' to='/contact'>Contact</Link>
                </li>
            </div>
        </div>

      
    </session>
}


export default Nav;