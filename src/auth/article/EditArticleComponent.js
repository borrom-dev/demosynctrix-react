import React from 'react';
import {Form, Container, Button, TextArea, Segment, Menu} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import ReactMarkdown  from 'react-markdown';

@inject('backendStore')
@observer
class EditArticleComponent extends React.Component {

    componentDidMount(){
        const {params} = this.props.match;
        this.props.backendStore.getArticleById(params.id);
        console.log(this.props.backendStore.currentArticle.tab);
    }

    handleTitleChange = (e, target) => {
        const {name, value} = target;
        this.props.backendStore.setCurrentArticle(name, value);
    }

    handleTabChange = (e, {name}) => {
        this.props.backendStore.setTab(name);

    }

    handleApplyStyle =(valule) => {
        this.props.backendStore.appendBody(valule);
    }

    render(){
        const {currentArticle, tab} = this.props.backendStore;
        return(
            <Container>
                <Form>
                    <Form.Field>
                        <Form.Input
                            placeholder='Title'
                            value={currentArticle.title}
                            onChange={this.handleTitleChange}
                            name="title"/>
                    </Form.Field>

                   <Form.Field>
                        <Form.TextArea
                            style={{
                                minHeight: 100,
                            }}
                            value={currentArticle.description}
                            onChange={this.handleTitleChange}
                            placeholder='Description'
                            name="description"/>
                    </Form.Field>
                    <Menu tabular>
                        <Menu.Item
                         name='Write'
                         onClick={this.handleTabChange}
                         active={tab === 'Write'}
                        />
                        <Menu.Item
                         active={tab === 'Preview'}
                         onClick={this.handleTabChange}
                         name='Preview'
                        />
                    </Menu>        
                    
                        <Button.Group basic size='small'>
                            <Button onClick={() => this.handleApplyStyle('# ')}>h1</Button>
                            <Button onClick={() => this.handleApplyStyle('## ')}>h2</Button>
                            <Button onClick={() => this.handleApplyStyle('### ')}>h3</Button>
                        </Button.Group>
                        <Button.Group style={{margin: 10}} basic size='small'>
                            <Button icon='linkify'/>
                            <Button icon='image'/>
                        </Button.Group>
                       
                        {tab === 'Write' ?
                            <Segment>     
                                <Form.Input
                                    control={TextArea}
                                    autoFocus
                                    name='body'
                                    style={{minHeight: 400}}
                                    value={currentArticle.body}
                                    onChange={this.handleTitleChange}
                                    placeholder='Write your article here,..'
                                /> 
                            </Segment>
                        :
                            <Segment style={{minHeight: 400}}>
                                <ReactMarkdown
                                source={currentArticle.body}
                                escapeHtml={false}
                                />
                            </Segment>
                        }
                    <Button positive floated='right'>Save Page</Button>
                </Form>
            </Container>
        )
    }
}

export default EditArticleComponent;