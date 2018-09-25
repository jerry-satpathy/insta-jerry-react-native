import React from 'react';
import { Container, Row, Col, Grid, Thumbnail, Text, Button } from 'native-base';
import { Image, StyleSheet, ScrollView, } from 'react-native';
export interface ProfileProps {
    data: ProfilePropsDescriptor
}
interface ProfilePropsDescriptor {
    PhotosOfTheProfile: Array<string>;
    Name: string;
    ProfileDescription: string
    Followers: number;
    Following: number;
    ProfileLinkDescription: string;
    ProfilePicture: string;


}
const ImageArrayToGrid = (totalColumns: number, image: Array<string>) => {
    let gridArray: Array<Array<string>> = [[]]
    let countColumns = 1
    for (let i = 0; i < image.length; i++) {
        gridArray[gridArray.length - 1].push(
            image[i]
        )
        if (countColumns <= totalColumns) {
            countColumns++;
        }
        if (countColumns > totalColumns && i !== image.length - 1) {
            countColumns = 1;
            gridArray.push([]);
        }
    }
    return gridArray
}

const renderGrid = (gridArray: Array<Array<string>>) => {

    return gridArray.map((row, ind) => (
        <Row key={ind}>{row.map((image, ind) => (<Col key={ind}><Image resizeMode="cover" key={ind} source={{ uri: image, height: 100, width: 100 }} /></Col>))}</Row>
    ));
}
const Profile: React.SFC<ProfileProps> = (props: ProfileProps) => {


    let ImagesToRender = ImageArrayToGrid(3, props.data.PhotosOfTheProfile);

    let Images = renderGrid(ImagesToRender)




    let Style = StyleSheet.create({
        paddingTop: {
            paddingTop: "10%"
        },
        paddingForProfileDescription: {
            padding: "5%",
            alignContent: 'center',
            fontSize: 18,

        },
        centerText: {
            textAlign: 'center'
        }
    })

    return (
        <Container>
            <Grid>
                <ScrollView>
                    <Row style={Style.paddingTop} size={25}>
                        <Col size={34}>
                            <Thumbnail source={{ uri: props.data.ProfilePicture }} />
                            <Text style={Style.paddingForProfileDescription}>
                                {props.data.Name}
                            </Text>
                            <Text style={Style.paddingForProfileDescription}>
                                {props.data.ProfileDescription}
                            </Text>
                            <Text style={Style.paddingForProfileDescription}>
                                {props.data.ProfileLinkDescription}
                            </Text>
                        </Col>

                        <Col size={22}>

                            <Text style={Style.centerText}>{props.data.PhotosOfTheProfile.length === 1 ? props.data.PhotosOfTheProfile.length + ~"\n" + "Post" : props.data.PhotosOfTheProfile.length + "\nPosts"}</Text>
                        </Col>
                        <Col size={22}>
                            <Text style={Style.centerText}>{props.data.Followers + ~"\n" + " Followers"}</Text>
                        </Col>
                        <Col size={22}>
                            <Text style={Style.centerText}>{props.data.Following + " Following"} </Text>


                        </Col>


                    






                    </Row>
                    <Button bordered dark block>
                                <Text>Follow</Text>
                            </Button>


                    {Images}

                </ScrollView>
            </Grid>
        </Container >
    )
}
export default Profile