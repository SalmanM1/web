import React from 'react';

function Home() {
    return (
        <div className="window">
            <div className="title-bar">
                <div className="title-bar-text">Home</div>
            </div>
            <div className="window-body">
            <img src="/assets/PP.png" alt="Professional Headshot" />
                <p>Salman Mirza is an aspiring software engineer pursuing a Bachelor of Science in Computer Science at the University of Missouri - Kansas City, projected to graduate in Spring 2025. With an interest in the ever-evolving landscape of technology, Salman plans to further his education by obtaining a Master of Science in Computer Science or Data Science at UMKC.
                Salman has garnered valuable industry experience through roles at notable organizations. He kick-started his professional journey at Cybership.io, a tech-logistics startup, where he honed his skills as a full-stack developer, contributing to innovative solutions that streamline logistics operations. Following this, Salman expanded his expertise in embedded systems as an Embedded Software Engineer intern at Garmin, where he worked on developing Dev Tools and Alerts for integrated flight systems, enhancing the safety and functionality of aviation technology.
                As Salman looks toward the future, he is actively seeking a Software Engineering internship for the Summer of 2025. His professional goals are to delve deeper into the rapidly changing world of software engineering, continuously learning and applying his knowledge to solve real-world problems while advancing the capabilities of software solutions.
                </p>
                <p>This page incorporates <a href="https://botoxparty.github.io/XP.css/" target="_blank">XP.css</a></p>
            </div>
        </div>
    );
}

export default Home;