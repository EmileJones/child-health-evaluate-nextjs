interface Props {
    clickHandler?: () => void,
    text: string
}

export default function Button(props: Props) {
    return <button onClick={props.clickHandler} className="w-full h-full bg-[#BAD9F4] text-[#2A405A] text-[15px] rounded-full hover:bg-[#76a6d4] active:shadow-lg">{props.text}</button>
}