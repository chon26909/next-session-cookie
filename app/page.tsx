import React from 'react';
import { getSession } from '../action';

const HomePage = async () => {
    const session = await getSession();

    return (
        <div className=''>
            <h1>HomePage</h1>
            {session.isLoggedIn && (
                <div>
                    <h2>Welcome {session.username}</h2>
                </div>
            )}
        </div>
    );
};

export default HomePage;
