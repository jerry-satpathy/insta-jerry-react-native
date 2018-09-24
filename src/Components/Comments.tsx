//To DO Make Comments Work


import React from 'react';

import { List, ListItem, Thumbnail, Left, Text, Right, Body, Container, Content, Header } from 'native-base'
import { StyleSheet } from 'react-native';

export interface Props {
  data: Array<CommentProps>;
  callBack: (props: boolean) => void;
  showComments: boolean;

}

interface CommentProps {
  CommentTime: number
  ProfileWhichCommented: string;
  Replies: string;
  Comment: string;

}
interface State {
  displayComments: boolean;
  commentProps: Array<any>
}

class ListOfComments extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.state = {
      displayComments: false,
      commentProps: []
    }
    this.showComments = this.showComments.bind(this)
  }
  showComments() {
    this.setState({ displayComments: true })
    this.props.callBack(true);

  }
  render() {

    if (this.props.data.length === 1 && this.state.displayComments === false) {
      return (
        <Content>
          <Left>
            <Text>
              {
                this.props.data[0].ProfileWhichCommented
              }

            </Text>

          </Left>
          <Body>
            <Text>
              {this.props.data[0].Comment}
            </Text>

          </Body>

        </Content>


      )
    }
    else if (this.props.data.length === 1) {
      let itemToRender = this.props.data.map((ele, ind) => {

        return (
          <ListItem key={ind}>

            <Body>
              <Text>{ele.ProfileWhichCommented}</Text>
              <Text note={true}>{ele.Comment}</Text>
            </Body>
            <Right>
              <Text note={true}>{ele.CommentTime}</Text>
            </Right>
          </ListItem>
        )
      })
   
      return (
        <Container>
          <Header>
            <Text>
              Viewing Comments
            </Text>
          </Header>
          <Content>
            <List>

              <Text onPress={this.showComments}>
                {itemToRender}



              </Text>
            </List>
          </Content>

        </Container>
      )
    }
    return (
      "Hello"
    )

  }
  componentDidMount() {
    console.log(this.props)
  }
}


export default ListOfComments;