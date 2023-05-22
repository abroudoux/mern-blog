// Styles
import '../../styles/designs/forms.scss'

export default function Register() {
    return (
        <section>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>Register</button>
            </form>
        </section>
    )
}