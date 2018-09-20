import React from 'react';

import {List,ListItem,Thumbnail,Left,Text,Right,Body} from 'native-base'
import { StyleSheet } from 'react-native';


export interface Props{
    UserTime:Date
    UserName:string;
    UserIcon:string;
    UserComment:string;
    styles:any;
}
const ListOfComments:React.SFC<Props>=(props:Props)=>{
let styleSheet=StyleSheet.create({
  HideDisplay:{
    display: props.styles,
  }

})
return(
    <List style={styleSheet.HideDisplay}>
    <ListItem avatar={true}>
      <Left>
        <Thumbnail source={{ uri: props.UserIcon }} />
      </Left>
      <Body>
        <Text>{props.UserName}</Text>
        <Text note={true}>{props.UserComment}</Text>
      </Body>
      <Right>
        <Text note={true}>23 hours</Text>
      </Right>
    </ListItem>
  </List>
)
}

export default ListOfComments;