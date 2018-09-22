import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Text, Thumbnail } from 'native-base';
interface PropsOfObj {
    ProfileName: string;
    ProfilePic: string;

}
export interface LikeProps {
    data: Array<PropsOfObj>;
    showLike: boolean
}
const LikesCount: React.SFC<LikeProps> = (props: LikeProps) => {
  
let nameToShow=props.data.map(ele=>{
    if(props.data.length<2){
        return(
            ele.ProfileName
        )
    }
    else{
        return(
            
        )
    }
})

let itemToRender = props.data.map((ele, ind) => {

    <List key={ind}>
        <ListItem avatar>
            <Left>


                <Thumbnail source={{ uri: ele.ProfilePic }} />
            </Left>
            <Body>
                <Text>{ele.ProfileName}</Text>

            </Body>

        </ListItem>
    </List>

})

if (props.showLike) {
    return (



        <Container>
            <Header />
            <Content>
                {itemToRender}
            </Content>
        </Container>
    )

}
    }
    else {
    return (
        <Text>
            Liked By
            </Text>
    )
}

export default LikesCount;
