import React, { Component } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "./styles.js";
import GetFilms from "./getFilms.js";
import FilmDetails from "./filmDetails.js";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      jwtToken: "",
    };
  }
  handleUserName = (text) => {
    this.setState({ userName: text });
  };

  login = () => {
    const val = this.state.userName.replace(/\s+/g, " ").trim();
    this.setState({ userName: "" });
    if (val == "") {
      alert("Username Cannot be empty.");
    } else if (/^[a-zA-Z0-9]+$/.test(val) == false) {
      alert("Enter a valid user name that contains letters and numbers");
    } else {
      try {
        fetch("https://filmblog.herokuapp.com/api/v1/login", {
          method: "POST",
          body: JSON.stringify({
            username: val,
          }),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            this.setState({ jwtToken: data.token });
          });
        alert("Login Successful");
      } catch (e) {
        console.log(e);
        console.log("------------------------");
      }
    }
    return false;
  };

  render() {
    const state = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.banner}>FILM BLOG</Text>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            placeholderTextColor="#45818e"
            autoCapitalize="characters"
            onChangeText={this.handleUserName}
            value={this.state.userName}
          />
          <View style={styles.loginView}>
            <Button
              title="LOGIN"
              color="#000000"
              borderRadius="15"
              style={styles.submitButton}
              onPress={() => {
                this.login();
              }}
            ></Button>
          </View>
          <FilmDetails _state={state} />
        </View>
      </ScrollView>
    );
  }
}
export default Login;
