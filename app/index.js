import {View, ScrollView, SafeAreaView} from 'react-native';
import {useState} from 'react';
import { Stac, Stack, useRouter } from 'expo-router';

import{COLORS, icons, images, SIZES} from '../constants';
import{Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home = () =>
{
    const router = useRouter();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}> 
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: COLORS.lightWhite},
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconURL={icons.menu} dimension = "60%"/>
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconURL={images.profile} dimension = "100%" />
                    ),
                    headerTitle :""
            }}
            />
            
            <ScrollView>
                <View style={{
                    flex:1,
                    padding: SIZES.medium
                }}>
                    <Welcome>

                    </Welcome>
                    <Popularjobs>

                    </Popularjobs>

                    <Nearbyjobs>

                    </Nearbyjobs>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;