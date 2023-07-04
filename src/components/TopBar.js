import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity 
} from "react-native";
import React from "react";

const TopBar = ({
    input,
    setInput,
    onAddTask
}) => {
    return (
        <View style={styles.view1}>
            <TextInput
                placeholder="Ingresar tarea"
                style={styles.input}
                value={input}
                onChangeText={setInput}
            />
            <TouchableOpacity style={styles.button} onPress={onAddTask}>
                <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default TopBar;

const styles = StyleSheet.create({
    view1: {
        height: "12%",
        flexDirection: "row",
        gap: 20,
        paddingHorizontal: 10,
        paddingBottom: 10,
        justifyContent: "center",
        alignItems: "flex-end",
        backgroundColor: "azure",
        width: "100%",
    },
    input: {
        width: 180,
        height: 45,
        borderBottomColor: "#ffd700",
        borderBottomWidth: 3,
        color: "gray",
        fontSize: 20,
    },
    button: {
        height: 35,
        width: 90,
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "#ffd700",
        marginRight:15,
    },
    buttonText: {
        fontSize: 16,
        textAlign: "center",
    },
});
