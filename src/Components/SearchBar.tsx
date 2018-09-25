import React, { Component } from 'react';
import { Container, Header, Item, Icon, Input, Button, Text, Content, List, ListItem, Left, Thumbnail, Body } from 'native-base';

import Fuse from 'fuse.js';
const Options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [
        "ProfileName"
    ]
}
interface DataForSearch {
    ProfileName: string;
    ProfilePicture: string;
    ProfileID: number;

}
interface State {
    term: string;
    componentToRender: any
}
export interface SearchProps {
    data: Array<DataForSearch>
}
export default class SearchBar extends Component<SearchProps, State> {
    constructor(props: SearchProps) {
        super(props);
        this.state = {
            term: "",
            componentToRender: null
        }
    }
    searchTermChange(term: string) {
        this.setState({ term: term });
        let fuse = new Fuse(this.props.data, Options);
        let resultsFromSearch = fuse.search(this.state.term);

        this.setState({ componentToRender: this.createComponentsToRender(resultsFromSearch) });
        if (term === "" || term === null || term === undefined || term.length === 0|| term===" ") {
            this.setState({ componentToRender: null })
        }


    }
    createComponentsToRender(results: Array<DataForSearch>) {
        if (results.length === 0) {
            return (
                <Text>
                    No Results Found
                </Text>
            )
        }
        return results.map((ele, ind) => {
            return <ListItem key={ind} thumbnail={true}>
                <Left>
                    <Thumbnail source={{ uri: ele.ProfilePicture }} />
                </Left>
                <Body>
                    <Text>
                        {ele.ProfileName}
                    </Text>
                </Body>
            </ListItem>
        })
    }
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={text => this.searchTermChange(text)} />
                        <Icon name="ios-people" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
                <Content>
                    <List>
                        {this.state.componentToRender !== null ? this.state.componentToRender : <Text>Enter A Name To Begin</Text>}
                    </List>
                </Content>
            </Container>
        )
    }

}