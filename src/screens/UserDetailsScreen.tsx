import { Image, StyleSheet, Text, View } from 'react-native';
import constants from '../common/constants';
import Header from '../components/Header';

const UserDetailsScreen = (props: any) => {
  const userDetails = props?.route?.params?.user;
  const date = new Date(userDetails?.dob?.date);
  const dobDate=date.toLocaleDateString();

  return (
    <View>
      <Header title={"User Details"}
        isUserDetailsFlag={true}
      />
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: userDetails?.picture?.medium }} style={styles.imageStyle} />
          <Text style={styles.nameTextStyle}>{userDetails?.name?.title + " " + userDetails?.name?.first + " " + userDetails?.name?.last}</Text>
        </View>
        <View style={{}}>
          <View style={styles.sectionStyle}>
            <Text style={[styles.textStyle, { marginRight: 0 }]}>{"Age : "}</Text>
            <Text style={styles.textStyle}>{userDetails?.dob.age}</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.textStyle}>
              {"DOB : "}
            </Text>
            <Text style={styles.textStyle}>{dobDate}</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.textStyle}>
              {"Phone : "}
            </Text>
            <Text style={[styles.textStyle, { width: constants.screenWidth - 150 }]}>{userDetails?.cell}</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.textStyle}>
              {"Email : "}
            </Text>
            <Text style={[styles.textStyle, { width: constants.screenWidth - 150 }]}>{userDetails?.email}</Text>
          </View>
          <View style={styles.sectionStyle}>
            <Text style={styles.textStyle}>
              {"Location : "}
            </Text>
            <Text style={[styles.textStyle, { width: constants.screenWidth - 130 }]} numberOfLines={2}>{userDetails?.location?.street?.number ? userDetails?.location?.street?.number + " , " + userDetails?.location?.street?.name+" , "+ userDetails?.location?.city + " , " + userDetails?.location?.country  : userDetails?.location?.street?.name+" , "+userDetails?.location?.city + " , " + userDetails?.location?.country}</Text>
          </View>

        </View></View>
    </View>

  );
};
export default UserDetailsScreen;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 7,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3
  },
  imageStyle: {
    height: 200, width: 200, borderRadius: 20, marginTop: 20
  },
  nameTextStyle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginHorizontal: 20
  },
  textStyle: {
    fontSize: 14,
    color: "black",
  },
  sectionStyle: {
    flexDirection: "row", marginTop: 10
  }
});