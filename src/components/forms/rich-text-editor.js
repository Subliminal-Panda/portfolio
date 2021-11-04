import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

export default class RichTextEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }

    onEditorStateChange(editorState) {
        this.setState({
            editorState
        }, this.props.handleRichTextEditorChange(
            draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
            ));
        //you can't trust this.setState to happen immediately- it's asynchronouse! Don't expect to use the new state if you call it immediately afterward, within the same function! However, you can pass in a second argument which will only fire after state is updated!
    }

    render() {
        return (
            <div>
                <Editor
                editorState={this.state.editorState}
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                onEditorStateChange={this.onEditorStateChange}
                />
            </div>
        )
    }
}
