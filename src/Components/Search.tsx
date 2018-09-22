import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail,Item,Icon,Input, Text, Left, Body, Right, Button } from 'native-base';

interface Serachstate {
    term: string;
    results: Array<Object>
}
export default class SearchBar extends Component<{}, Serachstate>{
    constructor(props:null) {
        super(props);
        this.state = {
            term: "",
        results:[],
        }
    }
    searchTermChange(e:any){
      console.log(e)
      this.setState({
        term:e.target.value
      })
    }
    render(){
        return(
            <Container>
               <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" onChange={e=>this.searchTermChange(e)} />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
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