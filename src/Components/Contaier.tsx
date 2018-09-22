import React, { Component } from 'react';
import { Image, Dimensions, ScaledSize, StyleSheet } from 'react-native';

import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Comments from './Comments';
import Likes from './Likes';

import Stories from './Stories';



export interface Props {
    data: Array<ObjProps>
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
    display: string

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
            display: 'none'
        }
        this.showComments = this.showComments.bind(this)
    }
    showComments() {

        this.state.display === "none" ? this.setState({ display: "flex" }) : this.setState({ display: "none" });
    }


    render() {

        let newsFeed = this.props.data.map((ele, ind) => {
            console.log(ele.ThumbURL)
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

                            <Text style={Styles.padding}>
                                {ele.Like} Likes
                           </Text>
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
                            View All {ele.TotalComments} Comments
                        </Text>
                    </CardItem>
                    <CardItem bordered={true}>
                        <Text>{ele.Time} hours ago</Text>
                    </CardItem>
                </Card>
            )
        }
        )

        return (

            <Container>

                <Content>
                    <Stories stories={[{
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }, {
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }, {
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }, {
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }, {
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }, {
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }, {
                        image: "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image",
                        restImages: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKpWe4oP_CVOnRTTg_CTAUwox18qz8ffjLH_YvFnp7C-U8doWw", "https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"]

                    }]} />


                    {newsFeed}

                </Content>
            </Container>
        );
    }

}
