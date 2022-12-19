import LoadItem from "../LoadItem/LoadItem"


export default function LoadList({loadItems}) {
const loads = loadItems.map(load => 
    <LoadItem 
        key={load._id}
        loadItem = {load}
/>
)
    return (
        <>
        {loads}
        </>
    )
}