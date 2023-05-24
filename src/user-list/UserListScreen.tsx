import { observer } from "mobx-react-lite";
import {View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect } from "react";
import { useStores } from "../root/hook/useStores";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { UserScreen } from "../user/UserScreen";


export const UserListScreen = observer(() => {
    const  { usersStore } = useStores()
    const navigation = useNavigation()
    const safearea = useSafeAreaInsets()

    useEffect(() => {
        //Todo: В catch должно быть отображение ошибок в натификациях
        void usersStore.usersRequest.fetch().catch((e) => console.log(e))
    }, [])
console.log(usersStore.users)
    return <View style={styles.container}>
    <FlatList 
    refreshing={usersStore.usersRequest.isLoading}
    onRefresh={() => void usersStore.usersRequest.fetch()}
    data={usersStore.users}
    contentContainerStyle={{paddingVertical: safearea.top}}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
    renderItem={({item}) => {
        console.log(item)
        return <View key={item.uid} onTouchStart={
            () => {
                usersStore.selectUser(item)
                navigation.navigate('User')
                }} style={styles.rowView}>
            {!!item.avatar && <Image resizeMode="contain" style={styles.imageStyle} source={{uri: item.avatar}} />}
            <Text style={styles.text}>{item.first_name}</Text>
        </View>
    }}
    />
    </View>
})


const styles = StyleSheet.create({
   rowView: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center'
   },
   text: {
    fontStyle: 'normal',
    color: '#000'
   },
   container: {
    flex:1
   },
   separator: {
    padding: 6,
  },
  imageStyle: {
    borderRadius: 18,
    marginEnd: 16,
     backgroundColor: 'gray',
     width: 36,
     height: 36,
  },
  });
  