'use client';

import { ReactElement, useEffect, useRef, useState } from "react";
import SelectInfoInputer from "./page/SelectInfoInputer";
import AssessPage from "./page/AssessPage";
import PatientsPage from "./page/PatientsPage";
import StatisticsPage from "./page/StatisticsPage";
import UploadPage from "./page/UploadPage";
import serverAccess from "@/api/ServerAccess";
import { ChildInfo } from "@/entity/ChildEntity";
import TableUtils from "@/util/TableUtils";
import { redirect } from 'next/navigation'
import SelectChildrenInfoPage from "./page/SelectChildrenInfoPage";


export default function Page() {
    const version = '1.0.0';
    const [deg, setDeg] = useState(150);
    const mi = 24;
    const [main, setMain] = useState<ReactElement>();
    if (!serverAccess.isLogin())
        redirect("/login")

    async function selectHandler(name: string | null, identity: string | null) {
        if (identity !== null) {
            try {
                const info: ChildInfo | undefined = await serverAccess.getChildInfoByIdentity(identity);
                if (info === undefined)
                    alert("查无此人")
                else
                    setMain(<SelectChildrenInfoPage data={TableUtils.convertChildInfoToStringArray(info)} title={TableUtils.getTitle()} />)
            } catch (e) {
                alert(e)
            }
        } else if (name !== null) {
            try {
                const infos: Array<ChildInfo> = await serverAccess.getChildInfoByName(name);
                if (infos.length === 0)
                    alert("查无此人")
                else{
                    const originData = infos.map(TableUtils.convertChildInfoToStringArray);
                    const data: Array<Array<string | undefined>> = [];
                    for(const d of originData)
                        for(const dd of d)
                            data.push(dd);
                    setMain(<SelectChildrenInfoPage data={data} title={TableUtils.getTitle()} />)
                }
            } catch (e) {
                alert(e)
            }
        } else {
            alert("请输入儿童姓名或者身份证！")
        }
    }

    return (
        <main className="relative h-screen w-full flex justify-center items-center text-[12px] bg-[#e0f1f4]">
            <div className="basis-[25%] h-full flex flex-col justify-center items-center">
                {/* 查询模块 */}
                <div className="basis-[55%] h-full">
                    <SelectInfoInputer selectHandler={selectHandler} />
                </div>
                {/* 菜单模块 */}
                <div onMouseOver={() => { setDeg(54) }} onMouseLeave={() => { setDeg(150) }} className="relative w-full basis-[45%]">
                    {/* 基本信息 */}
                    <div className="absolute bottom-0 left-0 translate-x-[-50%] translate-y-[50%] w-[500px] h-[500px] rounded-full flex justify-center items-center">
                        {/* avator */}
                        <div className="flex justify-center items-center absolute w-[460px] h-[460px] bg-[#76A6D4] rounded-full">
                            <div className="absolute top-[31px] right-[130px] w-[82px] h-[82px] rounded-full overflow-hidden">
                                <div className="h-full w-full bg-top bg-cover bg-[url('/catcat.jpg')] transition duration-1000 rotate-0 hover:rotate-[360deg] "></div>
                            </div>
                            {/* <div className="absolute top-[123px] right-[130px] w-[82px] h-[30px] flex items-center justify-center">
                                <span className="text-[#ffffff] text-[20px] tracking-[10px]">菜单</span>
                            </div> */}
                        </div>
                        {/* 版本信息 */}
                        <div className="absolute left-[50%] bottom-[50%] w-[35%] h-[40px] flex items-center justify-left">
                            <span className="w-[10%]"></span>
                            <span className="text-[16px] text-[#ffffff]">version: {version}</span>
                        </div>
                    </div>
                    {/* menu */}
                    <div className="absolute h-0 w-0 bottom-0 left-0">
                        <li style={{ 'transform': `rotate(${deg}deg)` }} onClick={() => { setMain((<AssessPage />)) }} className={`absolute bottom-[170px] left-[-250px] origin-[250px_250px] rotate-0 rounded-full bg-[#bee1f6] text-[#8F99A6] hover:text-[#013E6E] w-20 h-20 animate-wiggle transition-transform duration-1000 hover:bg-[#76a6d4] active:shadow-lg flex items-center justify-center`}>
                            <span style={{ 'transform': `rotate(-${deg}deg)` }} className="transition-transform duration-1000 text-[18px]">评估</span>
                        </li>
                        <li style={{ 'transform': `rotate(${deg + mi}deg)` }} onClick={() => { setMain((<PatientsPage />)) }} className={`absolute bottom-[170px] left-[-250px] origin-[250px_250px] rotate-0 rounded-full bg-[#bee1f6] text-[#8F99A6] hover:text-[#013E6E] w-20 h-20 transition-transform duration-1000 hover:bg-[#76a6d4] active:shadow-lg flex items-center justify-center`}>
                            <span style={{ 'transform': `rotate(-${deg + mi}deg)` }} className="transition-transform duration-1000 text-[18px]">患病花名</span>
                        </li>
                        <li style={{ 'transform': `rotate(${deg + mi * 2}deg)` }} onClick={() => { setMain((<StatisticsPage />)) }} className={`absolute bottom-[170px] left-[-250px] origin-[250px_250px] rotate-0 rounded-full bg-[#bee1f6] text-[#8F99A6] hover:text-[#013E6E] w-20 h-20 transition-transform duration-1000 hover:bg-[#76a6d4] active:shadow-lg flex items-center justify-center`}>
                            <span style={{ 'transform': `rotate(-${deg + mi * 2}deg)` }} className="transition-transform duration-1000 text-[18px]">统计数据</span>
                        </li>
                        <li style={{ 'transform': `rotate(${deg + mi * 3}deg)` }} onClick={() => { setMain((<UploadPage />)) }} className={`absolute bottom-[170px] left-[-250px] origin-[250px_250px] rotate-0 rounded-full bg-[#bee1f6] text-[#8F99A6] hover:text-[#013E6E] w-20 h-20 transition-transform duration-1000 hover:bg-[#76a6d4] active:shadow-lg flex items-center justify-center`}>
                            <span style={{ 'transform': `rotate(-${deg + mi * 3}deg)` }} className="transition-transform duration-1000 text-[18px]">上传数据</span>
                        </li>
                    </div>
                </div>
            </div>
            {/* 主体模块 */}
            <div className="h-full basis-[75%] max-w-[75%] flex items-center justify-center overflow-auto">
                {main}
            </div>
        </main>
    )
}