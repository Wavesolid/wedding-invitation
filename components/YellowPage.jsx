export default function YellowPage(props)
{
    return (
        <div className={`h-screen bg-[#F2C777] ${ props.className }`}>
            {props.children}
        </div>
    )
}