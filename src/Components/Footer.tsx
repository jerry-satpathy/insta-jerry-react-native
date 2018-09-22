import React, { Component } from 'react';

import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
import { CameraRoll } from 'react-native';
export interface Props {
  callBackForHomeButton: () => void;
  callBackForProfileButton: () => void;
  callBackForSearchButton: () => void;
  activeButton: string

}
interface State {
  activeButton: string
}
export default class FooterTabsIconExample extends Component<Props, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      activeButton: this.props.activeButton
    }
  }
  openGallery() {

    CameraRoll.getPhotos({
      first: 100,
      groupTypes: "All",


    }).then(r => {
      console.log(r.edges)
    }).catch(err => {
      console.log(err)
    })
  }
  changeActiveButton() {

  }
  render() {

    return (
      <Container>

        <Footer>
          <FooterTab>
            <Button active={true} ref="Home" onPress={this.props.callBackForHomeButton}>
              <Icon name="home" />
            </Button>
            <Button ref="search">
              <Icon active={false} name="search" onPress={this.props.callBackForSearchButton} />
            </Button>
            <Button active={false} ref="Camera" onPress={this.openGallery}>
              <Icon name="add" />
            </Button>
            <Button ref="AddPhotos" >
              <Icon active={false} name="camera" />
            </Button>

            <Button ref="profile" onPress={this.props.callBackForProfileButton}>
              <Icon active={false} name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }


}