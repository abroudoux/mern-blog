// React
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Styles
import '../../styles/designs/forms.scss'


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function loginForm(ev: { preventDefault: () => void; }) {
        ev.preventDefault();
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type':'application/json'},
        });
    }

    return (
        <section>
            <h1>
                Login
            </h1>
            <form onSubmit={loginForm}>
                <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
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