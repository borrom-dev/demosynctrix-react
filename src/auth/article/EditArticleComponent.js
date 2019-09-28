import React from 'react';
import {Form, Container, Button, TextArea, Segment, Menu} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import ReactMarkdown  from 'react-markdown';
import CodeBlock from '../../component/CodeBlock';

@inject('articleStore')
@observer
class EditArticleComponent extends React.Component {

    componentDidMount(){
        const {params} = this.props.match;
        this.props.articleStore.getArticleById(params.id);
    }

    handleTitleChange = (e, target) => {
        const {name, value} = target;
        this.props.articleStore.setCurrentArticle(name, value);
    }

    handleTabChange = (e, {name}) => {
        this.props.articleStore.setTab(name);

    }

    handleApplyStyle =(valule) => {
        this.props.articleStore.appendBody(valule);
    }

    handleSubmit = () =>{
        this.props.articleStore.updateArticle()
        .then(() => {
            this.props.history.push('/dashboard/articles');
        })
    }

    render(){
        const {currentArticle} = this.props.articleStore;
        const {form} = this.props.articleStore;
        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
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
                         active={form.tab === 'Write'}
                        />
                        <Menu.Item
                         active={form.tab === 'Preview'}
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
                        {form.tab === 'Write' ?
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
                                renderers={{code: CodeBlock}}
                                escapeHtml={false}
                                />
                            </Segment>
                        }
                    <Button positive floated='right' type='submit'>Save Page</Button>
                    <Button negative floated='right' onClick={() => {
                        this.props.history.goBack();
                    }}>Cancel</Button>
                </Form>
            </Container>
        )
    }
}

export default EditArticleComponent;