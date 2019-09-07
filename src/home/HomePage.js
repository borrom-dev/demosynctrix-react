import React, {Component} from 'react';
import _ from 'lodash'
import {
  Container,
  Divider,
  Image,
  List,
  Segment,
  Visibility,
} from 'semantic-ui-react'

const overlayStyle = {
  float: 'left',
  margin: '0em 3em 1em 0em',
}
const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

export default class HomePage extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  }

  render() {

    return (
      <div>
        {/* Heads up, style below isn't necessary for correct work of example, simply our docs defines other
            background color.
          */}
        <style>
          {`
          html, body {
            background: #fff;
          }
        `}
        </style>

        <Container text>
          {_.times(3, (i) => (
            <Paragraph key={i} />
          ))}
          {_.times(1, (i) => (
            <Paragraph key={i} />
          ))}
          <Paragraph />
          {_.times(4, (i) => (
            <Paragraph key={i} />
          ))}
        </Container>
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
          <Container textAlign='center'>
            <Divider inverted section />
            <Image src='/logo.png' centered size='mini' />
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='/'>
                About
              </List.Item>
              <List.Item as='a' href='/'>
                Contact Us
              </List.Item>
              <List.Item as='a' href='/'>
                Terms and Conditions
              </List.Item>
              <List.Item as='a' href='/'>
                Privacy Policy
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}
