import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Comments from './Comments';
export interface Props {
    Name: string;
    Location: string;
    ImageURL: string;
    ThumbURL: string;
    Like: number;
    TotalComments: number;
    AllComments: Array<string>;
    AllLikes: Array<string>;
    Time: Date;



}
interface State {
    display: string
}
export default class CardImageExample extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            display: "none"
        }
    }
    showComments() {
        this.setState({
            display: "block"
        })
    }

    render() {
        console.log(this.props)
        return (

            <Container>

                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: this.props.ThumbURL }} />
                                <Body>
                                    <Text>{this.props.Name}</Text>
                                    <Text note>{this.props.Location}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: this.props.ImageURL }} />
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent>
                                    <Icon active name="thumbs-up" />
                                    <Text>{this.props.Like} Likes</Text>
                                </Button>
                            </Left>
                            <Body>
                                <Button transparent onPress={this.showComments}>
                                    <Icon active name="chatbubbles" />
                                    <Text>{this.props.TotalComments} Comments</Text>
                                </Button>

                                <Comments styles={Styles.HideDisplay} UserTime={new Date()} UserComment="Hello From The Other Side" UserIcon="https://vignette.wikia.nocookie.net/project-pokemon/images/4/47/Placeholder.png/revision/latest?cb=20170330235552" UserName="Jerry Satpathy" />


                            </Body>
                            <Right>
                                <Text>23hr ago</Text>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
const Styles = StyleSheet.create({
    HideDisplay: {
        display: 'none',
    }
})