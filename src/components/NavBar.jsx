import { NavLink} from "react-router";

function NavBar(){
    return(
        <nav>
          <h1>hetic</h1>
          <div>
            <NavLink
             to="/home" 
            >
                
                Home
            </NavLink>
             <NavLink
              to="/about" 
            >
                
                About
             </NavLink>

          </div>



        </nav>
    );
}

export default NavBar;