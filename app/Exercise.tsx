import Link from "next/link"

export default function Exercise({ name, difficulty, type, muscle }) {
    return (
        <div className="mb-5">
            <h1>{name}</h1>
            <p>{difficulty}</p>
            <p>{type}</p>
            <p>{muscle}</p>
            <Link href={'/about'}>View Details</Link>
        </div>
    )
}