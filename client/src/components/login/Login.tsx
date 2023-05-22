// Styles
import '../../styles/designs/forms.scss'

export default function Login() {
    return (
        <section>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Login</button>
            </form>
        </section>
    )
}