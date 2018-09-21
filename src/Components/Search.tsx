import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default interface SearchProps {
    term: string

}
interface Serachstate {
    term: string;
    results: Array<Object>
}
export default class SearchBar extends Component<SearchProps, Serachstate>{
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            term: "",
        results:[],
        }
    }
    render(){
        return(
            <Container>
            <Header />
            <Content>
              <List>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail square source={{ uri: 'Image URL' }} />
                  </Left>
                  <Body>
                    <Text>Sankhadeep</Text>
                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                  </Body>
                  <Right>
                    <Button transparent>
                      <Text>View</Text>
                    </Button>
                  </Right>
                </ListItem>
              </List>
            </Content>
          </Container>
        )
    }
}