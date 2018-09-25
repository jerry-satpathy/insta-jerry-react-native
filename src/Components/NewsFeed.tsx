import React, { Component } from 'react';
import { Image, Dimensions, ScaledSize, StyleSheet } from 'react-native';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Comments from './Comments';
import Likes from './Likes';

import Stories, { StoryObjectType } from './Stories';





export interface Props {
    data: Array<ObjProps>,
    dataForStory:Array<StoryObjectType>
}
interface CommentProps {
    Comment: string;
    CommentTime: number;
    ProfileWhichCommented: string;
    Replies: string;
}
interface ProfileProps {
    ProfileName: string;
    ProfilePic: string;
}
interface ObjProps {
    CardData: Array<Object>;
    Name: string;
    Location: string;
    PictureForFeed: string;
    ThumbURL: string;
    Like: number;
    TotalComments: number;
    AllComments: Array<CommentProps>;
    AllLikes: Array<ProfileProps>;
    Time: number;
    FeedDesc: string




}


interface State {
    display: string;
    showLikes: boolean;
    showComments: boolean
}
let { width, height }: ScaledSize = Dimensions.get('window');
const Styles = StyleSheet.create({
    padding: {
        paddingTop: 10,

    },
    iconSize: {
        fontSize: 24,
        color: 'black'
    }
})

export default class CardImageExample extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            display: 'flex',
            showComments: false,
            showLikes: false
        }
        this.showLikes = this.showLikes.bind(this)
        this.showComments = this.showComments.bind(this)
    }
    showComments(bool: boolean) {

        this.setState({ showComments: bool })

    }
    showLikes(bool: boolean) {
        this.setState({ showLikes: bool })
    }

    render() {

        let newsFeed = this.props.data.map((ele, ind) => {
            if (this.state.showLikes === false && this.state.showComments === false) {
                return (
                    <Card key={ind}>
                        <CardItem header={true} bordered={true}>
                            <Left>
                                <Thumbnail source={{ uri: ele.ThumbURL }} />
                                <Body>
                                    <Text>{ele.Name}</Text>
                                    <Text note>{ele.Location}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody={true} bordered={true}>
                            <Image resizeMode="cover" source={{ uri: ele.PictureForFeed, width: width, height: height / 3.5 }} />
                        </CardItem>
                        <CardItem footer={true} bordered={true}>
                            <Left>
                                <Button transparent>
                                    <Icon active name="favorite-border" type="MaterialIcons" style={Styles.iconSize} />

                                </Button>
                                <Button transparent onPress={this.showComments}>
                                    <Icon active type="MaterialIcons" name="chat-bubble-outline" style={Styles.iconSize} />

                                </Button>

                                <Button transparent onPress={this.showComments}>
                                    <Icon type="MaterialIcons" active name="share" style={Styles.iconSize} />

                                </Button>
                            </Left>


                            <Body>





                            </Body>
                            <Right>

                            </Right>


                        </CardItem>
                        <CardItem bordered={true}>


                            <Left>
                                <Likes data={ele.AllLikes} callBack={this.showLikes} showLike={false} />
                            </Left>






                        </CardItem>

                        <CardItem bordered={true}>
                            <Left>
                                <Text>
                                    {ele.Name}
                                </Text>
                                <Text>
                                    {ele.FeedDesc}
                                </Text>
                            </Left>

                        </CardItem>
                        <CardItem>
                            <Text>
                                <Comments showComments={this.state.showComments} callBack={this.showComments} data={ele.AllComments} />

                            </Text>
                        </CardItem>
                        <CardItem bordered={true}>
                            <Text>{ele.Time} hours ago</Text>
                        </CardItem>
                    </Card>


                )
            }
            else if (this.state.showLikes === true && this.state.showComments === false) {

                return (

                    <Likes key={ind} data={ele.AllLikes} callBack={this.showLikes} showLike={this.state.showLikes} />

                )
            }
            else if (this.state.showLikes === false && this.state.showComments === true) {


                return (
                    <Comments showComments={this.state.showComments} callBack={this.showComments} data={ele.AllComments} />
                )
            }
        })


        return (

            <Container>

                <Content>
                  <Stories stories={this.props.dataForStory}/>


                    {newsFeed}

                </Content>
            </Container>
        );



    }

}
