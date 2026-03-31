


import styles from './MovieCard.module.css'

function MovieCard({name,annee}){

    return (
    <>
    <p className={styles.MovieCard}> les movies et leur annee</p>
    <h1 >    this film is : {name} </h1>
    <h1>    his date is : {annee}</h1>
    
    </>


    );

}

export default MovieCard;