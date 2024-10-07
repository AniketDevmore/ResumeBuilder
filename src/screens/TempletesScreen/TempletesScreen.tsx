import { useMemo } from "react";
import { Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import createStyles from './TempletesScreen.styles'

const TempletesScreen = () => {
    const styles = useMemo(() => createStyles(), []);
    return (
        <SafeAreaView style={styles.commonFlex}>
            <View style={styles.templateContainer}>
                <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.templates}>
                    <Image style={styles.templateImg} source={require('../../assets/images/temp1.jpg')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default TempletesScreen;