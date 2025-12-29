import clsx from "clsx"
import { motion } from "framer-motion"

// import WindowWrapper from "#hoc/WindowWrapper"
import useWindowStore from "#store/window"
import { locations } from "#constants"

const projects = locations.work?.children ?? [];
import useLocationStore from "#store/location"

const Home = () => {
    
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();    
    
    const handleOpenProject = (project) => {
        openWindow("finder");
        setActiveLocation(project);
    }
    

  return (
    <section id="home">
        <ul>
            {projects.map((project) => (
                <motion.li 
                    whileTap={{ scale: 0.94 }}
                    drag
                    key={project.id} 
                    className={clsx("group folder")}
                    onClick={() => handleOpenProject(project)}
                >
                    <img src="/images/folder.png" alt={project.name} />
                    <p>{project.name}</p>
                </motion.li>
            ))}
        </ul>
    </section>
  )
}


export default Home