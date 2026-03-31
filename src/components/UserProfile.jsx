
import styles from './UserProfile.module.css'

function  UserProfile({firstName,lastName,dob, age}){

  
   
  return(
    <div className={styles.card}>
    <p className={styles.texte}>Moi est mes frére-soeurs </p>
    
    
    <h1> my name is : {firstName}</h1>
    <h1> my age is : {age} </h1>
    <h1>my date of birth is : {dob}</h1>
    <h1>my last name : {lastName}</h1>
    </div>
    
    
   
  );
}

export default UserProfile; 