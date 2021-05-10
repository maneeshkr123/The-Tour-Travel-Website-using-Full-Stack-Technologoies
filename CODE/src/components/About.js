import React from 'react'
import './About.css'

function About() {
    return (
        <>
            <div class="about">
                <div class="img-part">
                    <img src="/images/img-9.jpg" width="100%" alt="About Photo" />
                </div>
                <div class="text-part">
                    <p class="about-head">About Us</p>
                    <p class="about-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime quod ex excepturi
                    et laborum dolore maiores, libero voluptatibus officia voluptatum soluta, aspernatur aliquid, fuga
                    architecto nam odit natus quisquam consequatur. Pariatur expedita incidunt neque est fuga necessitatibus
                recusandae ullam explicabo impedit nam commodi harum numquam voluptatum, laboriosam tenetur? Omnis.</p>
                    <p class="quote">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ipsum qui delectus neque
                    harum perferendis quae dolorem et suscipit saepe odit error, consectetur veritatis velit. Nihil enim
                    officiis itaque, amet blanditiis consectetur non, obcaecati accusamus veritatis eligendi nostrum
                quisquam quis! Placeat perferendis fugit maiores doloremque reprehenderit sit quo sed libero.</p>

                </div>
                <div class="contact">
                    <p><i class="fa fa-mobile-alt"></i><br /> 15646545465</p>
                    <p><i class="fas fa-map-marked-alt"></i><br />Lorem ipsum dolor sit amet Distinctio, quas?</p>
                    <p><i class="far fa-envelope"></i><br />info@trvl.com</p>
                </div>
            </div>
        </>

    )
}

export default About
