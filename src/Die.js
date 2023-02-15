import clicksound from "./clicksound.mp3"
export default function Die(props) {
    // document.addEventListener("")
    // console.log(props)
    // console.log(props)
    // console.log(props.update)
    // console.log(props.update)

    return (
        <div className=
            {`font-bold ${props.isSelected ? "bg-green" : ""}
        flex items-center justify-center  mb-3 lg:p-3 mx-auto w-14 h-14 shadow-lg hover:shadow-2xl`}
            onClick={props.update}
        >
            <button d>{props.data}</button>
        </div >
    )
}