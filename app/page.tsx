import React from "react";
import Exercise, { ExerciseProps } from "./Exercise";
import Filters from "./Filters";

export default async function Home() {
  const muscle = 'abs'
  const type = null;
  const difficulty = 'beginner'
  const options = {
    method: 'GET',
    headers: { 'x-api-key': `${process.env.API_KEY}` }
  }

  const data = await fetch(`https://api.api-ninjas.com/v1/exercises?type=${type}&muscle=${muscle}&difficulty=${difficulty}`, options)
  const res = await data.json();
  console.log(res)

  return (
    <main>
      < Filters />
      <div className="grid gap-16 grid-cols-fluid">
      {res.map(({ name, difficulty, type, muscle }: ExerciseProps, i: number) => (
        <Exercise key={i} name={name} difficulty={difficulty} type={type} muscle={muscle} />
      ))}
      </div>
    </main>
  )
}
