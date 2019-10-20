import React from 'react'
import {
	Pagination,
	Table,
	Grid,
	Button,
	Form,
	TextArea,
	Segment,
	Icon,
	Loader
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

const formRef = {}

const handleOnBlur = {}

const handleFocus = {}

const handleValueChange = {}

const handleUpdate = {}

const ArticlesComponent = inject('store')(
	observer(({store: {articleStore}}) => {
		return (
			<Grid>
				{articleStore.isLoading ? <Loader active/> :
				<>
					<Grid.Column width={4}>
							<Table celled basic='very' selectable>
								<Table.Body>
									{articleStore.articles.map((article, id) => (
										<Table.Row key={id} onClick={() => articleStore.setSelectedIndex(id)} active={article.id === articleStore.selectedArticle.id} primary>
											<Table.Cell collapsing>{article.title}</Table.Cell>
										</Table.Row>
									))}
								</Table.Body>
							</Table>
					</Grid.Column>
					<Grid.Column width={12}>
						<ProfileComponent title={articleStore.selected.title}/>
						{articleStore.focus ? 
							<div className='ui form'>
							<TextareaAutosize
								name='body'
								ref={formRef}
								onBlur ={handleOnBlur}
								onFocus={handleFocus}
								onChange={handleValueChange}
								style={{width: '100%', marginTop: '20px', lineHeight: '1.5em'}}
								value={articleStore.selectedArticle.body}
							/>
							<div style={{marginTop: '2em'}}>
								<Button positive onClick={handleUpdate}>Save</Button>
								<Button basic icon='cancel' onClick={() => articleStore.setFocus(false)}/>
							</div>
							</div>
						:
						<Segment basic onClick={() => articleStore.setFocus(true)}>
							<ReactMarkdown
							source={articleStore.selectedArticle.body}
							escapeHtml={false}
							renderers={{code: CodeBlock, inlineCode: InlineCode}}
							astPlugins={[parseHtml]}/>
						</Segment>
						}
					</Grid.Column>
				</>
				}
			</Grid>
		)
	})
)

export default ArticlesComponent;