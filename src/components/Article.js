import React from 'react';
import image1 from './images/image_box1.jpg'
import image2 from './images/image_box2.jpg'
import image3 from './images/image_box3.jpg'
const Article=()=>{
    return(
        <div>
        <div className="interview_div">
            <div className="child1">
               <h2>Mr.Damon , how do you define success</h2>
                It’s the work. It’s the process itself. I have done enough movies now — movies that have failed, movies that have been successful. All we have as the people making it is the love of the doing of it. I am aware of the results because I have to be; it has an impact on my career so I can’t be ignorant of the movies that I am doing. But it’s really about feeling that I did my best work, the best work I could do under the circumstances, feeling that we told the story we wanted to tell in the way we wanted to tell it. That’s really the definition of success.
<h2>So for you it's about journey</h2>
The journey is everything! It’s a cliché, but I have really felt it in my own life, in the 25 or 30 years I’ve been in this… The goal is the process, really enjoying the process. You can’t really predict what is going to happen with movies… I have made movies that I thought were really going to be well received and successful, and they failed miserably. And I have made movies that were very successful that I didn’t see coming.<br/>
               <br/>
               <input type="button" className="article_button" onClick="https://the-talks.com/" value="Read Now"/>
            </div>
            <div className="child1 article_2">
            “I have always tried to be as real as possible. I’m going to be who I am.”
            </div>
        </div>
        <section className="section_article">
            <h3>Inspirational Conversation</h3>
           <p className="text"> It is based on a fundamental belief in unlimited human potential, in continuous improvement, in always pushing the boundaries and taking the long-term view. Our watches are built to last. So is our contribution to future generations.</p>
        </section>
        <div className="interview_div">
            <div className="child1"><img className="article_image" src={image1} alt="Box Image" /></div>
            <div className="child1"><img className="article_image" src={image2} alt="Box Image" /></div>
            <div className="child1"><img className="article_image" src={image3} alt="Box Image" /></div>
        </div>
        </div>
    )

}
export default Article;