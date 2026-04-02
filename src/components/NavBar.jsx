import { NavLink} from "react-router";
import styles from './NavBar.module.css';

function NavBar(){
    return(
        <nav className={styles.contact}>
          <h1></h1>
          <div  className={styles.navnav}>
            <NavLink
             to="/home" 
            >
                
                Home
            </NavLink >
             <NavLink
              to="/about" 
            >
                
                About
             </NavLink >
               <NavLink
              to="/contact" 
            >

                
                contact
             </NavLink>
             <NavLink
             to="/favorites" 
            >
                
                favorites
            </NavLink>
            
          </div>



        </nav>
    );
}

export default NavBar;