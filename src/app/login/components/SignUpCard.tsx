import { useState } from "react";

interface Props {
    signUpHandler?: (signUpName: string, signUpEmail: string, signUpPassword: string) => void
}

const className: Map<string, string> = new Map();
className.set('form', 'flex flex-col items-center justify-center w-full h-full py-[50px]');
className.set('form-input', 'w-[350px] h-[40px] pl-[15px] text-[13px] my-[4px] outline-none border-none rounded-[8px] tracking-[0.15px] bg-[#ecf0f3] shadow-login-input-shadow');
className.set('title', 'text-[34px] font-[700] leading-[3] text-[#181818] tracking-[10px] text-center');
className.set('form-link', 'text-[#181818] text-[15px] mt-[25px] border-solid border-b-[1px] border-[#a0a5a8] leading-[2]');
className.set('button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none hover:scale-[0.9] active:shadow-login-switch-botton-active focus:shadow-login-switch-botton-active');
className.set('disabled-button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none bg-[#909399] cursor-not-allowed');

export function SignUpCard(props: Props) {
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');
    return (
        <main className={className.get('form')}>
            <h2 className={className.get('title')}>创建账号</h2>
            <input type='text' className={className.get('form-input')} placeholder='Name' value={signUpName} onChange={(e) => { setSignUpName(e.target.value) }} />
            <input type='text' className={className.get('form-input')} placeholder='Email' value={signUpEmail} onChange={(e) => { setSignUpEmail(e.target.value) }} />
            <input type='password' className={className.get('form-input')} placeholder='Password' value={signUpPassword} onChange={(e) => { setSignUpPassword(e.target.value) }} />
            <button className={className.get('button')} onClick={(e) => { props.signUpHandler?.(signUpName, signUpEmail, signUpPassword) }}>SIGN UP</button>
        </main>
    )
}