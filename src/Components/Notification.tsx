import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export interface Props {
  data: Array<PorpsOfObj>

}
interface PorpsOfObj {
  Picture: string,

  NotificationText: string,
  NotificationRegarding: string,
  NotificationDate: string
}
const Notification: React.SFC<Props> = (props: Props) => {
  props.data.map(ele => {

  })
  return (
    <Container>
      <Header>
        <Text>
          Showing Notification For
        </Text>
      </Header>
      <Content>
        <List>
          <ListItem itemDivider={true}>

          </ListItem>
          <ListItem>
            <Left>
              <Thumbnail source={{ uri: 'Image URL' }} />
            </Left>
            <Body>

              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right>
              <Thumbnail source={{ uri: "" }} square />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );

}
export default Notification;