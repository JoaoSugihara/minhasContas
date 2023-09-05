import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Categories } from '../../../components/Categories';

import { styles } from './styles'

export function Home() {

  const categories = [
    'Cartão Nubank',
    'Cartão Magalu',
    'Mercado',
    'Gastos pessoais',
    'Outros gastos',
    'Apartamento',
    'Combustível',
    'Etc..'
  ]

  function addCategory() {
    console.log('Adding category')
  }

  function removeCategory(category2: string) {
    console.log(`Removing category ${category2}`)
  }

  function addBalance() {
    console.log('Adding balance')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        INICIO
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Insira uma categoria"
          placeholderTextColor="#fff"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={addCategory}>
          <Text
            style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

        <Text style={styles.title2}>MINHAS CONTAS</Text>

      <FlatList
      data={categories}
      keyExtractor={ item => item } 
      renderItem={({ item }) => (
        <Categories
              key={item}
              nameCategory={item}
              onRemove={() => removeCategory('Cartão Nubank')}
              onAddBalance={addBalance} />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
        <Text style={styles.emptyText}>
          Nenhuma categoria encontrada, adicione mais categorias!
        </Text>
      )}
      />
      
       
      
    </View>
  );
}