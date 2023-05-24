import { observer } from "mobx-react-lite";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList, View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
import { useStores } from "../root/hook/useStores";


export const UserListScreen = observer(() => {
    const  { usersStore } = useStores()
    const safearea = useSafeAreaInsets()
    useEffect(() => {
        //Todo: В catch должно быть отображение ошибок в натификациях
        void usersStore.usersRequest.fetch().catch((e) => console.log(e))
    }, [])

    console.log(usersStore.users)
return <View style={{flex:1}}>
    <View style={{flex:1, backgroundColor: 'red'}}/>
    <FlatList 
    data={usersStore.users}
    renderItem={({item}) => {
        console.log(item.first_name)
        return <View key={item.uid} style={styles.rowView}>
            {!!item.avatar && <Image source={{uri: item.avatar}} />}
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
   },
   text: {
    fontStyle: 'normal',
    color: '#000'
   },
  });
  