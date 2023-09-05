import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './style'


type Props = {
  nameCategory: string,
  onRemove: () => void,
  onAddBalance: () => void
};


export function Categories({ nameCategory, onRemove, onAddBalance }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameCategory}>
        {nameCategory}
      </Text>

      <View style={styles.buttonForm}>
        <TouchableOpacity
          style={styles.buttonRemoveCategory}
          // passando a propriedade onRemove atribuida em <Participant />
          onPress={onRemove}>
          <Text style={styles.textButton}>
            -
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonAddBalance}
          // passando a propriedade onRemove atribuida em <Participant />
          onPress={onAddBalance}>
          <Text style={styles.textButton}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}