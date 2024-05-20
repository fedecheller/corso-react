import { Link } from 'react-router-dom'

function HeaderBar() {
    return (
        <ul className='flex gap-10 mb-10'>
            <li>
                <Link to={'/'}>home</Link>
            </li>
            <li>
                <Link to={'/contacts'}>contatti</Link>
            </li>
            <li>
                <Link to={'/about'}>about</Link>
            </li>

        </ul>
    )
}

export default HeaderBar;