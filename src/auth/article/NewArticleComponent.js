import React from 'react';
import {Form, Container, Input, FormTextArea, TextArea, Button} from 'semantic-ui-react';

export default class NewArticleComponent extends React.Component {

    render(){
        return(
            <Container>
                <Form>
                    <Form.Field>
                        <Form.Input
                            placeholder='Title'
                            name="title"/>
                    </Form.Field>

                   <Form.Field>
                        <Form.TextArea
                            style={{
                                minHeight: 100,
                            }}
                            placeholder='Description'
                            name="description"/>
                    </Form.Field>

                    <Form.Field>
                        <Form.TextArea
                            style={{
                                minHeight: 400
                            }}
                            placeholder='Write your tutorial...'
                        />
                    </Form.Field>
                    <Button primary>Save</Button>
                </Form>
            </Container>
        )
    }
}