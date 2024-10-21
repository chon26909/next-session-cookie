'use client';

import { login } from '@/action';
import React from 'react';
import { useFormState } from 'react-dom';

const LoginForm = () => {
    const [formState, formAction] = useFormState<any, FormData>(
        login,
        undefined
    );

    return (
        <div>
            <form action={formAction}>
                <div className='p-5'>
                    {formState?.error && <div>{formState.error}</div>}
                </div>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        defaultValue='chon'
                        required
                    />
                </div>
                <div>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        defaultValue='1234'
                        required
                    />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
