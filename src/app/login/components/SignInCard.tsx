import { useState } from 'react';

interface Props {
    signInHandler?: (signInEmail: string, signInPassword: string) => void
}

const className: Map<string, string> = new Map();
className.set('form', 'flex flex-col items-center justify-center w-full h-full py-[50px]');
className.set('form-input', 'w-[350px] h-[40px] pl-[15px] text-[13px] my-[4px] outline-none border-none rounded-[8px] tracking-[0.15px] bg-[#ecf0f3] transition-all duration-[250ms] ease-linear shadow-login-input-shadow');
className.set('title', 'text-[34px] font-[700] leading-[3] text-[#181818] tracking-[10px] text-center');
className.set('form-link', 'text-[#181818] text-[15px] mt-[25px] border-solid border-b-[1px] border-[#a0a5a8] leading-[2]');
className.set('button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none hover:scale-[0.9] active:shadow-login-switch-botton-active focus:shadow-login-switch-botton-active');

export function SignInCard(props: Props) {
    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');
    
    return (
        <main className={className.get('form')}>
            <h2 className={className.get('title')}>登入账号</h2>
            <input type='text' className={className.get('form-input')} placeholder='Email' value={signInEmail} onChange={(e) => { setSignInEmail(e.target.value) }} />
            <input type='password' className={className.get('form-input')} placeholder='Password' value={signInPassword} onChange={(e) => { setSignInPassword(e.target.value) }} />
            <a href='' className={className.get('form-link')}></a>
            <button className={className.get('button')} onClick={(e) => { props.signInHandler?.(signInEmail, signInPassword) }}>SIGN IN</button>
        </main>
    )
}