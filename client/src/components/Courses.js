import React, { Component } from 'react';

class Courses extends Component {
    state = {
        courses: [],
    };

    componentDidMount() {
        fetch("http://localhost:5000/ap/courses")
    }




}
// provide the "Courses" screen
// retrieve list of courses from /api/courses
// render list of courses
// link to respective "Course Detail" screen
// component render link to "Create Course" screen 


export default Courses