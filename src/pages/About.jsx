
import { useEffect, useState } from "react";


function About(){
    const [ todo, setTodo]=useState({})
    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then(reponse => reponse.json())
       .then(json =>setTodo(json))
    });


    return(
        <>
        <div className="divv">
            <h1 className="h11"> About Me</h1>
           
        </div>
        <div className="styles.me">
           <p className="me"> Actuellement en 1ère année du Programme Grande École à HETIC
                     , je vais me spécialisée Data & Intelligence Artificielle, 
                      je suis à la recherche d’un stage afin de développer mes compétences en
                      data science et en intelligence artificielle.
                      Passionnée par les données et les systèmes intelligents,
                      je souhaite mettre à profit ma curiosité analytique et mon sens de 
                     l’innovation au sein de projets concrets et ambitieux.

                      Avant HETIC, j’ai acquis des bases solides en mathématiques et informatique à
                     l’Université Mouloud Mammeri, ce qui m’a permis de développer une rigueur 
                      scientifique et un esprit analytique affirmé.

                      Trilingue (français, anglais, arabe), je suis motivée à contribuer 
                     à des projets innovants en apportant une vision stratégique et des 
                      compétences techniques solides</p>

        </div>
        
       
        <div className="column">
          <h2 className="h11">🎯 Centres d’intérêt</h2>
          <p className="me">
            Je suis passionnée par les activités créatives, notamment la danse,
            le chant et le dessin. Ces passions me permettent d’exprimer ma créativité,
            de développer mon imagination et de garder un bon équilibre personnel.
          </p>
        </div>

        
        
        <div className="column">
          <h2 className="h11">⚽ Sport</h2>
          <p className="me">
            J’ai pratiqué plusieurs activités sportives : deux ans de kickboxing,
            deux ans de natation et trois ans de gymnastique.
            Ces expériences m’ont permis de développer discipline,
            persévérance et esprit de dépassement de soi.
          </p>
        </div>

      
   
        </>
    );
}
export default About;