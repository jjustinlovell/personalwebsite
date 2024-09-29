import GridBackGround from "../components/GridBackGround";
import Name from "../components/Name";
import Status from "../components/Status";

export default function Main() {
  return (
    <main className="relative w-full font-poppins">
      <GridBackGround />
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 mb-10 pointer-events-none">
        <Name />
        <Status />
      </div>
    </main>
  )
}
