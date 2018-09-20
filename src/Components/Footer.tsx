import React, { Component } from 'react';
import { Container,  Footer, FooterTab, Button, Icon } from 'native-base';
export default class FooterTabsIconExample extends Component {
showHomePage(){
console.log("")
}
  render() {

    return (
      <Container>
   
        <Footer>
          <FooterTab>
            <Button onPress={this.showHomePage}>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}