import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A20F0F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  video: {
    width: 350,
    height: 275,
    alignSelf: "center",
  },
  input: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
    marginBottom: 20,
  },
  input2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    gap: 50,
  },
  fundouser: {
    marginBottom: 70,
    width: 150,
    height: 150,
    backgroundColor: "black",
    borderRadius: 80,
    marginTop: 60,
  },
  btsalvar: {
    color: "white",
  }
})

export default styles;