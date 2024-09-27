import Tile from './Tile'

export default function GridBackGround() {
  return (
    <section className="grid w-full h-screen grid-cols-20 overflow-y-clip">
        {Array.from(Array(20 * 12), (i) => (
          <Tile key={i} />
        ))}
      </section>
  )
}
