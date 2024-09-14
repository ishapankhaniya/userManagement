import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import backIcon from '../assets/backIcon.png';

const Header = (props: any) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {props?.isUserDetailsFlag && (
                   <Pressable onPress={(() => {
                    navigation.goBack();
                })}>
                        <Image source={backIcon} style={styles.backIcon} />
                </Pressable>
            )}
            <Text style={styles.textStyle}>{props?.title}</Text>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#3c5180",
        paddingHorizontal: 15,
        height: 60,
    },
    textStyle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        color: "white",
        fontWeight: "bold",
    },
    backButton: {
        position: 'absolute',
        left: 15,
        },
    backIcon: {
        width: 30,
        height: 20,
    },
});
