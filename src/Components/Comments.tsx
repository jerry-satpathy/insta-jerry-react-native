import React, { Component } from 'react';
import { Left, Text, Container, Body, Content, ListItem, List, Header } from 'native-base';
export default interface PropsToPass {

}
interface CommentPropsDescriptor {
  Comment: string;
  CommentTime: number;
  ProfileWhichCommented: string;
  Replies: string;
}
interface state {
  showComments: boolean
}
export interface CommentProps {
  data: Array<CommentPropsDescriptor>;
  callBack: (bool: boolean) => void;
  showComments: boolean;

}

export default class Comment extends Component<CommentProps, state>{
  constructor(props: CommentProps) {
    super(props);
    this.state = {
      showComments: this.props.showComments
    }
    this.ShowComments = this.ShowComments.bind(this)

  }
  ShowComments() {
    this.props.callBack(true);
    this.setState({ showComments: true })
  }
  render() {
    if (this.props.data.length === 1 && this.state.showComments === false) {
      return (
        <Container>
          <Left>
            <Text onPress={this.ShowComments}>
              {this.props.data[0].ProfileWhichCommented}
            </Text>
            <Text suppressHighlighting={true}>
              {this.props.data[0].CommentTime}
            </Text>
          </Left>
          <Body>
            <Text>
              {this.props.data[0].Comment}
            </Text>

          </Body>

        </Container>

      )
    }
    else if (this.props.data.length > 1 && this.state.showComments === false) {
      return (
        <Container>
          <Content>
            <Left>
              <Text onPress={this.ShowComments}>
                {this.props.data[0].ProfileWhichCommented}
              </Text>
              <Text suppressHighlighting={true}>
                {this.props.data[0].CommentTime}
              </Text>
            </Left>
            <Body>
              <Text>
                {this.props.data[0].Comment}
              </Text>

            </Body>
          </Content>
          <Content>
            <Left>
              <Text onPress={this.ShowComments}>
                View All {this.props.data.length} comments
              </Text>
            </Left>

          </Content>

        </Container>
      )
    }
    if (this.state.showComments === true) {
      let itemoRender = this.props.data.map(ele => {
        return (
          <ListItem thumbnail={true}>
            <Left>
              <Text>
                {ele.ProfileWhichCommented}
              </Text>
            </Left>
            <Body>
              <Text>
                {ele.Comment}
              </Text>
              <Text>
                {ele.Replies}
              </Text>
            </Body>
          </ListItem>
        )
      })
      return (
        <Container>
          <Header>
            <Text>
              Viewing All Comments
            </Text>
          </Header>
          <Body>
            <List>
              {itemoRender}
            </List>



          </Body>
        </Container>

      )
    }

  }
}

