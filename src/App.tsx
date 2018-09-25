import React from 'react';
import Card from './Components/NewsFeed';
import FooterWithButton from './Components/Footer'
import { Container, Content, Footer, Header, Left, Right, Body, Button, Title, Icon, Text } from 'native-base';
import Profile from './Components/profile';

import Search from './Components/SearchBar';

import DummyData from './Components/DummyData.json';
import Notification from './Components/Notification';
import { StyleSheet, Image, Dimensions, ImageBackground } from 'react-native';
interface state {
  WhichComponent: string;
  ComponentToRender: any
}

//Fix The Type Of compoennt to Render


export default class App extends React.Component<{}, state>{
  constructor(props: any) {
    super(props);
    this.state = {
      WhichComponent: 'home',
      ComponentToRender: null

    }
    this.callBackForStories = this.callBackForStories.bind(this)
    this.callBackForLikeButton = this.callBackForLikeButton.bind(this);
    this.callBackForFooterHomeButton = this.callBackForFooterHomeButton.bind(this);
    this.callBackForFooterProfileButton = this.callBackForFooterProfileButton.bind(this);
    this.callBackForFooterSearchButton = this.callBackForFooterSearchButton.bind(this);
    this.callBackForFooterNottificationButton = this.callBackForFooterNottificationButton.bind(this);
  }

  callBackForStories(id: any) {
    let { height, width } = Dimensions.get('window');
    let index = 0;

    let data = DummyData.StoriesForThisProfile.map(ele => {
      return {
        id: ele.ID,
        Story: ele.Stories
      }
    })
this.setState({})
    data.forEach(ele => {
      if (ele.id === id) {
        console.log(index, ele.Story.length)

        if (index < ele.Story.length) {
          let interval = setInterval(() => {

            if (index >= ele.Story.length) {
              clearInterval(interval)
              this.setState({
                ComponentToRender: <Card callBackForStory={this.callBackForStories} dataForStory={DummyData.StoriesForThisProfile} data={DummyData.CardData} />
              })
            }
            if (index < ele.Story.length) {
              this.setState({

                ComponentToRender: <ImageBackground source={{ uri: ele.Story[index] }} style={{ width: width, height: height }}>
                  <Text>Inside</Text>
                </ImageBackground>


              })
            }


            index += 1

          }
            , 4000)

        }


      }

    })

  }
  callBackForHeader(e: any) {
    console.log(e)
  }
  callBackForFooterProfileButton() {

    this.setState({
      WhichComponent: "person",
      ComponentToRender: <Profile data={DummyData.profileData} />
    });


  }
  callBackForFooterSearchButton() {
    this.setState({
      WhichComponent: "search",
      ComponentToRender: <Search data={DummyData.AllTheProfiles} />
    })

  }
  callBackForLikeButton() {
    this.setState({
      WhichComponent: "likes"
    })

  }
  callBackForFooterNottificationButton() {
    this.setState({
      WhichComponent: "notification",
      ComponentToRender: <Notification data={DummyData.Notifiactions} />
    })


  }

  callBackForFooterHomeButton() {

    this.setState({
      WhichComponent: "home", ComponentToRender: <Card
        callBackForStory={this.callBackForStories}
        dataForStory={DummyData.StoriesForThisProfile} data={DummyData.CardData} />
    });



  }

  render() {

    //Check For Unused Props and remove it
    // console.log(componentToRender)
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent={true}>
              <Icon name="camera" />
            </Button>


          </Left>
          <Body>
            <Title >InstaGram</Title>
          </Body>
          <Right>
            <Button transparent={true}>
              <Icon name='search' />
            </Button>

          </Right>
        </Header>




        <Content >
          {this.state.ComponentToRender}
        </Content>
        <Footer>

          <FooterWithButton callBackForNotificationButton={this.callBackForFooterNottificationButton} callBackForHomeButton={this.callBackForFooterHomeButton} callBackForProfileButton={this.callBackForFooterProfileButton} callBackForSearchButton={this.callBackForFooterSearchButton} activeButton={this.state.WhichComponent} />
        </Footer>
      </Container>


    );
  }
  componentDidMount() {
    this.setState({ ComponentToRender: <Card callBackForStory={this.callBackForStories} dataForStory={DummyData.StoriesForThisProfile} data={DummyData.CardData} /> })
  }
  componentWillUpdate() {
    //console.log(this.state.WhichComponent)
    //console.log(componentToRender);
  }
}
