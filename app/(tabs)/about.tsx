import { employees } from "@/data/employees";
import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.heading}>Our Team</Text>
      <Text style={styles.subheading}>
        Meet the people behind Sticker Smash
      </Text>

      {employees.map((employee) => (
        <Link key={employee.id} href={`/employees/${employee.id}`}>
          <Pressable style={styles.card}>
            <Text style={styles.name}>{employee.name}</Text>
            <Text style={styles.role}>{employee.role}</Text>
            <Text style={styles.department}>{employee.department}</Text>
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
  },
  content: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  card: {
    backgroundColor: "#2e3540",
    borderRadius: 10,
    padding: 16,
    width: "90%",
    height: 110,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  role: {
    fontSize: 14,
    color: "#ffd33d",
    marginTop: 2,
  },
  department: {
    fontSize: 12,
    color: "#aaa",
    marginTop: "auto",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  subheading: {
    fontSize: 16,
    color: "#aaa",
    marginBottom: 24,
  },
});
