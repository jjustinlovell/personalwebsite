import TypewriterComponent from "typewriter-effect";

export default function TypeWriter() {
  return (
    <TypewriterComponent
      options={{
        strings: ["Frontend Developer", "Student at BINUS"],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
