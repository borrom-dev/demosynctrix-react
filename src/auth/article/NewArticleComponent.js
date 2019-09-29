import React from 'react';
import {Form, Container, Button, TextArea, Segment, Menu, Select} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import ReactMarkdown  from 'react-markdown';
import CodeBlock from '../../component/CodeBlock';

@inject('newArticleStore')
@observer
class NewArticleComponent extends React.Component {

    componentDidMount(){
        this.props.newArticleStore.getAllTopics();
    }

    handleTitleChange = (e, target) => {
        const {name, value} = target;
        this.props.newArticleStore.setCurrentArticle(name, value);
    }

    handleTabChange = (e, {name}) => {
        this.props.newArticleStore.setTab(name);

    }

    handleApplyStyle =(valule) => {
        this.props.newArticleStore.appendBody(valule);
    }

    handleSubmit = () => {
        this.props.newArticleStore.saveArticle()
        .then(() => {
            this.props.history.push('/dashboard/articles');
        })
    }

    handleSelectTopic = (e, {value}) => {
        this.props.newArticleStore.setTopicId(value);
    }

    render(){
        const {currentArticle, topicsOptions} = this.props.newArticleStore;
        const {form} = this.props.newArticleStore;

        return(
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group widths='equal'>
                        <Form.Field>  
                            <Form.Input
                                label='Title'
                                placeholder='Title'
                                value={currentArticle.title}
                                onChange={this.handleTitleChange}
                                name="title"/>
                        </Form.Field>

                        <Form.Field>  
                            <Form.Input
                                label='Slug'
                                placeholder='Slug'
                                value={currentArticle.slug}
                                onChange={this.handleTitleChange}
                                name="slug"/>
                        </Form.Field>
                    </Form.Group>
                    <Form.Field
                        width={5}
                        control={Select}
                        options={topicsOptions}
                        onChange={this.handleSelectTopic}
                        value={currentArticle.topic_id}
                        label={{ children: 'Topic', htmlFor: 'form-select-control-gender' }}
                        placeholder='Topic'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
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

export default NewArticleComponent;