import { MouseEvent } from "react";
interface Props {
    switchHandler?: (a: MouseEvent<HTMLButtonElement>) => void,
    canSwitch: boolean
}

const className: Map<string, string> = new Map();
className.set('title', 'text-[34px] font-[700] leading-[3] text-[#181818] tracking-[10px] text-center');
className.set('description', 'text-[14px] tracking-[0.25px] leading-[1.6] text-center');
className.set('button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none hover:scale-[0.9] active:shadow-login-switch-botton-active focus:shadow-login-switch-botton-active');
className.set('disabled-button', 'w-[180px] h-[50px] rounded-[25px] mt-[50px] font-[700] text-[14px] tracking-[1.15px] bg-[#4b70e2] text-[#f9f9f9] shadow-login-button-shadow border-none outline-none bg-[#909399] cursor-not-allowed');
className.set('switch', 'flex flex-col justify-center items-center absolute top-0 h-full w-[400px] p-[50px] z-[200] transition-all duration-[500ms] ease-linear bg-[#ecf0f3] overflow-hidden shadow-login-switch-shadow');
className.set('switch-container', 'flex flex-col justify-center items-center w-full h-full py-[50px] px-[55px]')
className.set('switch-title', 'tracking-normal');

export function SwitchSignUpCard(props: Props) {

    return (
        <main className={className.get('switch-container')}>
            <h2 className={`${className.get('title')} ${className.get('switch-title')}`}>Hi Friend！</h2>
            <p className={className.get('description')}>{props.canSwitch ? "去注册一个账号，让我们踏入奇妙的旅途！" : "该系统不允许注册哦，向管理员申请一个账号吧！"}</p>
            <button className={props.canSwitch ? className.get('button') : className.get('disabled-button')} onClick={props.canSwitch ? props.switchHandler : (e) => { }}>SIGN UP</button>
        </main >
    )
}