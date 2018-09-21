import React from 'react';
import { Container, Row, Col, Grid, Thumbnail, Text } from 'native-base';
import { Image } from 'react-native';

interface ProfileProps {
    ProfileName: string;
    ProfileDesc: string;
    ImageUrl: string;
    NumberOfPosts: number;
    Followers: number;
    Following: number;
    ImagesForProfile:Array<string>

}
const Profile: React.SFC<ProfileProps> = (props: ProfileProps) => {
    const Images=   props.ImagesForProfile.map((ele,ind)=>{
        return <Image key={ind} source={{uri:ele}}/>
    })
    console.log(Images)
    return (
        <Container>
            <Grid>
                <Row>
                    <Col>
                        <Thumbnail source={{ uri: props.ImageUrl }} />
                        <Text>
                            {props.ProfileName}
                        </Text>
                        <Text>
                            {props.ProfileDesc}
                        </Text>
                    </Col>
                    <Col>
                 
                    <Text>{props.ImagesForProfile.length}</Text>
                   
                    
                        <Text>{props.Followers}</Text>
                        <Text>{props.Following}</Text>
                    </Col>
                </Row>
                <Row>
                 {Images}
                </Row>
            </Grid>
        </Container>
    )
}
export default Profile