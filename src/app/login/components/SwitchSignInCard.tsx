import { MouseEvent } from "react";

interface Props {
    switchHandler?: (a: MouseEvent<HTMLButtonElement>) => void,
    canSwitch: boolean
}

const className: Map<string, string> = new Map();
className.set('title', 'text-[30px] font-[700] leading-[1.75] text-[#181818] tracking-[10px] text-center');
className.set('description', 'text-[14px] tracking-[0.25px] leading-[1.6] text-center');
className.set('button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none hover:scale-[0.9] active:shadow-login-switch-botton-active focus:shadow-login-switch-botton-active');
className.set('disabled-button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none bg-[#909399] cursor-not-allowed');
className.set('switch', 'flex flex-col justify-center items-center absolute top-0 h-full w-[400px] p-[50px] z-[200] transition-all duration-[500ms] ease-linear bg-[#ecf0f3] overflow-hidden shadow-login-switch-shadow');
className.set('switch-container', 'flex flex-col justify-center items-center w-full h-full py-[50px] px-[55px]')
className.set('switch-title', 'tracking-normal');

export function SwitchSignInCard(props: Props = {canSwitch: true}) {
    return (
        <main className={className.get('switch-container')} id='switch-c1'>
            <h2 className={`${className.get('title')} ${className.get('switch-title')}`}>Welcome Back！</h2>
            <p className={`${className.get('switch-description')} ${className.get('description')}`}>已经有账号了嘛，去登入账号来进入奇妙世界吧！！！</p>
            <button className={props.canSwitch ? className.get('button'): className.get('disabled-button')} onClick={props.switchHandler}>SIGN IN</button>
        </main>
    )
}