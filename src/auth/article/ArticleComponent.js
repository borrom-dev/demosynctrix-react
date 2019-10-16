import React from 'react'
import {
	Pagination,
	Table,
	Grid,
	Button,
	Form,
	TextArea,
	Segment,
	Icon
 } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';
import CodeBlock from '../../component/CodeBlock';
import InlineCode from '../../component/InlineCode';
import { ProfileComponent } from '../../component/ProfileComponent';
import TextareaAutosize from 'react-autosize-textarea';

const parseHtml = htmlParser({
	isValidNode: node => node.type !== 'script',
})


@inject('backendStore')
@observer
class ArticlesComponent extends React.Component {

	state = {
		selected: undefined,
		activePage: 1,
		onFocus: false,
	}

	constructor(props){
		super(props);
		this.formRef = React.createRef();
	}

	componentDidMount(){
		const {active} = this.state;
		this.props.backendStore.getArticles(active - 1);
	}

	handlePageChnage = (e, data) => {
		const {activePage} = data;
		this.props.backendStore.getArticles(activePage - 1);
		this.setState({activePage: data.activePage});
	}

	handleCellClick = (value) => {
		this.setState({selected: value});
	}

	navigateTo = (url) => {
		this.props.history.push(`/dashboard/${url}`);
	}

	handleFocus = (e) => {
		this.setState({onFocus: true})
	}

	handleOnBlur = () =>{
		this.setState({onFocus: false})
	}

	handleValueChange = (e) => {
		const {target} = e;
		this.setState(prevState => {
			let selected = Object.assign({}, prevState.selected);
			selected.body = target.value;
			return {selected};
		});
	}

	render(){
		const {articles, isLoading} = this.props.backendStore;
		const {selected, activePage, onFocus} = this.state; 
		return(
			<>
				<Grid>
					<Grid.Column width={4}>
						<Table celled basic='very' selectable>
							<Table.Body>
								{articles.data.map((article, id) => (
									<Table.Row active={selected ? article.id === selected.id : false} primary onClick={() => this.handleCellClick(article)} key={id}>
										<Table.Cell collapsing>{article.title}</Table.Cell>
									</Table.Row>
								))}
							</Table.Body>
						</Table>
				</Grid.Column>
				<Grid.Column width={12}>
					<ProfileComponent title={selected ? selected.title : ''}/>
					{onFocus ? 
						<div className='ui form'>
						<TextareaAutosize
							name='body'
							ref={this.formRef}
							onBlur ={this.handleOnBlur}
							onFocus={this.handleFocus}
							onChange={this.handleValueChange}
							style={{width: '100%', marginTop: '20px', lineHeight: '1.5em'}}
							value={selected ? selected.body : ''}
						/>
						<div style={{marginTop: '2em'}}>
							<Button positive onClick={() => {
								this.setState({onFocus: false})
							}} >Save</Button>
							<Button basic onClick={() => {
								this.setState({onFocus: false})
							}} icon='cancel'/>
						</div>
						</div>
					:
					<Segment basic onClick={() => {
							this.setState({onFocus: true})
						}}>
						<ReactMarkdown
						source={selected ?  selected.body : ''}
						escapeHtml={false}
						renderers={{code: CodeBlock, inlineCode: InlineCode}}
						astPlugins={[parseHtml]}/>
					</Segment>
					}
				</Grid.Column>
				</Grid>
			</>
		)
	}
}

export default ArticlesComponent;