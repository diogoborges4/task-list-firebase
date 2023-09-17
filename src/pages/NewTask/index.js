import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  navigation,
} from "react-native";

import db from "../../config/firebaseconfig";
import styles from "./style";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";

export default function NewTask({ navigation }) {
  const [description, setDescription] = useState(null);

  const addTask = async () => {
    await addDoc(collection(db, "Tasks"), {
      description: description,
      status: "false",
    });

    navigation.navigate("Task");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Ex: learning javaScript"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          addTask();
        }}
      >
        <Text style={styles.iconSave}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
