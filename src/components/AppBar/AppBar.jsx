import {Link, Header} from './AppBar.Style'

export function Navigation() {
    return (
        <Header>            
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>         
        </Header>
    )
} 