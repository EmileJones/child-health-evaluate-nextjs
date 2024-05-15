import Table from "../components/Table";
import serverAccess from '../../../api/ServerAccess';
import { useEffect, useState } from "react";
import { ChildInfo } from "@/entity/ChildEntity";

export default function UploadPage() {
    const [data, setData] = useState<Array<ChildInfo>>([])
    async function getUploadExceptionChildInfo() {
        const result: Array<ChildInfo> = await serverAccess.getUploadExceptionChildInfo();
        setData(result);
        console.log(result);

    }
    return (
        <main>
            <button onClick={getUploadExceptionChildInfo}>click me!</button>
            <br />
            <table className="text-[20px]">
                <tr>
                    <th className="border-[1px] border-[#fff000] p-[5px]">身份证</th>
                    <th className="border-[1px] border-[#fff000] p-[5px]">姓名</th>
                    <th className="border-[1px] border-[#fff000] p-[5px]">备注</th>
                </tr>
                {data.map(d => (
                    <tr key={d.identity}>
                        <td className="border-[1px] border-[#fff000] p-[5px]"> {d.identity}</td>
                        <td className="border-[1px] border-[#fff000] p-[5px]"> {d.name}</td>
                        <td className="border-[1px] border-[#fff000] p-[5px]"> {d.inspectInfos?.[0].uploadStatus?.message}</td>
                    </tr>
                ))
                }
            </table>
        </main>
    )
}
