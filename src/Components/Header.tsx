import React from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import {CameraRoll} from 'react-native'

export interface HeaderProps {
    callback: (e:any)=>void
}
const handleButtonPress=()=>{
    CameraRoll.getPhotos({
        first:100,
        groupTypes:"All",

    }).then(r=>{
        console.log(r)
    }).catch(err=>{
        console.log(err)
    })
}
const AppHeader: React.SFC<HeaderProps> = (props: HeaderProps) => {

    return (
        <Container>
            <Header>
           
            </Header>
        </Container>
    );

}
export default AppHeader;