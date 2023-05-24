import { observer } from 'mobx-react-lite'
import React, { useMemo } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import { useStores } from '../root/hook/useStores'

export const UserScreen = observer(() => {
  const { usersStore } = useStores()
  const user = useMemo(() => usersStore.selectedUser, [usersStore.selectedUser])

  return (
    <View>
      {!!user && (
        <View style={styles.root}>
          {!!user.avatar && (
            <Image resizeMode="contain" style={styles.imageStyle} source={{ uri: user.avatar }} />
          )}
          <View style={styles.separator} />
          <Text>{user.first_name}</Text>
          <Text>{user.last_name}</Text>
          <Text>{user.email}</Text>
        </View>
      )}
    </View>
  )
})
const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 18,
    marginEnd: 32,
    backgroundColor: 'gray',
    width: 72,
    height: 72,
  },
  separator: {
    padding: 8,
  },
  root: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
})
