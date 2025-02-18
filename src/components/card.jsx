export default function Card(props) {
    return (
        <div className="card">
            <h3 className="card-title">{props.isActive ? props.isActive.title : ""}</h3>
            <p>{props.isActive ? props.isActive.description : "Nessun linguaggio selezionato"}</p>
        </div>
    )
}