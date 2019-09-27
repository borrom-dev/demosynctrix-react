import React from 'react';
import {Form, Container, Input, FormTextArea, TextArea, Button} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

@inject('backendStore')
@observer
class EditArticleComponent extends React.Component {

    componentDidMount(){
        const {params} = this.props.match;
        this.props.backendStore.getArticleById(params.id);
        
    }

    render(){
        const {formData} = this.props.backendStore;
        const {article} = formData;
       
        return(
            <Container>
                <Form>
                    <Form.Field>
                        <Form.Input
                            placeholder='Title'
                            value={article.title}
                            name="title"/>
                    </Form.Field>

                   <Form.Field>
                        <Form.TextArea
                            style={{
                                minHeight: 100,
                            }}
                            value={article.description}
                            placeholder='Description'
                            name="description"/>
                    </Form.Field>

                    <Form.Field>
                        <Form.TextArea
                            style={{
                                minHeight: 400
                            }}
                            value={article.body}
                            placeholder='Write your tutorial...'
                        />
                    </Form.Field>
                    <Button primary>Save</Button>
                </Form>
            </Container>
        )
    }
}

export default EditArticleComponent;