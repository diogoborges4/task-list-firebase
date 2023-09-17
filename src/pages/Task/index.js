import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import db from "../../config/firebaseconfig";
import styles from "./style";
import {
  doc,
  getFirestore,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";
import { FontAwesome } from "@expo/vector-icons";

export default function Task({ navigation }) {
  const [task, setTask] = useState([]);

  const deleteTask = async (item) => {
    await deleteDoc(doc(db, "Tasks", item));
  };

  useEffect(() => {
    async function getCities() {
      const list = [];
      const TaskCol = collection(db, "Tasks");
      const citySnapshot = await getDocs(TaskCol);
      const cityList = citySnapshot.docs.map((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setTask(list);
    }

    getCities();
  }, [deleteTask]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.contextAllTasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id);
                }}
              >
                <FontAwesome
                  name="star"
                  size={23}
                  color={"#f92e64"}
                ></FontAwesome>
              </TouchableOpacity>
              <Text
                style={styles.descriptionTask}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  });
                }}
              >
                {item.description}
              </Text>
            </View>
          );
        }}
      />
      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  );
}
