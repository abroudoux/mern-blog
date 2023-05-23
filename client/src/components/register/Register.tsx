// React
import { Link } from 'react-router-dom'

// Styles
import '../../styles/designs/forms.scss'


export default function Register() {
    return (
        <section>
            <h1>
                Register
            </h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Register</button>
            </form>
            <div>
                <p>
                    Already have an account ? <span><Link to="/login">Log In</Link></span>
                </p>
            </div>
        </section>
    )
}
