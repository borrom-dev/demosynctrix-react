import React from 'react';

const EditTopicComponent = ({}) => (
    <Modal size ='large' open={open}>
        <Modal.Header>Create Page</Modal.Header>
        <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                        <label>Title</label>
                        <input
                                    name="title"
                                    onChange={this.handleChange}
                                    value={''}/>
                        </Form.Field>
                            <Form.Field>
                        <label>Url</label>
                        <input
                                    name="url"
                                    onChange={this.handleChange}
                                    value={''}/>
                        </Form.Field>
                            <Form.Field>
                        <label>Name</label>
                        <input
                                    name="name"
                                    onChange={this.handleChange}
                                    value={''}/>
                        </Form.Field>
                            <Form.Group widths='equals'>
                                <Form.Field
                                control={Select}
                                options={''}
                                        label='Order'
                                search
                            />
                        <Form.Field
                            control={Select}
                            options={''}
                                    label='by'
                            search
                        />
                        </Form.Group>
                            <ReactMde
                            value={value}
                                    onChange={this.handleValueChange}
                            selectedTab={tab}
                                    onTabChange={this.handleTabChange}
                            generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                            }
                        />
                        </Form>
                    </Modal.Description>
        </Modal.Content>
                <Modal.Actions>
        <Button negative onClick={()=> {
                            this.setState({open: false})
                    }}>Cancel</Button>
        <Button positive onClick={()=> {
                            this.setState({open: false})
                    }}>Save</Button>
        </Modal.Actions>
    </Modal>
)