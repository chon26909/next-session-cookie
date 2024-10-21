'use server';

import { getIronSession } from 'iron-session';
import { defaultSession, SessionData, sessionOptions } from '@/model';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export const getSession = async () => {
    'use server';
    const session = await getIronSession<SessionData>(
        cookies(),
        sessionOptions
    );

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    }

    return session;
};

let user = {
    username: 'chon',
    password: '1234',
    isPro: false
};

export const login = async (
    prevState: { error: undefined | string },
    formData: FormData
) => {
    const session = await getSession();
    const formUsername = formData.get('username') as string;
    const formPassword = formData.get('password') as string;

    if (formUsername !== user.username) {
        return { error: 'Invalid username' };
    }

    if (formPassword !== user.password) {
        return { error: 'Invalid password' };
    }

    session.userId = '1';
    session.username = user.username;
    session.isPro = user.isPro;
    session.isLoggedIn = true;

    await session.save();
    redirect('/');
};

export const logout = async () => {
    const session = await getSession();
    session.isLoggedIn = false;
    await session.destroy();
    redirect('/');
};

export const changePremium = async () => {
    const session = await getSession();
    session.isPro = !session.isPro;
    await session.save();
    revalidatePath('/profile');
};
