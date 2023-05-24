import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, FlatList, Pressable, ActivityIndicator } from 'react-native'

import { useStores } from '../root/hook/useStores'

export const UserListScreen = observer(() => {
  const { usersStore } = useStores()
  const navigation = useNavigation()

  useEffect(() => {
    //Todo: В catch должно быть отображение ошибок в натификациях
    void usersStore.usersRequest.fetch().catch(e => console.log(e))
  }, [])

  return (
    <View style={styles.container}>
      {!usersStore.users && (
        <View style={styles.indicator}>
          <ActivityIndicator />
        </View>
      )}
      <FlatList
        contentContainerStyle={styles.flatlistContainer}
        refreshing={usersStore.usersRequest.isLoading}
        onRefresh={() => void usersStore.usersRequest.fetch()}
        data={usersStore.users}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => {
          return (
            <Pressable
              onPress={() => {
                usersStore.selectUser(item)
                navigation.navigate('User')
              }}
            >
              <View key={item.uid} style={styles.rowView}>
                {!!item.avatar && (
                  <Image
                    resizeMode="contain"
                    style={styles.imageStyle}
                    source={{ uri: item.avatar }}
                  />
                )}
                <Text style={styles.text}>{item.first_name}</Text>
              </View>
            </Pressable>
          )
        }}
      />
    </View>
  )
})

const styles = StyleSheet.create({
  rowView: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatlistContainer: {
    paddingTop: 16,
  },
  text: {
    fontStyle: 'normal',
    color: '#000',
  },
  container: {
    flex: 1,
  },
  separator: {
    margin: 8,
  },
  imageStyle: {
    borderRadius: 18,
    marginEnd: 16,
    backgroundColor: 'gray',
    width: 36,
    height: 36,
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
  },
})
