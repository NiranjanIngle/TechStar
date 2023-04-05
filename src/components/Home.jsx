import React from 'react'
import "../styles/Home.scss"
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillInstagram,
    AiFillAmazonCircle,
    AiFillYoutube
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>TechStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="Grphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day.We are leading tech company whose aim is to increase the problem solving ability in children
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, tenetur quod? Neque quidem reiciendis itaque vitae a iure quisquam commodi doloribus rerum enim illum iste aliquam error et, alias temporibus dolorem. Quidem sunt, laudantium, dicta harum fuga reprehenderit corporis blanditiis vel eos excepturi maxime quod officiis ipsa molestiae laboriosam quam aperiam unde recusandae ea eveniet. Laboriosam minima molestiae porro, culpa accusantium repudiandae hic eos labore nesciunt praesentium esse temporibus, fugit dolore laudantium, dolorum ipsam possimus saepe voluptas optio at quas aspernatur blanditiis! Officiis quasi assumenda repellat illo magni adipisci quaerat ullam nemo dignissimos voluptatibus est, cupiditate, incidunt dolore quia quidem!</p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>

                    <article>

                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{ animationDelay: "0.7s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>

                        <div style={{ animationDelay: "1s" }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>

                    </article>
                </div>
            </div>
        </>
    )
}

export default Home