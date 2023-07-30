import React from 'react'
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter();
  const [activeJobType, setActivejobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>
          Hello Mike
        </Text>

        <Text style={styles.welcomeMessage}>
          Find a job
        </Text>

      </View>

      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            value ={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder = "Yo what sup">
          </TextInput>
        </View>
        
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
            source = {icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}>

          </Image>
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data = {jobTypes}
          renderItem = {({item}) => (
            <TouchableOpacity 
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActivejobType(item);
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>
              {item}
            </Text>
            </TouchableOpacity>
            
          )}
          keyExtractor={item => item}
          contentContainerStyle ={{ columnGap : SIZES.small}}
          horizontal
        />

      </View>
    </View>
  )
}

export default Welcome