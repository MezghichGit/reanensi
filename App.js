import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;

/*
import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
*/
/*
import React, { useState } from "react";
import { ScrollView, StyleSheet, View, Text, Image, TextInput, Button } from "react-native";
import { Checkbox, RadioButton } from "react-native-paper";

const App = () => {
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");
  const [value, setValue] = useState("first");
  const [checkedReact, setCheckedReact] = useState(false);
  const [checkedReactNative, setCheckedReactNative] = useState(false);
  const [isSelected, setSelection] = useState(false);

  const dislayData = ()=>{console.log(name +" "+email+" "+password + " "+value+ " "+checkedReact+ " "+checkedReactNative);}
  return (
    <ScrollView style={{ padding: 10 }}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://pbs.twimg.com/profile_images/1337422975151255553/AkeDXoIV_400x400.png',
        }} />
      <Text>Formulaire d'inscription:</Text>
      <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.label}>Nom: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder="Name"
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="Email"
        />
      </View>
      <View style={{ marginTop: 20, marginBottom: 20, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.label}>Password: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder="Password"
          keyboardType="numeric"
          textContentType={password}
          secureTextEntry={true}
        />
      </View>
      <Text>Vous êtes :</Text>
      <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
        <View style={styles.radio}>
          <RadioButton value="first" />
          <Text>Pro</Text>
        </View>
        <View style={styles.radio}>
          <RadioButton value="second" />
          <Text>Etudiant</Text>
        </View>
      </RadioButton.Group>
      <Text>Vous préférer:</Text>
      <View style={styles.checkbox}>
        <Checkbox
          status={checkedReact ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReact(!checkedReact);
          }}
        />
        <Text>React</Text>
      </View>
      <View style={styles.checkbox}>
        <Checkbox
          status={checkedReactNative ? 'checked' : 'unchecked'}
          onPress={() => {
            setCheckedReactNative(!checkedReactNative);
          }}
        />
        <Text>React Native</Text>
      </View>
      <View style={styles.button}>
        <Button title="Register" onPress={dislayData} />
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 50,
    width: 50,
    margin: 'auto'
  },
  label: {
    flex: 0.1
  },
  input: {
    flex: 0.9,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: 20
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center"
  },
  radio: {
    flexDirection: "row",
    alignItems: "center"
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }

});

export default App;*/
