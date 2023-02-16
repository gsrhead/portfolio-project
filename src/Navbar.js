
import { Outlet} from 'react-router-dom'
export default function Navbar(){
return (
<div >
    <ul className="Navbar">
        
   <a href="/"><li>Home</li></a>
  <a href="/about"><li>About</li></a>
    <a href="/projects"><li>Projects</li></a>
          <li><a href="https://www.linkedin.com/in/ioannis-stathopoulos">LinkedIn</a></li>
    </ul>
    <Outlet/>
</div>

)
}

// my linkedin and navbar heading were created as followed with guid lines to create ..