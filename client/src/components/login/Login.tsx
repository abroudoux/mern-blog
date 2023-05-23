// React
import { Link } from 'react-router-dom'

// Styles
import '../../styles/designs/forms.scss'


export default function Login() {
    return (
        <section>
            <h1>
                Login
            </h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
            <div>
                <p id="account_actions">
                    Dont have an account yet ? <span><Link to="/register">Sign In</Link></span>
                </p>
            </div>
        </section>
    )
}