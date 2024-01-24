import { NavLink } from 'react-router-dom'
import logo from '../../public/logo.png'

function Navbar() {
    return (
        <div className='px-4 py-3 w-full bg-slate-800'>
            <div className='text-xs w-full max-w-screen-xl mx-auto flex items-center justify-between'>
                <div className='w-[30px] h-[30px]'>
                    <img className='' width={100} height={100} src={logo} alt="itc logo" />
                </div>
                <NavLink className='navlink' to='/'>ГЛАВНАЯ</NavLink>
                <NavLink className='navlink' to='/'>КУРСЫ</NavLink>
                <NavLink className='navlink' to='/'>ОПЛАТА</NavLink>
                <NavLink className='navlink' to='/'>ТРУДОУСТРОЙСТВО</NavLink>
                <NavLink className='navlink' to='/'>О НАС</NavLink>
                <NavLink className='navlink' to='/'>БЛОГ</NavLink>
            </div>
        </div>
    )
}

export default Navbar