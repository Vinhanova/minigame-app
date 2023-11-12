import { StyleSheet, Text, View, Pressable } from 'react-native'

const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    alert('')
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({ pressed }) => (pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer)} onPress={pressHandler}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.5
  }
})

export default PrimaryButton
