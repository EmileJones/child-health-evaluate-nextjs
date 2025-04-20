import Table from "../components/Table";
import serverAccess from '../../../api/ServerAccess';
import { useEffect, useState } from "react";
import { ChildInfo, UploadStatus } from "@/entity/ChildEntity";
import Button from "../components/Button";
import { UploadData } from "@/entity/NetWorkEntity";
import { tree } from "next/dist/build/templates/app-page";
import { log } from "console";

export default function UploadPage() {
    const [data, setData] = useState<Array<ChildInfo>>([])
    async function getUploadExceptionChildInfo() {
        const result: Array<ChildInfo> = await serverAccess.getUploadExceptionChildInfo();
        setData(result);
        console.log(result);
    }

    function convertChildInfoToUploadStatus(childInfo: ChildInfo, status: number, needUpload: boolean, message: string): UploadData {
        
        const uploadStatus: UploadStatus = {
            inspectId: childInfo.inspectInfos![0].id,
            status: status,
            needUpload: needUpload,
            message: message
        }

        const uploadData: UploadData = {
            limit: 0,
            uploadStatus: [uploadStatus]
        }

        return uploadData
    }

    function recordChildIntoSuccess(childId: number) {
        const index = data.findIndex(datum => datum.id === childId)
        const uploadData = convertChildInfoToUploadStatus(data[index], 2, false, "用户手动录入");
        serverAccess.updateUploadStatus(uploadData);
        const newData = data.filter(datum => datum.id !== childId)
        setData(newData)
    }

    function recordChildIntoReupload(childId: number) {
        const index = data.findIndex(datum => datum.id === childId)
        const uploadData = convertChildInfoToUploadStatus(data[index], 0, true, "用户指定重新上传");
        serverAccess.updateUploadStatus(uploadData);
        const newData = data.filter(datum => datum.id !== childId)
        setData(newData)
    }
    async function modifyChildUploadStatusSuccess(inspectId: string) {
        const selectChild: ChildInfo = data.find(childInfo => { childInfo.inspectInfos![0].id === inspectId })!;
        const uploadData: UploadData = {
            limit: 0,
            uploadStatus: [{
                inspectId: selectChild.inspectInfos![0].id,
                status: 2,
                needUpload: false,
                message: "手动上传",
                childIdentity: selectChild.identity
            }]
        }
        await serverAccess.updateUploadStatus(uploadData);
        setData(data.filter(d => d.inspectInfos![0].id !== inspectId));
    }
    return (
        <main>
            <Button text="click me!" clickHandler={getUploadExceptionChildInfo}></Button>
            <br />
            <table className="text-[20px]">
                <tr>
                    <th className="border-[1px] border-[#fff000] p-[5px]">身份证</th>
                    <th className="border-[1px] border-[#fff000] p-[5px]">姓名</th>
                    <th className="border-[1px] border-[#fff000] p-[5px]">备注</th>
                    <th className="border-[1px] border-[#fff000] p-[5px]">操作</th>
                </tr>
                {data.map(d => (
                    <tr key={d.identity}>
                        <td className="border-[1px] border-[#fff000] p-[5px]"> {d.identity}</td>
                        <td className="border-[1px] border-[#fff000] p-[5px]"> {d.name}</td>
                        <td className="border-[1px] border-[#fff000] p-[5px]"> {d.inspectInfos?.[0].uploadStatus?.message}</td>
                        <td className="border-[1px] border-[#fff000] p-[5px]">
                            <span>
                                <Button text="手动记录为录入成功" clickHandler={() => recordChildIntoSuccess(d.id)}></Button>
                                <Button text="记录为需要重新上传" clickHandler={() => recordChildIntoReupload(d.id)}></Button>
                            </span>
                        </td>
                    </tr>
                ))
                }
            </table>
        </main>
    )
}
