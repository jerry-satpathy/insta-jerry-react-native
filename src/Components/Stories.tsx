import React from 'react';
import { Thumbnail, Row, Grid, Col, Button, List, ListItem, Text } from 'native-base';
import { StyleSheet } from 'react-native';

export interface StoryObjectType {
    Name: string;
    Stories: Array<string>;
    Time: number;
}

export interface StoryProps {
    stories: Array<StoryObjectType>

}
const StoryViewer = (e: any) => {
    console.log(e, "Pressed")
}
const Styles = StyleSheet.create({
    padding: {
        paddingLeft: "-5%",
    }
})
const Stories: React.SFC<StoryProps> = (props: StoryProps) => {
    const styles = StyleSheet.create({
        paddingFromTop: {
            paddingTop: "5%",
            paddingBottom: "5%",
            paddingLeft: "5%"

        }
    })
    let StoryData = props.stories.map((ele, ind) => {
        return (
            <ListItem style={Styles.padding} key={ind}>
                <Thumbnail source={{ uri: ele.Stories[0] }} />
                <Text>{ele.Name}</Text>
            </ListItem>

        )


    })



    return (
        <List horizontal={true}>
            {StoryData}
        </List>

    )
}
export default Stories