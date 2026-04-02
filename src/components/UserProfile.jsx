
import styles from './UserProfile.module.css'

function  UserProfile({firstName,lastName,dob, age}){

  
   
  return(
    <div className={styles.card}>
    <p className={styles.texte}> Carte_de_Présentation </p>
    
    
    <h1 className={styles.h1}>Name : {firstName}</h1>
    <h1 className={styles.h1}>Last name : {lastName}</h1>
    <h1 className={styles.h1}> Age : {age} </h1>
    <h1 className={styles.h1}> Date of birth is : {dob}</h1>
    
    </div>
    
    
   
  );
}

export default UserProfile; 