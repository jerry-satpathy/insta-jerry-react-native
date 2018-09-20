import React from 'react';
import Card from './Components/Contaier';
import FooterWithButton from './Components/Footer'
import { Container,Header,Content,Footer,Text } from 'native-base';


export default class App extends React.Component {



  render() {
    
    return (
      <Container>
        <Header/>
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
