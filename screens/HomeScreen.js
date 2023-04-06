import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
    return (
        <SafeAreaView className='bg-white pt-10'>
            <Text className='text-red-500'>
                {/* Header */}
                <View className="flex-row items-center space-x-2">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className='h-7 w-7 bg-gray-300 p-4 rounded-full'
                    />
                    <View className='flex-1'>
                        <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
                        <Text className="font-bold text-xl">Crrent location <Ionicons name="chevron-down-outline" size={20} color="cyan" /></Text>
                    </View>
                    <Ionicons name="person-outline" size={35} color="cyan" />
                </View>
                {/* search */}
                <View>
                    <View>
                        <Ionicons name="menu-outline" size={35} color="cyan" />

                    </View>
                </View>
            </Text>
        </SafeAreaView>
    );
};

export default HomeScreen;