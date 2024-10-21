import { changePremium, getSession } from '@/action';
import React from 'react';

const ProfilePage = async () => {
    const session = await getSession();

    return (
        <div>
            <h1>Welcome, {session.username}</h1>
            <div>You are a {session.isPro ? 'Premium' : 'Free'} User</div>
            <div>
                <form action={changePremium}>
                    <button type='submit'>
                        {session.isPro ? 'Cancel' : 'Buy'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfilePage;
