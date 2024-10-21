import Link from 'next/link';
import Logout from './Logout';
import { getSession } from '@/action';

const Navbar = async () => {
    const session = await getSession();
    console.log('session: ', session);

    return (
        <header className='bg-orange-500 '>
            <div className='container flex justify-between items-center'>
                <nav className='flex justify-start mx-auto p-4 gap-10'>
                    <Link href='/'>Homepage</Link>
                    <Link href='/premium'>Premium</Link>
                    <Link href='/profile'>Profile</Link>
                </nav>
                <div>
                    {!session.isLoggedIn && <Link href='/login'>Login</Link>}
                    {session.isLoggedIn && <Logout />}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
