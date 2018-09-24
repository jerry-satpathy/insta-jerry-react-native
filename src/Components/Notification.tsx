import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export interface Props {
  data: Array<PorpsOfObj>

}
interface ArrayOfNotifications {
  ProfileName: string;
  ProfilePicture: string;
  CommentText?: string;
}
interface PorpsOfObj {
  NotificationId: number;
  ArrayOfNotifications: Array<ArrayOfNotifications>,

  NotificationCategory: string,
  Picture: string,
  Time: number,
  date: string,

  NotificationRegarding: string,

}
//TODO Make the date renders properly and is not assigned what is returned from the server

const Notification: React.SFC<Props> = (props: Props) => {


  let itemsToRender = props.data.map((ele, ind) => {
    console.log(ele.ArrayOfNotifications.length)
    if (ele.NotificationCategory === "Comment" && ele.ArrayOfNotifications.length === 1) {

      return (
        <List key={ind}>
          <ListItem itemDivider>
            <Text>
              {ele.date}
            </Text>
          </ListItem>

          <ListItem>
            <Left>
              <Thumbnail source={{ uri: ele.ArrayOfNotifications[0].ProfilePicture }} />
              <Text>
                {ele.ArrayOfNotifications[0].ProfileName} commented  {ele.ArrayOfNotifications[0].CommentText} on your picture {ele.Time} minutes ago
                </Text>
            </Left>
  
            <Right>
              <Thumbnail source={{ uri: ele.Picture }} square={true} />

            </Right>
          </ListItem>
        </List>

      )

    }
    //Edit the notificatin time according to time returned from server
    else if (ele.NotificationCategory === "Comment" && ele.ArrayOfNotifications.length > 1) {
      return (
        <List key={ind}>
          <ListItem itemDivider>
            <Text>
              {ele.date}
            </Text>
          </ListItem>
          <ListItem>
            <Left>
              <Thumbnail source={{ uri: ele.ArrayOfNotifications[0].ProfilePicture }} />
              <Text>
                {ele.ArrayOfNotifications[0].ProfileName} and {ele.ArrayOfNotifications.length === 2 ? ele.ArrayOfNotifications.length - 1 + "other" : ele.ArrayOfNotifications.length + "others"} commented on your picture {ele.Time} minutes ago
            </Text>
            </Left>

            <Right>
              <Thumbnail source={{ uri: ele.Picture }} square={true} />
            </Right>
          </ListItem>
        </List>


      )
    }

    else if (ele.NotificationCategory === "Like" && ele.ArrayOfNotifications.length === 1) {
      return (
        <List key={ind}>
          <ListItem itemDivider>
            <Text>
              {ele.date}
            </Text>
          </ListItem>
          <ListItem>
            <Left>
              <Thumbnail source={{ uri: ele.ArrayOfNotifications[0].ProfilePicture }} />
              <Text>
                {ele.ArrayOfNotifications[0].ProfileName} liked your picture {ele.Time} hours ago
            </Text>
            </Left>

            <Right>
              <Thumbnail source={{ uri: ele.Picture }} square={true} />
            </Right>
          </ListItem>

        </List>

      )
    }
    else if (ele.NotificationCategory === "Like" && ele.ArrayOfNotifications.length > 1) {
      return (
        <List key={ind}>
          <ListItem itemDivider>
            <Text>
              {ele.date}
            </Text>
          </ListItem>
          <ListItem>
            <Left>
              <Thumbnail source={{ uri: ele.ArrayOfNotifications[0].ProfilePicture }} />
              <Text>
                {ele.ArrayOfNotifications[0].ProfileName} and {ele.ArrayOfNotifications.length === 2 ? ele.ArrayOfNotifications.length - 1 + "other" : ele.ArrayOfNotifications.length + "others"} liked your picture
          </Text>
            </Left>



            <Right>
              <Thumbnail source={{ uri: ele.Picture }} square={true} />
            </Right>
          </ListItem>
        </List>

      )
    }
    else {
      return (
        ""
      )
    }

  }
  )

  return (
    <Container>
      <Header>
        <Text>
          Your Notifications
        </Text>
      </Header>
      <Content>
        {itemsToRender}
      </Content>
    </Container>
  );

}
export default Notification;