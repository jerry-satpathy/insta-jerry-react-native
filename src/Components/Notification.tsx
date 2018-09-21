import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

interface Props{
UserName:Array<string>;
UserAvatar:Array<string>;
NotificationTime:Array<string>;
Notification:Array<string>;

}
const Notification:React.SFC<Props>=(props:Props)=> {
  {props.UserName.forEach(ele=>{
           console.log(ele)       
  })}
    return (
      <Container>
        <Header />
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={{ uri: 'Image URL' }} />
              </Left>
              <Body>
                <Text>Kumar Pratik</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  
}
export default Notification;