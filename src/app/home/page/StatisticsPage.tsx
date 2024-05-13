import { useState } from "react";
import Button from "../components/Button";
import serverAccess from "@/api/ServerAccess";
import DownloadFileUtils from "@/util/DowloadFileUtils";
export default function StatisticsPage() {
    const [year, setYear] = useState<number | undefined>(new Date().getFullYear());
    async function clickButtonHandler() {
        if (year === undefined) {
            alert("请输入年份")
            return;
        }
        try {
            const res: string = await serverAccess.getStatisticsFile(year)
            DownloadFileUtils.dowloadFile(res, `${year}年统计结果.xlsx`)
        } catch (e) {
            alert(e);
        }
    }
    return (
        <main className="w-full h-full flex flex-col justify-center items-center">
            {/* 输入框 */}
            <div className="h-[40px] w-full flex items-center justify-center">
                <div className="relative w-[320px] h-[40px] text-[13px] my-[4px] outline-none border-none rounded-[20px] flex">
                    <div className="absolute h-full w-[80px] rounded-[20px] text-[13px] flex items-center justify-center bg-[#BAD9F4]">
                        <span className="text-[#2A405A] text-[15px]">年份</span>
                    </div>
                    <input type="number" value={year} onChange={(e) => { setYear(e.target.valueAsNumber) }} className="pl-[95px] w-full h-full text-[13px] rounded-[20px] outline-none border-none rounded-r-[20px] tracking-[0.15px] bg-[#ecf0f3] shadow-login-input-shadow" />
                </div>
                <div className="ml-[20px] w-[100px] h-[40px]">
                    <Button text="获取统计数据" clickHandler={clickButtonHandler} />
                </div>
            </div>
        </main>
    );
}
