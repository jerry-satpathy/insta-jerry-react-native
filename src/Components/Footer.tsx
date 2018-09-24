import React, { Component } from 'react';

import { Container, Footer, FooterTab, Button, Icon } from 'native-base';
import { CameraRoll } from 'react-native';
export interface Props {
  callBackForHomeButton: () => void;
  callBackForProfileButton: () => void;
  callBackForSearchButton: () => void;
  callBackForNotificationButton: () => void;

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
              <Icon name="home" type="MaterialIcons" />
            </Button>
            <Button ref="search">
              <Icon active={false} type="MaterialIcons" name="search" onPress={this.props.callBackForSearchButton} />
            </Button>
            <Button active={false} ref="Camera" onPress={this.openGallery}>
              <Icon name="add" type="MaterialIcons" />
            </Button>
            <Button ref="Notification" onPress={this.props.callBackForNotificationButton} >
              <Icon active={false} type="MaterialIcons" name="favorite-border" />
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