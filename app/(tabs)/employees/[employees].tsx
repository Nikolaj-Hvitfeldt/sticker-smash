import { employees } from "@/data/employees";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function EmployeesScreen() {
  const { employee: id } = useLocalSearchParams<{ employee: string }>();
  const employee = employees.find((employee) => employee.id === id);

  if (!employee) {
    return (
      <View style={styles.container}>
        <Text>Employee not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>{employee.name}</Text>
      <Text>{employee.role}</Text>
      <View>
        <InfoRow label="Department" value={employee.department} />
        <InfoRow label="Email" value={employee.email} />
        <InfoRow label="Age" value={String(employee.age)} />
        <InfoRow label="Location" value={employee.location} />
      </View>
    </View>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 26,
  },
});
