import { Link } from "react-router-dom";

export default function Header() {

    return (
        <header className='w-full h-20 flex justify-between items-center px-24 py-5 bg-[#F2F2F2] top-0'>

            <h2 className='font-semibold text-3xl'>
                <Link to="/">Blog</Link>
            </h2>

            <nav className="flex justify-center items-center">
                <ul className='flex gap-4 align-center'>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}