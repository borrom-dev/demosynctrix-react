import React from 'react';
import {Form, Container, Input, FormTextArea, TextArea, Button} from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "react-mde/lib/styles/css/react-mde-all.css";
const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  });

@inject('backendStore')
@observer
class EditArticleComponent extends React.Component {

    componentDidMount(){
        const {params} = this.props.match;
        this.props.backendStore.getArticleById(params.id);
    }

    handleTitleChange = (e, target) => {
        const {name, value} = target;
        this.props.backendStore.setCurrentArticle(name, value);
    }

    handleBodyChnage = (value)=> {
        this.props.backendStore.setCurrentArticle('body', value);
    }

    handleTabChange = (tab = 'write' | 'preview') => {
        this.props.backendStore.setCurrentArticle('tab', tab);
    }

    render(){
        const {currentArticle} = this.props.backendStore;
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

                    <Form.Field>
                        <ReactMde
                         value={currentArticle.body}
                         onChange={this.handleBodyChnage}
                         selectedTab={currentArticle.tab}
                         onTabChange={this.handleTabChange}
                         generateMarkdownPreview={markdown =>
                            Promise.resolve(converter.makeHtml(markdown))
                         }
                        />
                    </Form.Field>
                    <Button primary>Save</Button>
                </Form>
            </Container>
        )
    }
}

export default EditArticleComponent;