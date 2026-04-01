import UserProfile from './../components/UserProfile'
import MovieCard from './../components/MovieCard'
import styles from './../App.module.css'
import { useState } from 'react'

function Home() {
    const [counter, setCounter] = useState(0)
    const [showUsers, setShowUsers] = useState(true);
    const users = [
        { firstName: "lina", lastName: "Talmat", age: "18", dob: "07/08/2007" },
        { firstName: "rayane", lastName: "talmat", age: "15", dob: "16/10/2010" },
        { firstName: "Melia ", lastName: "talmat", age: "11", dob: "09/06/2014" },
        { firstName: "sarah ", lastName: "talmat", age: "09", dob: "16/07/2014" },


    ];
    const movies = [
        { name: "titanic", annee: "1980" },
        { name: "Yiralti", annee: "2026" },

    ]
    return (
        <>

            <div>
                <h1> Home</h1>
                <p>this is home page</p>
            </div>
            <div>
                <button
                    className={styles.btnTest}
                    onClick={() => {
                        setCounter(counter + 1)
                    }}>
                    Add
                </button>
                <h2>Count: {counter}</h2>
                <h1>user list</h1>
                <button
                    className={styles.btnTest}
                    onClick={() => {
                        setCounter(counter - 1)
                    }}>
                    remove
                </button >
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

            <div>
                <h1>movieSs list</h1>
                {
                    movies.map((movie, id) => (
                        <MovieCard
                            key={id}
                            name={movie.name}
                            annee={movie.annee}


                        />



                    ))
                }

            </div>


        </>

    );
}
export default Home;