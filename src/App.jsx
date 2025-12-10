import { Navbar, Welcome, Dock } from "#components"
import { Safari, Terminal } from "#windows";

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
    </main>
  )
}

export default App
