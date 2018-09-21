import React, { Component } from 'react';

import { Container,  Footer, FooterTab, Button, Icon } from 'native-base';
import { CameraRoll } from 'react-native';
export interface Props{
  callBackForHomeButton:()=>void;
  callBackForProfileButton:()=>void;
  name:string

}
export default class FooterTabsIconExample extends Component<Props>{

openCamera(){
 
  CameraRoll.getPhotos({
    first:100,
    groupTypes:"All",

}).then(r=>{
    console.log(r.edges)
}).catch(err=>{
    console.log(err)
})
}

  render() {

    return (
      <Container>
   
        <Footer>
          <FooterTab>
            <Button onPress={this.props.callBackForHomeButton}>
              <Icon name="apps" />
            </Button>
            <Button onPress={this.openCamera}>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button onPress={this.props.callBackForProfileButton}>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
  componentWillMount(){
    console.log(this.props)
  }
  componentWillReceiveProps(state:any,props:any){
    console.log(state,props)
  }
}