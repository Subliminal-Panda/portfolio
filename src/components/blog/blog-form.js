import React, { Component } from 'react';
import axios from 'axios';

import RichTextEditor from '../forms/rich-text-editor';

export default class BlogForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            blog_status: "",
            content: "",
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }

    handleRichTextEditorChange(content) {
        this.setState({
            content
        })
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        formData.append("portfolio_blog[content]", this.state.content);

        return formData;
    }

    handleSubmit(event) {
        axios.post(
            "https://tristanmouritsen.devcamp.space/portfolio/portfolio_blogs",
            this.buildForm(),
            {withCredentials: true}
            ).then(response => {
                this.setState({
                    title: "",
                    blog_status: "",
                    content: "",
                })
                this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
            }).catch(error => {
                console.log("handleSubmit new blog post error", error)
            });


        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <form className="blog-form-wrapper" onSubmit={this.handleSubmit}>
                <div className="two-column">
                    <input
                    type="text"
                    onChange={this.handleChange}
                    name="title"
                    placeholder="Blog Title"
                    value={this.state.title}
                    />
                    <select
                    className="select-element"
                    name="blog_status"
                    onChange={this.handleChange}
                    placeholder="Blog Status"
                    value={this.state.blog_status}
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <div className="one-column">
                    <RichTextEditor handleRichTextEditorChange={this.handleRichTextEditorChange} />
                </div>

                <button className="btn">Save</button>
            </form>
        )
    }
}
// if you're ever setting state, and variable name for the key is going to be the same as it's value, you don't need to say "content: content", you can just say "content" and JavaScript will understand!
