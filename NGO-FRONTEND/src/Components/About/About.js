import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./About.css"

const About = () => {
    return (
        <>
            <Header />
            <div className="main_about">
                <div className="main_content_about">
                    <h2>What We Do?</h2>
                </div>
            </div>
            <div className="product_ab product_about">
                <h2>HOW WE HELP</h2>
                <div className="product_container_about">

                    <div className="item_about">
                        <div className="item_img_about">
                            <img src="images/pro1.svg" />
                        </div>
                        <div className="item_content_about">
                            <h3>Pure Food & Water</h3><br />
                            <p>We supply needy childen with basic necessities like pure food and water</p>
                            <br /><br /><br />
                        </div>
                    </div>

                    <div className="item_about">
                        <div className="item_img_about">
                            <img src="images/pro2.svg" />
                        </div>
                        <div className="item_content_about">
                            <h3>Health and Medicine</h3><br />
                            <p>Health being the foremost priority, we aim at giving children every medical support</p>
                            <br /><br />
                        </div>
                    </div>

                    <div className="item_about">
                        <div className="item_img_about">
                            <img src="images/pro3.svg" />
                        </div>
                        <div className="item_content_about">
                            <h3>Education</h3><br />
                            <p>We provide education facilities to children all over the world</p>
                            <br /><br />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <Footer />
        </>
    )
}

export default About