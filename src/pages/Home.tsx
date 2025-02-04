import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MyHealthModule } from '../modules'
import { RouteParams } from '../routeParams'
import { LIGHT_BLACK, LIGHT_GREY } from '../shared/ui/colors'
import { globalStyles } from '../shared/ui/globalStyles'
import { StyledText } from '../shared/ui/components/StyledText'

type HomeProps = NativeStackScreenProps<RouteParams, 'Home'>

export default function Home(props: HomeProps) {
  const modules: MyHealthModule[] = [
    MyHealthModule.Calculators,
    MyHealthModule.Codes,
    MyHealthModule.Diary,
    MyHealthModule.Medicines,
  ]

  return (
    <View>
      <View style={globalStyles.defaultContainer}>
        <StyledText style={styles.helloText}>Olá, Fulano.</StyledText>
        <StyledText style={styles.letsTakeCareText}>
          Vamos cuidar da sua saúde hoje? ❤️
        </StyledText>

        <View style={styles.modulesContainer}>
          {modules.map((moduleName) => (
            <TouchableOpacity
              key={moduleName}
              onPress={() => {
                props.navigation.navigate(moduleName)
              }}
            >
              <View style={styles.moduleCard}>
                <StyledText>{moduleName}</StyledText>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  helloText: {
    fontSize: 20,
    marginBottom: 8,
  },
  letsTakeCareText: {
    fontSize: 16,
    color: LIGHT_BLACK,
  },
  modulesContainer: {
    marginTop: 32,
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 24,
    rowGap: 24,
  },
  moduleCard: {
    width: 108,
    height: 108,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,

    shadowColor: LIGHT_GREY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
})
