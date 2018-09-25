import React from 'react';
import Card from './Components/NewsFeed';
import FooterWithButton from './Components/Footer'
import { Container, Content, Footer, Header } from 'native-base';
import Profile from './Components/profile';
import AppHeader from './Components/Header';
import Search from './Components/SearchBar';

import DummyData from './Components/DummyData.json';
import Notification from './Components/Notification';
interface state {
  WhichComponent: string;
}

//Fix The Type Of compoennt to Render
let componentToRender: any =<Card dataForStory={DummyData.StoriesForThisProfile} data={DummyData.CardData}/>;

export default class App extends React.Component<{}, state>{
  constructor(props: any) {
    super(props);
    this.state = {
      WhichComponent: 'home',

    }
    this.callBackForLikeButton=this.callBackForLikeButton.bind(this);
    this.callBackForFooterHomeButton = this.callBackForFooterHomeButton.bind(this);
    this.callBackForFooterProfileButton = this.callBackForFooterProfileButton.bind(this);
    this.callBackForFooterSearchButton = this.callBackForFooterSearchButton.bind(this);
    this.callBackForFooterNottificationButton=this.callBackForFooterNottificationButton.bind(this);
  }
  callBackForHeader(e: any) {
    console.log(e)
  }
  callBackForFooterProfileButton() {

    this.setState({ WhichComponent: "person" });
    componentToRender = <Profile data={DummyData.profileData}/>

  }
  callBackForFooterSearchButton() {
    this.setState({
      WhichComponent: "search"
    })
    componentToRender = <Search data={DummyData.AllTheProfiles} />
  }
  callBackForLikeButton(){
    this.setState({
      WhichComponent:"likes"
    })
  
  }
  callBackForFooterNottificationButton(){
    this.setState({
      WhichComponent:"notification"
    })
    componentToRender=<Notification data={DummyData.Notifiactions}/>
  }

  callBackForFooterHomeButton() {

    this.setState({ WhichComponent: "home" });

    componentToRender = <Card
     dataForStory={DummyData.StoriesForThisProfile} data={DummyData.CardData} />;

  }

  render() {
    //Check For Unused Props and remove it
   // console.log(componentToRender)
    return (
      <Container>
        <Header>
          <AppHeader callback={this.callBackForHeader} />
        </Header>


        <Content >
          {componentToRender}
        </Content>
        <Footer>

          <FooterWithButton callBackForNotificationButton={this.callBackForFooterNottificationButton} callBackForHomeButton={this.callBackForFooterHomeButton} callBackForProfileButton={this.callBackForFooterProfileButton} callBackForSearchButton={this.callBackForFooterSearchButton} activeButton={this.state.WhichComponent} />
        </Footer>
      </Container>


    );
  }

  componentWillUpdate() {
    //console.log(this.state.WhichComponent)
   // console.log(componentToRender);
  }
}
