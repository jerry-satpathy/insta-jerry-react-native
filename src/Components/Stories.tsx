import React from 'react';
import { Thumbnail, Row, Grid, Col, Button } from 'native-base';
import { StyleSheet } from 'react-native';

interface ObjectType {
    image: string,
    restImages: Array<string>
}

interface SearchBarProps {
    stories: Array<ObjectType>

}
const StoryViewer = (e:any) => {
 console.log(e,"Pressed")
}
const Stories: React.SFC<SearchBarProps> = (props: SearchBarProps) => {
const styles=StyleSheet.create({
    paddingFromTop:{
        paddingTop:"5%" ,
        paddingBottom: "5%",
    
    }
})
    let storyThumb = props.stories.map((ele,ind) => {

        return(
            <Col key={ind} style={styles.paddingFromTop}>
            <Button  transparent onPress={(event)=>StoryViewer(event)}>
                <Thumbnail  source={{ uri: ele.image }} />
                
            </Button>

        </Col>
        )
 

    })
    console.log(props.stories[0].image)
    return (
        <Grid>
            <Row>
                {storyThumb}
            </Row>
        </Grid>

    )
}
export default Stories