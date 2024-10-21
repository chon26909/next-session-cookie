import { logout } from '@/action';
import React from 'react';

const Logout = () => {
    return (
        <form action={logout}>
            <button type='submit'>Logout</button>
        </form>
    );
};

export default Logout;
