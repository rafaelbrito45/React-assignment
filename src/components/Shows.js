import Show from "./Show"

const Shows = ({shows,onDelete,onToggle}) => {
    return (
        <div className="row justify-content-start mt-5">
        {shows.map((show)=>(
        <Show 
            key={show.id} 
            show={show} 
            onDelete={onDelete} 
            onToggle={onToggle}
        />))}
        </div>
    )
}

export default Shows
