export default function Header () {

    return (
        <header className='w-full h-20 flex justify-between items-center px-24 py-5 fixed bg-white top-0'>

            <h2 className='font-semibold text-3xl'>
                <a href="">Blog</a>
            </h2>

            <nav className="flex justify-center items-center">
                <ul className='flex gap-4 align-center'>
                    <li>
                        <a href="">Login</a>
                    </li>
                    <li>
                        <a href="">Register</a>
                    </li>
                </ul>
            </nav>

        </header>
    )
}