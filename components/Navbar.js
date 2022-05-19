import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
    const { pathname } = useRouter();

    const navigation = [
        {id: 1, title: 'Home', path: '/'},
        {id: 2, title: 'Posts', path: '/posts'},
        {id: 3, title: 'Contacts', path: '/contacts'},
    ]

    return (
        <nav>
            <div>
                <Image src='/fox.png' width='50px' height='50px' alt='Logo'/>
            </div>
            <div>
                {navigation.map(({id, title, path}) => (
                    <Link key={id} href={path}>
                        <a className={pathname === path ? 'active': null}>{title}</a>
                    </Link>
                ))}
            </div>
        </nav>
    )
};
 
export default Navbar;