import React, { useMemo } from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import createStyles from './TempletesScreen.styles';

interface TempletesScreenProps {
    navigation : any,
}

const TempletesScreen: React.FC<TempletesScreenProps> = ({navigation}) => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <SafeAreaView style={styles.commonFlex}>
            <View style={styles.templateContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('templateTitles')} style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

export default TempletesScreen;