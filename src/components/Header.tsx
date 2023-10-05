import { Link } from 'react-router-dom'

import EcoSystemLogoBlack from '@/assets/eco-system-black-logo.svg'

export default function Header() {

    const navItems = [
        {
            value: "Seja um parceiro",
            path: "/parceiro",
        },
        {
            value: "Quem somos",
            path: "/sobre",
        },
        {
            value: "Cadastro",
            path: "/cadastro",
        },
    ]

    return (
        <nav className='flex items-center justify-between min-w-full px-28 py-3 bg-[#F1F1F1] shadow-lg'>
            <img src={EcoSystemLogoBlack} alt="Logo da EcoSystem com texto em preto" />
            <div className='flex gap-6 font-mono text-sm'>
                <ul className='flex items-center gap-6'>
                    {navItems.map((item) => (
                        <li key={item.path} className="
                            relative
                            before:content-['']
                            before:w-0
                            before:h-0.5
                            before:absolute
                            before:bg-gradient-to-r from-moss-green-200 to-moss-green-500
                            before:top-full
                            before:transition-all
                            before:ease-in-out
                            before:duration-500
                            hover:before:w-full
                        ">
                            <Link to={item.path}>{item.value}</Link>
                        </li>
                    ))}
                </ul>
                <Link to={'login'}>
                    <button className='px-6 py-2 bg-moss-green-500 rounded-md text-zinc-50 hover:bg-moss-green-800 relative transition-all duration-500 ease-out'>Login</button>
                </Link>
            </div>
        </nav>
    )
}