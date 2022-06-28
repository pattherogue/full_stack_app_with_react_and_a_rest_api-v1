import React, { Component } from 'react';
import Axios from 'axios';

export default class UpdateCourse extends Component {
    state = {
        title: '',
        description: '',
        estimatedTime: '',
        materialsNeeded: '',
        id: this.props.match.params.id,
        errors: [],
    }

    render() {
        const {
            title,
            description,
            estimatedTime,
            materialsNeeded,
            errors
        } = this.state

        return (
            <div>
                <div class="wrap">
                    <h2>Update Course</h2>
                    <Form
                        cancel={this.cancel}
                        errors={errors}
                        submit={this.submit}
                        submitButtonText="Update Course"
                        elements={() => (
                            <div>
                                <React.Fragment>
                                    <div className="main--flex">
                                        <div>
                                            <label htmlFor="courseTitle">Course Title</label>
                                            <input 
                                                id="title" 
                                                name="title" 
                                                type="text" 
                                                value={title}
                                                onChange={this.change}
                                                placeholder={title}
                                            />

                                            <label htmlFor="description">Course Description</label>
                                            <textarea 
                                                id="description" 
                                                name="description"
                                                type="textarea"
                                                value={description}
                                                onChange={this.change}
                                                placeholder={description}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="estimatedTime">Estimated Time</label>
                                            <input 
                                                id="estimatedTime" 
                                                name="estimatedTime" 
                                                type="text" 
                                                value={estimatedTime}
                                                onChange={this.change}
                                                placeholder={estimatedTime}
                                            />

                                            <label htmlFor="materialsNeeded">Materials Needed</label>
                                            <textarea 
                                                id="materialsNeeded" 
                                                name="materialsNeeded"
                                                type="textarea"
                                                value={materialsNeeded}
                                                onChange={this.change}
                                                placeholder={materialsNeeded}
                                            />
                                        </div>
                                    </div>
                                </React.Fragment>
                            </div>
                        )}
                    />
                </div>
            </div>
        )
    }
}
// provides "Update Course" screen
// render form -- update one existing course
// render "Update Course" button
// send PUT request to /api/courses/:id
// render "Cancel" button
// return users to "Course Detail" screen
