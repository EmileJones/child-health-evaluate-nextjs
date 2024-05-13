import { ChangeEvent, useState } from "react";

interface Props {
    data?: Array<Array<string | undefined>>,
    title: Array<string | undefined>,
    dataChange?: (rowIndex: number, colIndex: number, modifiedValue: string | undefined, originValue: string | undefined) => void,
    canChange: boolean
}

export default function Table(props: Props) {
    if (props.data !== undefined)
        for (const row of props.data) {
            if (props.title.length !== row.length)
                throw new Error("Data length is not equals title length")
        }

    const clazz: Map<string, string> = new Map();

    clazz.set('common-col', 'border-[#7ABCEB] h-[30px] border-[1px] text-[#1C4698] p-[5px]');
    clazz.set('even-row', 'bg-[#E7EBEE]')
    clazz.set('odd-row', 'bg-[#FFFFFF]')
    clazz.set('top-left-cell', 'rounded-tl-[10px]');
    clazz.set('top-right-cell', 'rounded-tr-[10px]');
    clazz.set('bottom-left-cell', 'rounded-bl-[10px]');
    clazz.set('bottom-right-cell', 'rounded-br-[10px]');

    function TdInput(p: { rowIndex: number, colIndex: number, value: string | undefined }) {
        const originValue: string | undefined = p.value
        const [v, setV] = useState<string | undefined>(p.value)
        const [modified, setModified] = useState<boolean>(false)

        function inputChangeHandler(e: ChangeEvent<HTMLInputElement>) {
            let modifiedValue: string | undefined = e.target.value.trim();
            if (modifiedValue === "")
                modifiedValue = undefined;
            setV(modifiedValue);
            props.dataChange?.(p.rowIndex, p.colIndex, modifiedValue, originValue);
            setModified(originValue === modifiedValue ? false : true);
        }

        return <input value={v}
            onChange={inputChangeHandler}
            className={modified ? "bg-transparent outline-none text-red-500" : "bg-transparent outline-none"} />
    }

    return (
        <main className="w-full h-full relative overflow-scroll scroll-p-[10px] flex flex-col items-center justify-center">
            <table className="w-full absolute left-0 border-spacing-0 table-auto border-separate">
                <thead>
                    <tr>
                        {
                            props.title.map((v, i, a) => {
                                if (i === 0)
                                    return <th className={`${clazz.get('common-col')} ${clazz.get('top-left-cell')} ${clazz.get('even-row')}`} key={'title-cell' + i}>{v}</th>
                                if (i === a.length - 1)
                                    return <th className={`${clazz.get('common-col')} ${clazz.get('top-right-cell')} ${clazz.get('even-row')}`} key={'title-cell' + i}>{v}</th>
                                return <th className={`${clazz.get('common-col')} ${clazz.get('even-row')}`} key={'title-cell' + i}>{v}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data?.map((rv, ri, ra) => {
                            const tds = rv.map((cv, ci, ca) => {
                                const tdClassName: Array<string> = [clazz.get('common-col')!, "hover:bg-[#ABCDE7] hover:text-[#000000]"]
                                if (ri === ra.length - 1 && ci === 0)
                                    tdClassName.push(clazz.get('bottom-left-cell')!)
                                if (ri === ra.length - 1 && ci === ca.length - 1)
                                    tdClassName.push(clazz.get('bottom-right-cell')!)
                                if (ri % 2 === 1)
                                    tdClassName.push(clazz.get('even-row')!)
                                else
                                    tdClassName.push(clazz.get('odd-row')!)
                                return <td className={tdClassName.join(" ")} key={'cell' + ci}>
                                    {props.canChange ? <TdInput rowIndex={ri} colIndex={ci} value={cv} /> : cv}
                                </td>
                            })
                            return <tr key={'row' + ri}>{tds}</tr>
                        })
                    }
                </tbody>
            </table>
        </main>
    )
}