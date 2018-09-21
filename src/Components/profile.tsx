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
    return (
        <Container>
            <Grid>
                <Row>
                    <Col>
                        <Thumbnail source={{ uri: "image url" }} />
                        <Text>
                            {props.ProfileName}
                        </Text>
                        <Text>
                            {props.ProfileDesc}
                        </Text>
                    </Col>
                    <Col>
                        <Text>{props.NumberOfPosts}</Text>
                        <Text>{props.Followers}</Text>
                        <Text>{props.Following}</Text>
                    </Col>
                </Row>
                <Row>
                    {props.ImagesForProfile.map(ele=>{
                        return <Image source={{uri:ele}}/>
                    })}
                </Row>
            </Grid>
        </Container>
    )
}
export default Profile