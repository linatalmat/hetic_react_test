import UserProfile from './../components/UserProfile'
import MovieCard from '../components/MovieCard'
import styles from './../App.module.css'
import { useState } from 'react'

function Home() {
    const [counter, setCounter] = useState(0)
    const [showUsers, setShowUsers] = useState(true);
    const users = [
        { firstName: "Lina", lastName: "Talmat", age: "18", dob: "07/08/2007" },
        { firstName: "Rayane", lastName: "talmat", age: "15", dob: "16/10/2010" },
        { firstName: "Melia ", lastName: "talmat", age: "11", dob: "09/06/2014" },
        { firstName: "Sarah ", lastName: "talmat", age: "09", dob: "16/07/2014" },


    ];
    const movies = [
        { name: "titanic", annee: "1980" },
        { name: "Yiralti", annee: "2026" },

    ]
    return (
        <>

            <div>
                <h1  className="mine"> Présentation</h1>
                <p  className="mine">Voila ma petite famille je vous presente mes deux soeurs et mon frére et moi bien sur </p>
            </div>
            <div>
                
                <button
                    className={styles.btnTest}
                    onClick={() => {
                        setShowUsers(!showUsers)
                    }}>show

                </button>

                {
                    showUsers && users.map((user, id) => (
                        <UserProfile
                            key={id}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            age={user.age}
                            dob={user.dob}

                        />
                    ))

                }
            </div>

           

        </>

    );
}
export default Home;