import { Navbar, Welcome, Dock } from "#components"
import { Safari, Terminal, Resume, Finder, Text } from "#windows";

// import gsap from "gsap";
// import { Draggable } from "gsap/Draggable";
// gsap.registerPlugin(Draggable);

function App() {

  return (
    <main>
      <Navbar/>
      <Welcome />
      <Dock />

      <Safari />
      <Terminal />
      <Resume />
      <Finder />
      <Text />
    </main>
  )
}

export default App
