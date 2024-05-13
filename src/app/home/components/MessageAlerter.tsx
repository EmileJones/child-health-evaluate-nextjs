interface Props {
    status: string,
    title: string,
    content?: Array<string>
}

export default function MessageAlerter(props: Props) {
    let imageUrl: string = "/warn.svg";
    if (props.status === "success") {
        imageUrl = "/success.svg";
    } else if (props.status === "warn") {
        imageUrl = "/warn.svg";
    }
    return (
        <div className="w-full h-full flex items-center justify-center transform duration-1000 ">
            {/* 图标 */}
            <div className="w-[280px] h-full flex justify-center items-center transform duration-1000 ">
                <div className="flex flex-col items-center justify-center">
                    <div style={{ backgroundImage: `url(${imageUrl})` }} className="h-[150px] w-[150px] rounded-full bg-cover"></div>
                    <div className="text-[33px] flex justify-center items-center">
                        <span>{props.title}</span>
                    </div>
                </div>
            </div>
            {/* message */}
            <div style={{ flexGrow: props.content === undefined ? 0 : 1, height: props.content === undefined ? "0px" : "100%", borderWidth: props.content === undefined ? "0px" : "5px" }}
                className="flex items-center justify-center border-[5px] border-[#fafafa] rounded-[30px] p-[10px] transform duration-1000 ">
                <ol className="w-full h-full text-[#3a7caf] overflow-auto">
                    {props.content?.map((content, index) => (<li className="text-[20px]" key={index + content}>{`${index + 1}. ${content}`}</li>))}
                </ol>
            </div>
            {/* 右间隔 */}
            <div className="w-[50px]"></div>
        </div>
    );
}