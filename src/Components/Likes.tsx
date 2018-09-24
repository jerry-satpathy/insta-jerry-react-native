import React from 'react';
import { Container, Header, Content, Button, Icon, List, ListItem, Left, Body, Text, Thumbnail } from 'native-base';

interface PropsOfObj {
    ProfileName: string;
    ProfilePic: string;

}
interface State {
    ShowLike: boolean
}
export interface LikeProps {
    data: Array<PropsOfObj>;
    showLike: boolean
}
class LikesCount extends React.Component<LikeProps, State>{
    constructor(props: LikeProps) {
        super(props);
        this.state = {
            ShowLike: false
        }
        this.ShowLikes = this.ShowLikes.bind(this)
    }
    ShowLikes() {
        this.setState({ ShowLike: true })

    }
    render() {

        if (this.props.data.length > 1 && this.state.ShowLike === false) {
            return (
                this.props.data.length === 2 ?
                    <Left>
                        <Text onPress={this.ShowLikes}>
                            Liked By {this.props.data[0].ProfileName} and {this.props.data.length - 1} other
                       </Text>
                    </Left>
                    :
                    <Left>
                        <Text onPress={this.ShowLikes}>
                            Liked By {this.props.data[0].ProfileName} and {this.props.data.length - 1} others
                       </Text>

                    </Left>

            )
        }
        else if (this.props.data.length === 1 && this.state.ShowLike === false) {
            return (
                <Text>
                    Liked By {this.props.data[0].ProfileName}
                </Text>
            )
        }
        if (this.state.ShowLike === true) {
            let itemToRender = this.props.data.map((ele, ind) => {
                return (
                    <ListItem key={ind}>
                        <Left>
                            <Thumbnail source={{ uri: ele.ProfilePic }} />
                        </Left>
                        <Body>
                            <Text>
                                {ele.ProfileName}
                            </Text>

                        </Body>
                    </ListItem>
                )
            })
            return (
                <Container>
                    <Header>
                        <Left>
                            <Button transparent onPress={() => this.setState({ ShowLike: false })}>
                                <Icon name='arrow-back' />
                            </Button>
                        </Left>
                        <Body>
                            <Text>
                                Showing All Likes
            </Text>
                        </Body>
                    </Header>
                    <Content>
                        <List>
                            {itemToRender}
                        </List>
                    </Content>

                </Container>
            )
        }


    }
}



export default LikesCount;
