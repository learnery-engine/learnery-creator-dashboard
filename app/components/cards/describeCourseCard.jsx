import React from "react";

export default function DescribeCourseCard() {
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
                    <label for="profession">What is your profession?</label>
                    <input type="text" id="profession" name="profession" placeholder="Expert, Teacher,..." />
                    <label for="course-audience">This course is for</label>
                    <input type="text" id="course-audience" name="course-audience" placeholder="High School Students" />
                    <label for="activities">Activities</label>
                    <input type="text" id="activities" name="activities" placeholder="1 Quiz per lecture" />
                    <label for="tone">Tone</label>
                    <select id="tone">
                        <option value="funny">funny</option>
                        <option value="harsh">harsh</option>
                        <option value="sad">sad</option>
                    </select>
                    <label for="course-desc">Describe your course</label>
                    <textarea id="course-desc" name="course-desc" placeholder="A UI design course with Figma for high-school students." rows="4" cols="50"></textarea>
                    <button class="button-with-icon">
                        <ion-icon name="color-wand-outline"></ion-icon> 
                        Generate
                    </button>
                </form>  
            </div>
        </div>
        <div class="right">
            <ion-icon name="color-wand-outline"></ion-icon>
            <h2>Course Title</h2>
            <p>Finish your course information</p>
            <p>then generate course outline</p>
        </div>
    </div>
    )
}