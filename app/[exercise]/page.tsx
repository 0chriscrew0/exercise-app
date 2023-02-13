type ExerciseDetailProps = {
    params: {
        exercise: string
    }
}

export default async function ExerciseDetail({ params }: ExerciseDetailProps) {
    const { exercise } = params;
    const options = {
        method: 'GET',
        headers: { 'x-api-key': `${process.env.API_KEY}` }
      }
      const data = await fetch(`https://api.api-ninjas.com/v1/exercises?name=${exercise}`, options)
      const res = await data.json();
      const e = res[0];
    return (
        <div>
            <h1>{`Name: ${e.name}`}</h1>
            <p>{`Type: ${e.type}`}</p>
            <p>{`Muscle: ${e.muscle}`}</p>
            <p>{`Equipment: ${e.equipment}`}</p>
            <p>{`Difficulty: ${e.difficulty}`}</p>
            <p>{`Instructions: ${e.instructions}`}</p>
        </div>
    )
}