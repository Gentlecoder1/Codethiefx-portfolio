import { Navbar, Welcome, Dock } from "#components"
import { Safari, Terminal, Resume, Finder, TextViewer, ImageViewer, Contact, Home, Gallery } from "#windows";

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
      <TextViewer />
      <ImageViewer />
      
      <Contact />
      <Gallery />
      <Home />
    </main>
  )
}

export default App
