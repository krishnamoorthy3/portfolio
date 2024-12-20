import "./App.css"
import Navbar from "./components/Navbar"
import Homepage from "./Homepage"
import Projects from "./Projects"
import Conatct from "./Contact"
import Footer from "./Footer"
import About from "./About"
import { Routes,Route } from "react-router-dom"
import { GoDownload } from "react-icons/go";
const App=()=>{
  const itemcontcom=[
          {h:["h2","Are You Ready to kickstart your project with a touch of magic?"]},
          {p:"Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work."},
          {button:{
              icon:<GoDownload/>,
              href:"/Contact",
              title:"Let's Talk",
          }}
    ]
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage itemcontcom={itemcontcom}/>}/>
        <Route path="/Projects" element={<Projects itemcontcom={itemcontcom}/>}/>
        <Route path="/Contact" element={<Conatct itemcontcom={itemcontcom}/>}/>
        <Route path="/About" element={<About itemcontcom={itemcontcom}/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App