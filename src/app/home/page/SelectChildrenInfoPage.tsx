import Button from '../components/Button';
import Table from '../components/Table';
interface Props {
    data?: Array<Array<string | undefined>>,
    title: Array<string>
}

export default function SelectChildrenInfoPage(props: Props) {
    async function clickHandler() {
        alert("暂未实现此功能");
    }
    return (
        <main className='w-full h-full flex flex-col items-center justify-center overflow-auto'>
            <div className='w-full h-[400px]'>
                <Table canChange={true} data={props.data} title={props.title} dataChange={() => { }}></Table>
            </div>
            <div className='w-full h-[50px] flex items-end justify-end pr-[80px] mt-[30px]'>
                <div className='h-full w-[100px]'>
                    <Button text='更改' clickHandler={clickHandler}></Button>
                </div>
            </div>
        </main>
    )
}