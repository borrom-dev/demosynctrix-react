import React from 'react';
import {Form, Container, Button, TextArea, Segment, Menu, Select, Divider, Header, Input} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import ReactMarkdown  from 'react-markdown';
import CodeBlock from '../../component/CodeBlock';

@inject('editArticleStore')
@observer
class EditArticleComponent extends React.Component {

    componentDidMount(){
        const {params} = this.props.match;
        this.props.editArticleStore.getArticleById(params.id);
    }

    handleValueChange = (e, target) => {
        const {name, value} = target;
        this.props.editArticleStore.setCurrentArticle(name, value);
    }

    handleTabChange = (e, {name}) => {
        this.props.editArticleStore.setTab(name);

    }

    handleApplyStyle =(valule) => {
        this.props.editArticleStore.appendBody(valule);
    }

    handleSubmit = () => {
        this.props.editArticleStore.updateArticle()
        .then(() => {
            this.props.history.push('/dashboard/articles');
        })
    }

    handleSelectTopic = (e, {value}) => {
        this.props.editArticleStore.setTopicId(value);
    }

    render(){
        const {currentArticle, topicsOptions} = this.props.editArticleStore;
        const {form} = this.props.editArticleStore;

        return(
            <Container>
                <Button negative floated='right' type='submit'>Delete</Button>
                <Button positive floated='right' onClick={() => this.props.history.push('/dashboard/new-article')}>New</Button>
                <Header as='h1'>Edit Article</Header>
                <Divider clearing/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field
                        label='Title'
                        control={Input}
                        placeholder='Title'
                        width={7}
                        value={currentArticle.title}
                        onChange={this.handleValueChange}
                        name="title"/>
                    <Form.Field
                        control={Input}
                        width={7}
                        label='Slug'
                        placeholder='Slug'
                        onChange={this.handleValueChange}
                        value={currentArticle.slug}
                        name="slug"/>
                
                    <Form.Field
                        label='Description'
                        width={7}
                        control={Select}
                        options={topicsOptions}
                        onChange={this.handleSelectTopic}
                        value={currentArticle.topic_id}
                        label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
                        placeholder='Gender'
                        search
                        searchInput={{ id: 'form-select-control-gender' }}
                    />
                
                    <Form.TextArea
                        style={{
                            minHeight: 150,
                        }}
                        value={currentArticle.description}
                        onChange={this.handleValueChange}
                        placeholder='Description'
                        name="description"/>
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
                                    onChange={this.handleValueChange}
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
                </Form>
                <Divider clearing horizontal>Demotrix</Divider>
            </Container>
        )
    }
}

export default EditArticleComponent;