import { View, TextInput, Text } from 'react-native';
import { useState } from 'react';
import tw, { useDeviceContext } from 'twrnc';

export default function HomeScreen () {
  useDeviceContext(tw);

  const titles = ["Core Values", "Product Concept", "Motivation", "Early Adopters", "Key Roles", "Viral Loop", "Revenue Streams", "1 Year Milestones", "7-Year Dream"];
  const rows = [0, 1, 2];
  const inputs = [0, 1, 2];

  return (
    <View style={tw`w-full h-screen`}>
      {
        rows.map((row) => (
          <View style={tw`w-full h-[33%] flex flex-row gap-0.5 mb-0.5`}>
            {inputs.map((col, index) => (
              <View key={index} style={tw`w-1/3`}>
                <Text style={tw`text-center font-bold`}>{titles[row * 3 + col]}</Text>
                <TextInput style={tw`h-full bg-gray-200 rounded-lg text-black py-2 pl-2 my-1`} multiline={true} />
              </View>
            ))}
          </View>
        ))
      } 
    </View>
  );
}