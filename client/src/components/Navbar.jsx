import {useState} from "react"
import {Link} from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi'
import {data} from '../restApi.json'


function Navbar() {
    const [show, setShow] = useState(false)
    
  return (
    <nav>
    <div className="logo"><img src="/logo-navbar.svg" alt="" /></div>
    <div className={show ?  "navLinks showmenu" : "navLinks"}>
    <div className="links">
        {
            data[0].navbarLinks.map((elements) => {
                return(
                    <Link
                    to={elements.link}
                    key = {elements.id}
                    spy = {true}
                    smooth = {true}
                    duration = {500}
                    >
                        {elements.title}
                    </Link>
                )
            })
        }
    </div>
    <button className="menuBtn">OUR MENU</button>
    </div>
    <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu/>
    </div>
    </nav>
  )
}

export default Navbar