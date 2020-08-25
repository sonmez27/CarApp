import React from 'react';
import {View, Text, Image, Linking} from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';  
import Button from './Button';


const CarDetail = ({brand}) => {
    return(
     <Item>
        <ItemSection>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{brand.brand}</Text>
                <Text style={styles.headerText}>{brand.model[0].name}</Text>
            </View>
        </ItemSection>
        <ItemSection>
            <Image 
             style={styles.imageStyle}
             source={{uri: brand.model[0].image }}/>
        </ItemSection>
        <ItemSection>
            <Button buttonPress={() =>{
                Linking.openURL(brand.model[0].url);
            }} />
        </ItemSection>
    </Item>
    );
};

const styles = {
    headerContainer:{
        flexDirection: "column",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform:'uppercase'
    },
    imageStyle:{
        height: 300,
        flex: 1,
        width: 0
    }
};

export default CarDetail;
