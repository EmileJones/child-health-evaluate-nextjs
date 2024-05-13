'use client'

import Link from 'next/link'
import { SignInCard } from "./components/SignInCard";
import { SignUpCard } from "./components/SignUpCard";
import { SwitchSignUpCard } from "./components/SwitchSignUpCard";
import { SwitchSignInCard } from "./components/SwitchSignInCard";
import { useState, MouseEvent, useEffect, useRef } from "react";
import serverAccess from "../../api/ServerAccess";

export default function Page() {
    const [isLogin, setLogin] = useState<boolean>(true);
    const [canSwitch, setCanSwitch] = useState<boolean>(false);
    const switchElement = useRef<any>(null)

    function swithHandler(e: MouseEvent<HTMLButtonElement>) {
        if (canSwitch) {
            setCanSwitch(false);
            setTimeout(() => {
                setCanSwitch(true);
            }, 500);
            setLogin(!isLogin);
        }
    }

    async function signInHandler(username: string, password: string) {
        try {
            await serverAccess.login(username, password);
            switchElement.current?.click();
        } catch (e) {
            alert(e);
        }
    }

    return (
        <main className="relative w-[1920px] h-[1080px] flex items-center justify-center">
            {/* 波浪背景 */}
            <div className="absolute w-full h-full top-[300px]">
                <object type="image/svg+xml" data="/wave.svg" id="svg" className="w-full h-full">
                    svg animation
                </object>
            </div>
            {/* 登录注册主体 */}
            <div className={`w-[800px] h-[700px] relative scale-50 sm:scale-[0.65] md:scale-75 lg:scale-100  transition-all duration-[500ms] ease-linear`}>
                {/* 登录球 */}
                <div className={`${isLogin ? "w-[500px] h-[500px] top-[150px] right-[300px] z-0" : "w-[350px] h-[350px] right-[50px] top-[50px] z-20"} bg-[#afcde5] rounded-full shadow-login-circle-card absolute transition-all duration-[500ms]`}>
                    {/* 登录输入 */}
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <SignInCard signInHandler={signInHandler} />
                    </div>
                    {/* 切换注册 */}
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-0 z-0' : 'opacity-100 z-30'}`}>
                        <SwitchSignInCard switchHandler={swithHandler} canSwitch={false} />
                    </div>
                </div>
                {/* 注册球 */}
                <div className={`${isLogin ? "w-[350px] h-[350px] right-[50px] top-[50px] z-20" : "w-[500px] h-[500px] top-[150px] right-[300px] z-0"} bg-[#d5e1f2] rounded-full shadow-login-circle-card absolute transition-all duration-[500ms]`}>
                    {/* 注册输入 */}
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
                        <SwitchSignUpCard switchHandler={swithHandler} canSwitch={false} />
                    </div>
                    {/* 切换登录 */}
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
                        <SignUpCard />
                    </div>
                </div>
            </div>
            <Link href="/home" className='hidden' ref={switchElement}></Link>
        </main >
    )
}