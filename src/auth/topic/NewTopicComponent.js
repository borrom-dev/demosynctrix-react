
import React from 'react';
import { Container, Button, Header, Divider, Form, Input, Menu, Segment, TextArea } from 'semantic-ui-react';
import ReactMarkdown  from 'react-markdown';
import CodeBlock from '../../component/CodeBlock';
import { inject, observer } from 'mobx-react';

@inject('newTopicStore')
@observer
class NewTopicComponent extends React.Component {

    componentDidMount(){
        this.props.newTopicStore.reset();
    }

    handleTabChange = (e, {name}) => {
        this.props.newTopicStore.handleSelectedTabChange(name)
    }

    handleSubmit = () => {
        this.props.newTopicStore.saveTopic()
        .then(() => {
            this.props.history.goBack();
        });
    }

    handleValueChange= (e, target) => {
        const {name, value} = target;
        this.props.newTopicStore.handleValueChange(name, value);
    }

    render(){
        const {formData} = this.props.newTopicStore;
        const {topic} = formData;
        return (
            <Container>
                <Header as='h1'>New Topic</Header>
                <Divider clearing/>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field
                        label='Name'
                        control={Input}
                        placeholder='Name'
                        width={7}
                        value={topic.name}
                        onChange={this.handleValueChange}
                        name="name"/>

                    <Form.Field
                        control={Input}
                        width={7}
                        label='Url'
                        placeholder='Url'
                        onChange={this.handleValueChange}
                        value={topic.url}
                        name="url"/>

                    <Form.Field
                        control={Input}
                        width={7}
                        label='Template'
                        placeholder='Template'
                        onChange={this.handleValueChange}
                        value={topic.template}
                        name="template"/>

                    <Form.Field
                        control={Input}
                        width={7}
                        label='Position'
                        placeholder='Position'
                        onChange={this.handleValueChange}
                        value={topic.position}
                        name="position"/>
                
                    <Menu tabular>
                        <Menu.Item
                         name='write'
                         onClick={this.handleTabChange}
                         active={formData.tab === 'write'}
                        />
                        <Menu.Item
                         active={formData.tab === 'preview'}
                         onClick={this.handleTabChange}
                         name='preview'
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
                        {formData.tab === 'write' ?
                            <Segment>     
                                <Form.Input
                                    control={TextArea}
                                    autoFocus
                                    name='content'
                                    style={{minHeight: 400}}
                                    value={topic.content}
                                    onChange={this.handleValueChange}
                                    placeholder='Write your content here,..'
                                /> 
                            </Segment>
                        :
                            <Segment style={{minHeight: 400}}>
                                <ReactMarkdown
                                source={topic.content}
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

export default NewTopicComponent;