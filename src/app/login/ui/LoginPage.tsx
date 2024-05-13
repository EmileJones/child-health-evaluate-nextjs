'use client'
import { useState } from 'react';

export enum InitStatus {
    SIGN_UP, SIGN_IN
}

interface Props {
    canSignUp: boolean,
    signUpHandler?: (name: string, email: string, password: string) => void,
    signInHandler?: (email: string, password: string) => void,
    initStatus?: InitStatus
}

const className: Map<string, string> = new Map();
className.set('login-box', 'relative min-w-[1000px] w-[1000px] min-h-[600px] h-[600px] p-[25px] bg-[#ecf0f3] rounded-[12px] overflow-hidden shadow-login-box   sm:scale-[0.4]  md:scale-[0.5] lg:scale-[0.7] xl:scale-[1]');
className.set('container', 'flex justify-center items-center absolute top-0 w-[600px] h-full p-[25px] bg-[#ecf0f3] transition-all duration-[500ms] ease-linear');
className.set('form', 'flex flex-col items-center justify-center w-full h-full py-[50px] absolute');
className.set('form-input', 'w-[350px] h-[40px] pl-[15px] text-[13px] my-[4px] outline-none border-none rounded-[8px] tracking-[0.15px] bg-[#ecf0f3] transition-all duration-[250ms] ease-linear shadow-login-input-shadow');
className.set('title', 'text-[34px] font-[700] leading-[3] text-[#181818] tracking-[10px] text-center');
className.set('description', 'text-[14px] tracking-[0.25px] leading-[1.6] text-center');
className.set('form-span', 'mt-[30px] mb-[12px]');
className.set('form-link', 'text-[#181818] text-[15px] mt-[25px] border-solid border-b-[1px] border-[#a0a5a8] leading-[2]');
className.set('button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none  hover:shadow-login-botton-hover hover:scale-[0.985] active:shadow-login-switch-botton-active focus:shadow-login-switch-botton-active');
className.set('disabled-button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none bg-[#909399] cursor-not-allowed');
className.set('switch', 'flex flex-col justify-center items-center absolute top-0 h-full w-[400px] p-[50px] z-[200] transition-all duration-[500ms] ease-linear bg-[#ecf0f3] overflow-hidden shadow-login-switch-shadow');
className.set('switch-circle', 'absolute w-[500px] h-[500px] rounded-full bg-[#ecf0f3] bottom-[-60%] left-[-60%] transition-all duration-[500ms] ease-linear shadow-login-switch-circle-shadow')
className.set('switch-circle-t', 'top-[-50%] left-[50%] w-[300px] h-[300px]')
className.set('switch-container', 'flex flex-col items-centerjustify-center absolute w-[400px] py-[50px] px-[55px] transition-all duration-[500ms] ease-linear')
className.set('switch-title', 'tracking-normal');

export default function LoginPage(props: Props) {
    const [isLogin, setLogin] = useState(props.initStatus ? (props.initStatus === InitStatus.SIGN_IN ? true : false) : true);
    const [canSwitch, setCanSwitch] = useState(props.canSignUp);
    const [signUpName, setSignUpName] = useState('');
    const [signUpEmail, setSignUpEmail] = useState('');
    const [signUpPassword, setSignUpPassword] = useState('');

    const [signInEmail, setSignInEmail] = useState('');
    const [signInPassword, setSignInPassword] = useState('');

    function switchHandler(): void {
        if (canSwitch) {
            setCanSwitch(false);
            setTimeout(() => { setCanSwitch(true); }, 500);
            setLogin(!isLogin);
        }
    }

    return (
        <div className={className.get('login-box')} id='form-card'>
            {/** 登录注册卡片 */}
            <div style={{ 'left': isLogin ? '0' : 'calc(100% - 600px)' }} className={className.get('container')}>
                <form style={{ 'zIndex': isLogin ? 0 : 200, 'opacity': isLogin ? 0 : 1 }} className={className.get('form')}>
                    <h2 className={className.get('title')}>创建账号</h2>
                    <input type='text' className={className.get('form-input')} placeholder='Name' value={signUpName} onChange={(e) => { setSignUpName(e.target.value) }} />
                    <input type='text' className={className.get('form-input')} placeholder='Email' value={signUpEmail} onChange={(e) => { setSignUpEmail(e.target.value) }} />
                    <input type='password' className={className.get('form-input')} placeholder='Password' value={signUpPassword} onChange={(e) => { setSignUpPassword(e.target.value) }} />
                    <button className={className.get('button')} onClick={(e) => { props.signUpHandler?.(signUpName, signInEmail, signInPassword) }}>SIGN UP</button>
                </form>
                <form style={{ 'zIndex': 100, 'opacity': isLogin ? 1 : 0 }} className={className.get('form')}>
                    <h2 className={className.get('title')}>登入账号</h2>
                    <input type='text' className={className.get('form-input')} placeholder='Email' value={signInEmail} onChange={(e) => { setSignInEmail(e.target.value) }} />
                    <input type='password' className={className.get('form-input')} placeholder='Password' value={signInPassword} onChange={(e) => { setSignInPassword(e.target.value) }} />
                    <a href='' className={className.get('form-link')}></a>
                    <button className={className.get('button')} onClick={(e) => { props.signInHandler?.(signInEmail, signInPassword) }}>SIGN IN</button>
                </form>
            </div>
            {/** 切换登录注册卡片 */}
            <div className={className.get('switch')} style={{ 'left': isLogin ? 'calc(100% - 400px)' : '0' }} id='switch-card'>
                <div className={className.get('switch-circle')}></div>
                <div className={`${className.get('switch-circle')} ${className.get('switch-circle-t')}`}></div>

                <div style={{ 'opacity': isLogin ? '0' : '1', 'zIndex': 100 }} className={className.get('switch-container')} id='switch-c1'>
                    <h2 className={`${className.get('title')} ${className.get('switch-title')}`}>Welcome Back！</h2>
                    <p className={`${className.get('switch-description')} ${className.get('description')}`}>已经有账号了嘛，去登入账号来进入奇妙世界吧！！！</p>
                    <button className={props.canSignUp ? className.get('button') : className.get('disabled-button')} onClick={switchHandler}>SIGN IN</button>
                </div>

                <div style={{ 'opacity': isLogin ? '1' : '0', 'zIndex': isLogin ? 200 : 0 }} className={className.get('switch-container')} id='switch-c2'>
                    <h2 className={`${className.get('title')} ${className.get('switch-title')}`}>Hello Friend！</h2>
                    <p className={`${className.get('switch-description')} ${className.get('description')}`}>{props.canSignUp ? "去注册一个账号，让我们踏入奇妙的旅途！" : "该系统不允许注册哦，向管理员申请一个账号吧！"}</p>
                    <button className={props.canSignUp ? className.get('button') : className.get('disabled-button')} onClick={switchHandler}>SIGN UP</button>
                </div>
            </div>
        </div>
    );
}




