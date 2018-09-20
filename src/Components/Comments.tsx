import React from 'react';

import {List,ListItem,Thumbnail,Left,Text,Right,Body} from 'native-base'
import { ViewStyle } from 'react-native';

export interface Props{
    UserTime:Date
    UserName:string;
    UserIcon:string;
    UserComment:string;
    styles:ViewStyle;
}
const ListOfComments:React.SFC<Props>=(props)=>{
return(
    <List style={props.styles}>
    <ListItem avatar={true}>
      <Left>
        <Thumbnail source={{ uri: props.UserIcon }} />
      </Left>
      <Body>
        <Text>{props.UserName}</Text>
        <Text note={true}>{props.UserComment}</Text>
      </Body>
      <Right>
        <Text note={true}>{props.UserTime}</Text>
      </Right>
    </ListItem>
  </List>
)
}

export default ListOfComments;