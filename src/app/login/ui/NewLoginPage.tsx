import { SignInCard } from "../components/SignInCard";
import { SignUpCard } from "../components/SignUpCard";
import { SwitchSignUpCard } from "../components/SwitchSignUpCard";
import { SwitchSignInCard } from "../components/SwitchSignInCard";
import { useState, MouseEvent } from "react";

export default function NewLoginPage() {
    const [isLogin, setLogin] = useState(true);
    const [canSwitch, setCanSwitch] = useState(true);
    function swithHandler(e: MouseEvent<HTMLButtonElement>) {
        if (canSwitch) {
            setCanSwitch(false);
            setTimeout(() => {
                setCanSwitch(true);
            }, 500);
            setLogin(!isLogin);
        }
    }
    // #93b5d9
    return (
        <main className="relative w-[1920px] h-[1080px] flex items-center justify-center">
            <div className="absolute w-full h-full top-[300px]">
                <object type="image/svg+xml" data="/wave.svg" id="svg" className="w-full h-full">
                    svg animation
                </object>
            </div>
            <div className={`w-[800px] h-[700px] relative scale-50 sm:scale-[0.65] md:scale-75 lg:scale-100  transition-all duration-[500ms] ease-linear`}>
                <div className={`${isLogin ? "w-[500px] h-[500px] top-[150px] right-[300px] z-0" : "w-[350px] h-[350px] right-[50px] top-[50px] z-20"} bg-[#afcde5] rounded-full shadow-login-circle-card absolute transition-all duration-[500ms]`}>
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                        <SignInCard />
                    </div>
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-0 z-0' : 'opacity-100 z-30'}`}>
                        <SwitchSignInCard switchHandler={swithHandler} canSwitch={true} />
                    </div>
                </div>
                <div className={`${isLogin ? "w-[350px] h-[350px] right-[50px] top-[50px] z-20" : "w-[500px] h-[500px] top-[150px] right-[300px] z-0"} bg-[#d5e1f2] rounded-full shadow-login-circle-card absolute transition-all duration-[500ms]`}>
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-100 z-30' : 'opacity-0 z-0'}`}>
                        <SwitchSignUpCard switchHandler={swithHandler} canSwitch={true} />
                    </div>
                    <div className={`absolute h-full w-full transition-all duration-[500ms] ease-linear ${isLogin ? 'opacity-0 z-0' : 'opacity-100 z-10'}`}>
                        <SignUpCard />
                    </div>

                </div>
            </div>
        </main >
    )
}