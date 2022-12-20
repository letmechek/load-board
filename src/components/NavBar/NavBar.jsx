import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav>
            <Link to="/loads">LoadBoard</Link>
            &nbsp; | &nbsp;
            <Link to="/loads/new">Post A Load</Link>
            &nbsp; | &nbsp;
            <Link to="/trucks/">Truck Board</Link>
            &nbsp; | &nbsp;
            <Link to="/trucks/new">Post A Truck</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
    )
}