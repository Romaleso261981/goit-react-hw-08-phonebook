import {Link, Header} from './HomeView.styled'

export function Navigation() {
    return (
        <Header>            
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/movies' >Movies</Link>
            </nav>         
        </Header>
    )
} 