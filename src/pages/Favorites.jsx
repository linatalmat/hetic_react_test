 
 
 import { useEffect, useState } from "react"; 
  
function Favorites (){
    return (
    <>
      <section className="favorites">
      <h1 className="mine">My Favorites ❤️</h1>

      <div className="card-container">
        <div className="card">
          <h2  className="mine">My Parents </h2>
          <p  className="mine">
           Mes parents occupent une place centrale dans ma vie. Ils sont
            bien plus que ma famille : ils sont mon pilier, ma source de force
            et mon plus grand soutien au quotidien. Depuis toujours, ils ont
            cru en moi et m’ont encouragée à poursuivre mes rêves, même dans
            les moments les plus difficiles.
            Ils ont fait énormément de sacrifices pour me permettre d’avoir
             
            accès à une bonne éducation et à de meilleures opportunités.
            Leur engagement, leur patience et leur amour inconditionnel m’ont
            permis de grandir dans un environnement sain et motivant.
            Grâce à eux, j’ai appris des valeurs essentielles telles que le
            respect, la persévérance, la discipline et le sens des
            responsabilités. Ils m’ont toujours appris à ne jamais abandonner,
            à croire en mes capacités et à donner le meilleur de moi-même
            dans tout ce que j’entreprends.
          </p>
          
        </div>
      </div>
        <section className="parents-section">
       <h1 className="title">Messages pour mes parents 💖</h1>

         <div className="parents-container">

         
          <div className="parent-card">
            <h2> Message pour mon père</h2>
            <p>
              Papa, tu es une personne exceptionnelle dans ma vie. Tu m’encourages
              toujours dans tout ce que je fais et tu me traites comme une princesse.
              Tu me fais confiance et tu partages avec moi beaucoup de choses de ta vie,
              ce qui renforce encore plus notre relation.
           </p>
           <p>
             Tu es quelqu’un qui apporte de la joie dans notre famille, toujours avec
             ton sens de l’humour et ta bonne humeur. Tu sais me motiver à chaque étape
             de ma vie et me donner la force d’avancer sans jamais abandonner.
           </p>
           <p>
             Je suis très fière de toi et reconnaissante pour tout ce que tu fais pour moi.
            </p>
          </div>

        
          <div className="parent-card">
            <h2> Message pour ma mère</h2>
            <p>
              Maman, tu es une femme douce et extraordinaire. Je te considère comme ma
              meilleure amie, car je peux tout te raconter sans aucune hésitation.
             Nous partageons beaucoup de choses ensemble et ta présence est très
             importante pour moi.
            </p>
            <p>
              Tu es toujours à l’écoute, compréhensive et pleine de tendresse.
              Ton amour et ton soutien me donnent de la force au quotidien.
              Même lorsque nous sommes loin, tu me manques énormément.
            </p>
           <p>
             Je t’aime profondément et je suis très reconnaissante de t’avoir dans ma vie.
            </p>
          </div>

       </div>
    </section>
    </section>
    
    
    </>
    );
}
export default Favorites;