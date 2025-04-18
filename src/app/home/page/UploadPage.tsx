import Table from "../components/Table";
import serverAccess from '../../../api/ServerAccess';
import { useEffect, useState } from "react";
import { ChildInfo } from "@/entity/ChildEntity";
import Button from '../components/Button';
import { UploadData } from '../../../entity/NetWorkEntity';

export default function UploadPage() {
    const [data, setData] = useState<Array<ChildInfo>>([])
    async function getUploadExceptionChildInfo() {
        const result: Array<ChildInfo> = await serverAccess.getUploadExceptionChildInfo();
        setData(result);
        console.log(result);

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
            <Button text="获取异常状态名单" clickHandler={getUploadExceptionChildInfo} />
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
                        <td className="border-[1px] border-[#fff000] p-[5px]"> <Button text="手动处理完毕" clickHandler={() => modifyChildUploadStatusSuccess(d.inspectInfos![0].id)} /> </td>
                    </tr>
                ))
                }
            </table>
        </main>
    )
}
