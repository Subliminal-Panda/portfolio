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
        this.getBase64 = this.getBase64.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
    }

    getBase64(file, callback) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => callback(reader.result);
        reader.onerror = error => {};
    }

    uploadFile(file) {
        return new Promise((resolve, reject) => {
            this.getBase64(file, data => resolve({data: {link: data}}))
        })
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
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                    image: {
                        uploadCallback: this.uploadFile,
                        alt: { present: true, mandatory: false },
                        previewImage: true,
                        inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg"
                    },
                    colorPicker: {
    colors: [
'rgb(255, 91, 219)',
'rgb(255, 215, 169)',
'rgb(255, 252, 217)',
'rgb(180, 255, 218)',
'rgb(38, 212, 183)',
'rgb(26,188,156)',
'rgb(0, 171, 194)',
'rgb(0,127,255)',
'rgb(130, 0, 255)',
'rgb(164, 0, 255)',
'rgb(0,0,0)',
'rgb(64, 64, 64)',
'rgb(127, 127, 127)',
'rgb(191,191,191)',
'rgb(255,255,255)',
],
  }
                }}
                />
            </div>
        )
    }
}
