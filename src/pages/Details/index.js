import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import db from "../../config/firebaseconfig";
import { doc, updateDoc } from "firebase/firestore";

export default function Details({ navigation, route }) {
  const [descriptionEdit, setDescriptionEdit] = useState(
    route.params.description
  );
  const idTask = route.params.id;

  const editTask = async (descriptionEdit, idTask) => {
    await updateDoc(doc(db, "Tasks", idTask), {
      description: descriptionEdit,
    });
    navigation.navigate("Task");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit:</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Ex: learning javaScript"
        onChangeText={setDescriptionEdit}
        value={descriptionEdit}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => {
          editTask(descriptionEdit, idTask);
        }}
      >
        <Text style={styles.iconSave}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}
