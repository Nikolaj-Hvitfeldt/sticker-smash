import { employees } from "@/data/employees";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView>
      <Text>Our Team</Text>
      <Text>Meet the people behind Sticker Smash</Text>

      {employees.map((employee) => (
        <Link key={employee.id} href={`/employees/${employee.id}`}>
          <Pressable>
            <Text>{employee.name}</Text>
            <Text>{employee.role}</Text>
            <Text>{employee.department}</Text>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
