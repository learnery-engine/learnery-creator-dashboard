import React from "react";
import Menu from "./menu";

export default function DescribeCourseFullCard() {
    return (
        <div class="parent" >
        <ul class="menu">
           <li><a href="#">New Course</a></li>
           <li><a href="#">Save Draft</a></li>
           <li><a href="#">Next</a></li>
         </ul>
        <div class="left">
           <div class="header">
               <h2>Describe your course</h2>
               <p>In this step, you will need to enter a brief description of the course you want to create, then we can suggest you a tailored course contents.</p>
           </div>
           <div class="form">
               <form action="create/step1" method="post"> 
                   <label for="language">Course Language</label>
                   <select id="language">
                       <option value="English">English</option>
                       <option value="Spanish">Spanish</option>
                       <option value="French">French</option>
                   </select>
                   <br />
                   <label for="category">Category</label>
                   <select id="category">
                       <option value="DigitalDesign">Digital Design</option>
                       <option value="technology">technology</option>
                       <option value="Arts">Arts</option>
                   </select>
                   <label for="course-audience">This course is for</label>
                   <input type="text" id="course-audience" name="course-audience" placeholder="High School Students" />
                   <label for="tone">Tone</label>
                   <select id="tone">
                       <option value="funny">funny</option>
                       <option value="harsh">harsh</option>
                       <option value="sad">sad</option>
                   </select>
                   <label for="course-hours">Course Hours</label>
                   <select id="course-hours">
                       <option value="#">1 hour</option>
                       <option value="#">2 hours</option>
                       <option value="#">3 hours</option>
                   </select>
                   <label for="lesson-duration">Lesson Duration</label>
                   <select id="lesson-duration">
                       <option value="#">50 minutes</option>
                       <option value="#">100 minutes</option>
                       <option value="#">150 minutes</option>
                   </select>
                   <label for="course-desc">Describe your course {2500}</label>
                   <textarea id="course-desc" name="course-desc" placeholder="A UI design course with Figma for high-school students." rows="4" cols="50"></textarea>
                   <button class="button-with-icon">
                       <ion-icon name="color-wand-outline"></ion-icon>
                       Re-Generate
                     </button>
               </form>  
           </div>
   
        </div>
        <div class="right">
            <div class="course-navigation">
                <ul>
                  <li><a href="#">Course Title</a></li>
                  <li><a href="#">Objectives</a></li>
                  <li><a href="#">Outline</a></li>
                </ul>
            </div>
            <div class="select">
                <p>Select a title to continue</p>
                <span class="material-symbols-outlined">
                    autorenew
                </span>
                <span class="material-symbols-outlined">
                    delete
                </span>
            </div> 
            <div class="first-section">
               <h4>How to design Awesome Apps with Figma and Not Fail your Math Test</h4>
               <p>This title is catchy and humorous, and it appeals to the students' desire to balance their academic and creative pursuits</p>
               <span class="material-symbols-outlined">
                autorenew
                </span>
               <span class="material-symbols-outlined">
                border_color
                </span>
            </div>
            <div class="second-section">
                <h4>Figma: The Ultimate Tool for UI Design and Procastination</h4>
                <p>This title is playful and ironic, and it suggests that Figma is so fun and easy to use that students might get distracted from their other tasks.</p>
                <span class="material-symbols-outlined">
                 autorenew
                 </span>
                <span class="material-symbols-outlined">
                 border_color
                 </span>
            </div>
            <div class="third-section">
                <h4>Learn UI Design with Figma in 10 Easy steps (or Less)</h4>
                <p>This title is simple and straightforward, and it promises a quick and effective learning experience for the students.</p>
                <span class="material-symbols-outlined">
                 autorenew
                 </span>
                <span class="material-symbols-outlined">
                 border_color
                 </span>
            </div>
            <div class="fourth-section">
                <h4>Figma for Fun and profit: A UI Design Course for High-Schoolers</h4>
                <button>+1 generate</button> <button>Make Shorter</button> <button>Make Longer</button>
            </div>

            <div class="input-container">
                <textarea id="message-input" placeholder="Ask AI"></textarea>
                <span class="material-symbols-outlined">
                    send
                </span>
            </div>

        </div>
   
       </div>
    )
}