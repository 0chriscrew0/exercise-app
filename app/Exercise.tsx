import Link from "next/link"

type ExerciseProps = {
    name: string
    difficulty: string
    type: string
    muscle: string
}

export default function Exercise({ name, difficulty, type, muscle }: ExerciseProps) {
    return (
        <div className="mb-5">
            <h1>{name}</h1>
            <p>{difficulty}</p>
            <p>{type}</p>
            <p>{muscle}</p>
            <Link href={`/${name}`}>View Details</Link>
        </div>
    )
}