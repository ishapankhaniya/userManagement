import { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { getUserList } from '../redux/operation';
import { useDispatch, useSelector } from 'react-redux';
import constants from '../common/constants';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';

const UserListScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [pageNumber, setPageNumber] = useState(1);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const userList = useSelector((state: any) => state?.userReducer?.userListData?.userList);
  const error = useSelector((state: any) => state?.userReducer?.userListData?.error);
  
  useEffect(() => {
    dispatch<any>(getUserList(pageNumber));
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <Pressable style={styles.container} onPress={() => {
        navigation.navigate("UserDetailsScreen", { user: item });
      }}>
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: item?.picture?.medium }} style={styles.imageStyle} />
          <Text style={styles.nameTextStyle}>{item?.name?.title + " " + item?.name?.first + "" + item?.name?.last}</Text>
        </View>
        <View>
          <Text style={styles.textStyle} numberOfLines={2}>{item?.location?.city ? item?.location?.city + " , " + item?.location?.country : item?.location?.country}</Text>
        </View>
      </Pressable>

    );
  };

// handle pull refresh data
  const handleRefresh = () => {
    setIsRefreshing(true);
    setPageNumber(1);
    dispatch<any>(getUserList(1));
    setIsRefreshing(false);
  }

// for pagination
  const handleLoadMoreData = () => {
    dispatch<any>(getUserList(pageNumber + 1));
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={'Users List'}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
      <FlatList
        data={userList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={() => {
            handleRefresh();
          }} /> // Pull-to-refresh
        }
        numColumns={2}
        onEndReached={() => {
          setPageNumber(pageNumber + 1);
          handleLoadMoreData();
        }}
        contentContainerStyle={{ alignItems: "center", marginTop: 10,marginBottom:50 }}
        onEndReachedThreshold={0.6}
      />
    </View>
  );
};
export default UserListScreen;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 7,
    paddingVertical: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  imageStyle: {
    height: 70,
    width: 70,
    borderRadius: 50
  },
  nameTextStyle: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    width: constants.screenWidth / 4 + 30,
    textAlign: "center",
    marginTop: 10
  },
  textStyle: {
    fontSize: 12,
    color: "black",
    width: constants.screenWidth / 3,
    textAlign: "center"
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  }
});
