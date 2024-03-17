import logo from '../assets/ironhack-logo-xs.png';
import menu from '../assets/menu-top-xs.png';

function Navbar () {
    return (
        <nav className='navbar'>
            <img src={logo} alt='ironhack logo' />
            <img src={menu} alt='menu logo' />
            
        </nav>
    )
}

export default Navbar;