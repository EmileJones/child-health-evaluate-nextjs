import { ReactElement, useRef, useState } from "react";
import MessageAlerter from "../components/MessageAlerter";
import serverAccess from "@/api/ServerAccess";
import { R } from "@/entity/NetWorkEntity";
import DownloadFileUtils from "@/util/DowloadFileUtils";

export default function AssessPage() {
    const [loading, setLoading] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const fileSelector = useRef<HTMLInputElement | undefined>(null)
    const [showMessage, setShowMessage] = useState<boolean>(false)
    const [alertElement, setAlertElement] = useState<ReactElement | undefined>(undefined)

    function showAlerter(status: string, title: string, content: Array<string> | undefined = undefined) {
        if (showMessage) {
            setShowMessage(false);
            setTimeout(() => {
                setShowMessage(true);
                setAlertElement(<MessageAlerter status={status} title={title} content={content} />)
            }, 300)
        } else {
            setShowMessage(true);
            setAlertElement(<MessageAlerter status={status} title={title} content={content} />)
        }
    }

    async function uploadFileHandler() {
        if (file === null) {
            alert("请选择文件")
        }
        
        setLoading(true)
        const res: R = await serverAccess.assessFile(file as File);
        setLoading(false)

        if (res.code !== 200) {
            const invaildCell = res.result as Array<InvaildCell>;
            showAlerter("warn", res.msg, invaildCell.map(invaildCellToString))
            return;
        } else {
            showAlerter("success", res.msg)
            const fileName = file!.name.split('.')[0] + '评估结果.xlsx';
            DownloadFileUtils.dowloadFile(res.result, fileName)
        }
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-center transform duration-1000 ">
            {/* 输入框 */}
            <div className="h-[40px] w-full flex items-center justify-center">
                <div className="relative mr-[20px] w-[360px] h-full rounded-[20px]">
                    <button onClick={(e) => { fileSelector.current?.click() }} className="absolute h-full w-[80px] rounded-[20px] bg-[#BAD9F4] text-[#2A405A] text-[13px] flex items-center justify-center hover:bg-[#76a6d4] active:shadow-lg">
                        选择文件
                    </button>
                    <input type="text" disabled={true} value={file?.name} className="pl-[90px] w-full h-full text-[13px] rounded-[20px] outline-none border-none rounded-r-[20px] tracking-[0.15px] bg-[#ecf0f3] shadow-login-input-shadow" />
                    <div style={{ visibility: loading ? "visible" : "hidden" }} className="absolute right-[10px] top-[7px] w-[26px] h-[26px] rounded-full bg-cover bg-[url('/loading.svg')]">
                    </div>
                    <input onChange={e => { setFile(e.target.files?.item(0) || null) }} className="hidden" type="file" ref={fileSelector as React.LegacyRef<HTMLInputElement>}></input>
                </div>
                <button onClick={uploadFileHandler} className="w-[90px] h-[40px] bg-[#BAD9F4] text-[#2A405A] text-[15px] rounded-full hover:bg-[#76a6d4] active:shadow-lg">评估</button>
            </div>
            {/* 消息提示框 */}
            <div style={{ height: showMessage ? '400px' : '0' }} className="mt-[50px] w-full transform duration-300 overflow-hidden">
                {alertElement}
            </div>
        </div>
    );
}

interface InvaildCell {
    sheetName: string,
    rowIndex: number,
    colIndex: number | undefined,
    message: string
}

function invaildCellToString(invaildCell: InvaildCell): string {
    if (invaildCell.colIndex !== undefined)
        return `[${invaildCell.sheetName}] 的 [${convertToLetters(invaildCell.colIndex + 1)}${invaildCell.rowIndex + 1}] 单元格错误，${invaildCell.message}`
    else
        return `[${invaildCell.sheetName}] 的 [${invaildCell.rowIndex + 1}] 行错误，${invaildCell.message}`
}

function convertToLetters(number: number) {
    let result = '';
    while (number > 0) {
        let remainder = (number - 1) % 26; // 余数范围：0-25
        result = String.fromCharCode(65 + remainder) + result; // 65 是 'A' 的 ASCII 码
        number = Math.floor((number - 1) / 26); // 更新数字
    }
    return result;
}