import Exercise from "./Exercise";

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
      <div className="grid gap-16 grid-cols-fluid">
      {res.map(({ name, difficulty, type, muscle }, i) => (
        <Exercise key={i} name={name} difficulty={difficulty} type={type} muscle={muscle} />
      ))}
      </div>
    </main>
  )
}
