import React from 'react';
import { Thumbnail, Button, Text } from 'native-base';
import { FlatList, View } from "react-native";
import { StyleSheet } from 'react-native';

export interface StoryObjectType {
    Name: string;
    Stories: Array<string>;
    Time: number;
    ID: number;

}

export interface StoryProps {
    stories: Array<StoryObjectType>;
    onClick: (id: any) => void

}




const Stories: React.SFC<StoryProps> = (props: StoryProps) => {
    const styles = StyleSheet.create({
        paddingFromTop: {
            paddingRight: "2%",
        },
        container: {
            flex: 1,
            flexDirection: 'row',
            marginTop: "3.5%",
        },
        column: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',       //THIS LINE HAS CHANGED
            paddingLeft: 10,
        },
        button: {
        }
    })

    let StoryData = props.stories.map(ele => {
        return (
            {
                StoryThumb: ele.Stories[0],
                ProfileName: ele.Name,
                StoryId: ele.ID
            }
        )
    })

    console.log(props);

    return (
        <FlatList horizontal data={StoryData} renderItem={({ item: rowData }) => {
            return (
                <View style={styles.container}>

                    <Button 
                        style={[styles.column, { width: 100, justifyContent: 'center' }]} 
                        onPress={() => { props.onClick(rowData.StoryId) } } 
                        transparent
                    >
                        <Thumbnail size={200} source={{ uri: rowData.StoryThumb }} />
                        <Text>{rowData.ProfileName.match(/^[^\s]+/)}</Text>

                    </Button>

                </View>




            )
        }}
            keyExtractor={({ }, index) => index.toString()} />

    )
}
export default Stories