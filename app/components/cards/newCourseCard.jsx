import React from 'react';


export default function NewCourseCard() {
    return (
        <div class="newCourseParent">
            <div class="header">
                <h1>New Course</h1>
                <p>How do you want to start?</p>
            </div>

            <div class="first-card">
                <h2>Text to Course with AI</h2>
                <p>Create rich learning experiences with the help of lectures, quizzes..., powered by AI technology.</p>
                <button>Create</button>
            </div>

            <div class="second-card">
                <h2>From Scratch</h2>
                <p>Create rich learning experiences with the help of lectures, quizzes..., powered by AI technology.</p>
                <button disabled>Coming Soon</button>
            </div>

            <div class="third-card">
                <h2>Use Case Ideas</h2>
                <p>Create rich learning experiences with the help of lectures, quizzes..., powered by AI technology.</p>
                <button disabled>Coming Soon</button>
            </div>

        </div>        
    )
}
