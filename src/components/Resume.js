import React from 'react';

function Resume() {
    return (
        <div>
            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Download my Resume</div>
                </div>
                <div className="window-body">
                    <p>You can download my resume by clicking the link below:</p>
                    <a href="/assets/CV.pdf" target="_blank" rel="noopener noreferrer" className="button">Download Resume</a> 
                </div>
            </div>

            <div className="window">
                <div className="title-bar">
                    <div className="title-bar-text">Resume</div>
                </div>
                <div className="window-body">
                    <h4>EDUCATION</h4>
                    <p>University of Missouri-Kansas City</p>
                    <p>Master of Science, Computer Science (Enrolled) Graduation: May 2026</p>
                    <p>Bachelor of Science, Computer Science, Minors in Statistics and Data Analytics Graduation: May 2025</p>
                    <ul>
                        <li>GPA: 3.94/4.00</li>
                        <li>University Honors College</li>
                    </ul>
                    
                    <h4>SKILLS</h4>
                    <ul>
                        <li>Programming Languages: C, C++, Python, SQL, Swift, Java, JavaScript, Racket, TypeScript.</li>
                        <li>Technologies: HTML, CSS, Jira, Confluence, Git, MySQL.</li>
                        <li>Frameworks: React, Next.js, Node.js, Redux, Express, Radix UI.</li>
                    </ul>
                    
                    <h4>EXPERIENCE</h4>
                    <p>Garmin International – Software Engineer Intern | Olathe, KS</p>
                    <p>November 2023 – May 2024</p>
                    <ul>
                        <li>Enhanced internal development processes by merging two tools into a unified template using HTML/CSS and Python, significantly improving modularity and usability for over 400 software engineers.</li>
                        <li>Engineered and executed Objective-C test cases for flight display alerts, enhancing regulatory compliance and operational integrity in integrated flight displays.</li>
                        <li>Streamlined the software development lifecycle and ensured compliance with federal aviation regulations by meticulously updating and aligning documentation and requirements, including the conversion of legacy documentation to meet new alert system standards.</li>
                    </ul>
                    <p>Cybership – Full Stack Engineer [Website] | Lenexa, KS</p>
                    <p>May 2023 – November 2023</p>
                    <ul>
                        <li>Collaborated in the design and implementation of an interactive webpage using Next.js and TypeScript, playing a pivotal role in its layout and UI design, using Tailwind and Radix UI.</li>
                        <li>Pioneered the development of a real-time e-commerce metrics dashboard, focusing on revenue, orders, and fulfillments, which played a crucial role in expanding the client base by 400%.</li>
                        <li>Enhanced website performance and reduced latency by 25% as measured by Lighthouse analytics, while seamlessly integrating new features, achieving an optimal balance between performance and functionality.</li>
                    </ul>
                    
                    <h4>PROJECTS</h4>
                    <p>iOS Currency Conversion Application [GitHub]</p>
                    <ul>
                        <li>Built an advanced exchange rate application, enabling users to effortlessly convert currencies and access real-time financial data.</li>
                        <li>Engineered a currency conversion backend with openexchangerates.org API for real-time accuracy, coupled with an intuitive UI/UX designed using Swift and UIKit for an enhanced user experience.</li>
                    </ul>
                    <p>Machine Learning Model [GitHub]</p>
                    <ul>
                        <li>Developed and refined a sophisticated deep learning model using Python, TensorFlow, and EfficientNet, specifically designed to classify images by time of day with high precision.</li>
                        <li>Achieved a 97% accuracy rate, leveraging advanced techniques in transfer learning and efficient data preprocessing during training and evaluation.</li>
                    </ul>
                    <p>Syntactic Correctness Parser in Racket [GitHub]</p>
                    <ul>
                        <li>Engineered a Racket-based parser to guarantee a program’s 100% syntactic accuracy, leveraging functional programming and monadic constructs for effective error handling: enriched understanding of compiler operations and functional methodologies.</li>
                    </ul>
                    <p>Natural Language Processing Script [GitHub]</p>
                    <ul>
                        <li>Developed an NLP-powered toolkit for sentiment analysis on IMDB movie reviews, utilizing machine learning algorithms like Logistic Regression, Linear SVM, and Multinomial Naive Bayes.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Resume;