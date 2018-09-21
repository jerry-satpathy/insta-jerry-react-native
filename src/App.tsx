import React from 'react';
import Card from './Components/Contaier';
import FooterWithButton from './Components/Footer'
import { Container,Header,Content,Footer } from 'native-base';

import AppHeader from './Components/Header'
export default class App extends React.Component {

callBackForHeader(e:any){
  console.log(e)
}

  render() {
    
    return (
      <Container>
        <Header>
          <AppHeader callback={this.callBackForHeader}/>
        </Header>
        <Content>
    
        <Card
        ThumbURL="https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
        Like={21}
        TotalComments={10}
        AllComments={["Hello "]}
        AllLikes={["Jerry Satpathy"]}
        Time={new Date()}
        Name="Jerry Satpathy" 
        Location="Cuttack" 
        ImageURL="https://www.blackfootfamilydentistry.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png" />
        </Content>
        <Footer>

<FooterWithButton/>
        </Footer>
      </Container>
   

    );
  }
}
