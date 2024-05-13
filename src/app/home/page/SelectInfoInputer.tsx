import { useState } from "react"

interface Props {
    selectHandler?: (name: string | null, identity: string | null) => void
}

export default function SelectInfoInputer(props: Props) {
    const [name, setName] = useState<string | null>(null);
    const [identity, setIdentity] = useState<string | null>(null);

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <span className="text-[34px] font-[700] leading-[3] text-[#26587e] tracking-[10px] text-center">
                查询数据
            </span>
            <div className="relative w-[320px] h-[40px] text-[13px] my-[4px] outline-none border-none rounded-[20px] flex">
                <div className="absolute h-full w-[80px] rounded-[20px] text-[13px] flex items-center justify-center bg-[#BAD9F4]">
                    <span className="text-[#2A405A] text-[15px]">姓名</span>
                </div>
                <input type="text" value={name || ""} onChange={(e) => { setName(e.target.value === "" ? null : e.target.value) }} className="w-full h-full pl-[95px] text-[13px] rounded-[20px] outline-none border-none rounded-r-[20px] tracking-[0.15px] bg-[#ecf0f3] shadow-login-input-shadow"></input>
            </div>
            <div className="relative w-[320px] h-[40px] text-[13px] my-[4px] outline-none border-none rounded-[20px] flex">
                <div className="absolute h-full w-[80px] rounded-[20px] text-[13px] basis-[20%] flex items-center justify-center bg-[#BAD9F4]">
                    <span className="text-[#2A405A] text-[15px]">身份证</span>
                </div>
                <input type="text" value={identity || ""} onChange={(e) => { setIdentity(e.target.value === "" ? null : e.target.value) }} className="h-full w-full pl-[95px] rounded-[20px] text-[13px] outline-none border-none rounded-l-[20px] tracking-[0.15px] bg-[#ecf0f3] shadow-login-input-shadow"></input>
            </div>
            <div className="w-[320px] h-[40px] flex justify-end mt-[40px]">
                <button onClick={() => { props.selectHandler?.(name, identity) }} className="w-[30%] h-full bg-[#BAD9F4] text-[#2A405A] text-[15px] rounded-full hover:bg-[#76a6d4] active:shadow-lg">查询</button>
            </div>
        </div>
    )
}