import React, { Component } from 'react';
import { render } from 'react-dom';
import { ListItem,Button,Left,Right,Body } from 'native-base';

export default Notification extends Component{
    render(){
        return(
            <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#FF9501" }}>
                <Icon active name="plane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>

        )
    }
}