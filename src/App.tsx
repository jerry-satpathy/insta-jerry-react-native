import React from 'react';
import Card from './Components/NewsFeed';
import FooterWithButton from './Components/Footer'
import { Container, Content, Footer, Header } from 'native-base';
import Profile from './Components/profile';
import AppHeader from './Components/Header';
import Search from './Components/Search';

import DummyData from './Components/DummyData.json';
import Notification from './Components/Notification';
interface state {
  WhichComponent: string;
}

//Fix The Type Of compoennt to Render
let componentToRender: any =<Card data={DummyData.CardData}/>;

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
    componentToRender = <Profile ProfileName="Jerry Satpathy" ProfileDesc="I am an Inception" ImageUrl="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
      NumberOfPosts={201} Followers={100} Following={302} ImagesForProfile={["https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640", "https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif", "https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif"]}
    />

  }
  callBackForFooterSearchButton() {
    this.setState({
      WhichComponent: "search"
    })
    componentToRender = <Search />
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
      data={DummyData.CardData} />;

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
