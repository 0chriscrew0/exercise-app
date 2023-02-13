import Exercise, { ExerciseProps } from "./Exercise";

export default async function Home() {
  const muscle = 'chest'
  const options = {
    method: 'GET',
    headers: { 'x-api-key': `${process.env.API_KEY}` }
  }
  const data = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, options)
  const res = await data.json();
  console.log(res)

  return (
    <main>
      <div className="filters">
        <select name="type" id="type">
          <option value="cardio">Cardio</option>
          <option value="olympic_weightlifting">Olympic Weightlifting</option>
          <option value="plyometrics">Plyometrics</option>
          <option value="powerlifting">Powerlifting</option>
          <option value="strength">Strength</option>
          <option value="stretching">Stretching</option>
          <option value="strongman">Strongman</option>
        </select>
        <select name="muscle" id="muscle">
          <option value="abdominals">Abs</option>
          <option value="abductors">Abductors</option>
          <option value="adductors">Adductors</option>
          <option value="biceps">Biceps</option>
          <option value="calves">Calves</option>
          <option value="chest">Chest</option>
          <option value="forearms">Forearms</option>
          <option value="glutes">Glutes</option>
          <option value="hamstrings">Hamstrings</option>
          <option value="lats">Lats</option>
          <option value="lower_back">Lower Back</option>
          <option value="middle_back">Middle Back</option>
          <option value="neck">Neck</option>
          <option value="quadriceps">Quadriceps</option>
          <option value="traps">Traps</option>
          <option value="triceps">Triceps</option>
        </select>
        <select name="difficulty" id="difficulty">
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
      </div>
      <div className="grid gap-16 grid-cols-fluid">
      {res.map(({ name, difficulty, type, muscle }: ExerciseProps, i: number) => (
        <Exercise key={i} name={name} difficulty={difficulty} type={type} muscle={muscle} />
      ))}
      </div>
    </main>
  )
}
