import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export interface HeaderProps {
    callback: (e:any)=>void
}
const AppHeader: React.SFC<HeaderProps> = (props: HeaderProps) => {

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent={true}>
                        <Icon name="camera" />
                    </Button>
                    <Title>InstaGram</Title>

                </Left>
                <Body>

                </Body>
                <Right>
                    <Button onPress={e=>props.callback(e)} transparent={true}>
                        <Icon name='search' />
                    </Button>

                </Right>
            </Header>
        </Container>
    );

}
export default AppHeader;