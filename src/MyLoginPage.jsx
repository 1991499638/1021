// in src/MyLoginPage.js
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';

const MyLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        login({ email, password }).catch(() =>
            notify('Invalid email or password')
        );
    };

    return (
        <form onSubmit={handleSubmit} >
            <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                name="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <div><a href="/register">注册</a></div>
            <button type='submit'>登录</button>
        </form>
    );
};

export default MyLoginPage;