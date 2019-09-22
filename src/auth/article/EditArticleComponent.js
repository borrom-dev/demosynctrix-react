import React from 'react';
import {
	Modal,
	Button,
	Form,
	Select
 } from 'semantic-ui-react';

import ReactMde from "react-mde";

import * as Showdown from "showdown";

 const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

const EditArticlesComponent = ({
    open,
    title,
    body,
    tab,
    slug,
    topicId,
    handleValueChange,
    handleChange,
    handleTabChange,
    pages,
    handleNegativeClick,
    handleSelectedTopic,
    handlePositiveClick}) => (
    <Modal size ='large' open={open}>
        <Modal.Header>Create Page</Modal.Header>
            <Modal.Content>
                <Modal.Description>
                    <Form>
                        <Form.Field>
                        <label>Title</label>
                        <input
                            name="title"
                            onChange={handleChange}
                            value={title}/>
                        </Form.Field>
                        <Form.Field>
                            <label>Slug</label>
                            <input
                                name="slug"
                                onChange={handleChange}
                                value={slug}/>
                        </Form.Field>
                        <Form.Field
                            control={Select}
                            onChange={handleSelectedTopic}
                            options={pages}
                            value={topicId}
                            label={{ children: 'Topic', htmlFor: 'form-select-control-gender' }}
                            placeholder='Topic'
                            searchInput={{ id: 'form-select-control-gender' }}
                        />
                        <ReactMde
                        value={body ? body : ''}
                        onChange={handleValueChange}
                        selectedTab={tab}
                        onTabChange={handleTabChange}
                        generateMarkdownPreview={markdown => Promise.resolve(converter.makeHtml(markdown))}
                        />
                    </Form>
                </Modal.Description>
            </Modal.Content>
        <Modal.Actions>
            <Button negative onClick={handleNegativeClick}>Cancel</Button>
            <Button positive onClick={handlePositiveClick}>Save</Button>
        </Modal.Actions>
    </Modal>
)

export default EditArticlesComponent;