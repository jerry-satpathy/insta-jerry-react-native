import React from 'react';
import Card from './Components/Contaier';
import FooterWithButton from './Components/Footer'
import { Container, Content, Footer,Header } from 'native-base';
import Profile from './Components/profile';
import AppHeader from './Components/Header';
import Search from './Components/Search';
interface state {
  WhichComponent: string;

}
let componentToRender: any =<Profile ProfileName="Jerry Satpathy" ProfileDesc="I am an Inception" ImageUrl="https://imgplaceholder.com/420x320/ff7f7f/333333/fa-image"
NumberOfPosts={201} Followers={100} Following={302} ImagesForProfile={["https://vignette.wikia.nocookie.net/the-darkest-minds/images/4/47/Placeholder.png/revision/latest?cb=20160927044640", "https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif", "https://cdn.tutsplus.com/net/uploads/legacy/958_placeholders/placehold.gif"]}
/>
export default class App extends React.Component<{}, state>{
  constructor(props: any) {
    super(props);
    this.state = {
      WhichComponent: 'home',

    }
    this.callBackForFooterHomeButton = this.callBackForFooterHomeButton.bind(this);
    this.callBackForFooterProfileButton = this.callBackForFooterProfileButton.bind(this);
this.callBackForFooterSearchButton=this.callBackForFooterSearchButton.bind(this)
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
  callBackForFooterSearchButton(){
    this.setState({
      WhichComponent:"search"
    })
    componentToRender=<Search />
  }

  callBackForFooterHomeButton() {
   
    this.setState({ WhichComponent: "home" });

    componentToRender = <Card
      ThumbURL="https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
      Like={21}
      TotalComments={10}
      AllComments={["Hello "]}
      AllLikes={["Jerry Satpathy"]}
      Time={new Date()}
      Name="Jerry Satpathy"
      Location="Cuttack"
      ImageURL="https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" />;

  }
  render() {
//Check For Unused Props and remove it
console.log(componentToRender)
    return (
      <Container>
<Header>
<AppHeader callback={this.callBackForHeader} />
</Header>
     

        <Content >
 {componentToRender}
        </Content>
        <Footer>

          <FooterWithButton  callBackForHomeButton={this.callBackForFooterHomeButton} callBackForProfileButton={this.callBackForFooterProfileButton} callBackForSearchButton={this.callBackForFooterSearchButton} activeButton={this.state.WhichComponent} />
        </Footer>
      </Container>


    );
  }

  componentWillUpdate(){
    //console.log(this.state.WhichComponent)
console.log(componentToRender);
  }
}
