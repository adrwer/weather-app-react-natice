import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Picker } from '@react-native-community/picker'

export default function UnitsPicker({ unitSystem, setUnitSystem }) {
    return (
        <View style={styles.picker}>
            <Picker selectedValue={unitSystem} onValueChange={(item) => setUnitSystem(item)} mode='dropdown' itemStyle={{ fontSize: 12 }}>
                <Picker.Item label='C°' value='metric'/>
                <Picker.Item label='F°' value='imperial'/>
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    picker: {
        marginLeft: 100,
        marginRight: 100
    }
})
