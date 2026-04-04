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
                <p  className="mine">Je vous présente ma petite famille, qui occupe une place très importante dans ma vie. Elle est composée de mes deux sœurs, de mon frère, et bien sûr de moi-même. Chacun de nous a sa propre personnalité, mais nous partageons des valeurs communes comme le respect, la solidarité et l’amour familial.

                   Mes sœurs sont des personnes sur qui je peux toujours compter, elles m’apportent beaucoup de soutien et de conseils au quotidien. Mon frère, quant à lui, apporte une énergie différente à notre famille, avec qui je partage des moments de complicité et de rire.

                    Ensemble, nous formons une famille unie, où chacun trouve sa place et contribue à créer une ambiance chaleureuse et bienveillante. Cette relation familiale est pour moi une source de motivation et de force dans ma vie de tous les jours.</p>
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