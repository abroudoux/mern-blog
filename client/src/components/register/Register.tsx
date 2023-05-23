// React
import React, { useEffect } from 'react';
import { Link} from 'react-router-dom';

// Styles
import '../../styles/designs/forms.scss';


export default function Register() {

    useEffect(() => {

        const handlePasswordValidation = () => {
            
            const passwordInput = document.getElementById('register_password') as HTMLInputElement;
            const requirementList = document.querySelectorAll('.requirement-list li') as NodeListOf<HTMLLIElement>;

            const requirements = [
                { regex: /.{8,}/, index: 0 },
                { regex: /[0-9]/, index: 1 },
                { regex: /[a-z]/, index: 2 },
                { regex: /[^A-Za-z0-9]/, index: 3 },
                { regex: /[A-Z]/, index: 4 },
            ];

            requirements.forEach(item => {
                const isValid = item.regex.test(passwordInput.value);
                const requirementItem = requirementList[item.index];

                if (isValid) {
                    requirementItem.classList.add("valid");
                } else {
                    requirementItem.classList.remove("valid");
                }
            });
        };

        const passwordInput = document.getElementById('register_password') as HTMLInputElement;

        passwordInput.addEventListener("keyup", handlePasswordValidation);

        return () => {
            passwordInput.removeEventListener("keyup", handlePasswordValidation);
        };

    }, []);

    return (
        <section>
            <h1>
                Register
            </h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" id="register_password" />
                <div>
                    <p>Password must contains ...</p>
                    <ul className="requirement-list">
                        <li>At least 8 characters length</li>
                        <li>At least 1 number</li>
                        <li>At least 1 lowercase letter</li>
                        <li>At least 1 special symbol</li>
                        <li>At least 1 uppercase letter</li>
                    </ul>
                </div>
                <button>Register</button>
            </form>
            <div>
                <p id="account_actions">
                    Already have an account ? <span><Link to="/login">Log In</Link></span>
                </p>
            </div>
        </section>
    )
}
