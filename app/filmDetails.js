import React, { Component } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "./styles.js";

class FilmDetails extends Component {
  state = {
    filmName: "",
    rating: "",
  };

  handleFilmName = (text) => {
    this.setState({ filmName: text });
  };
  handleRating = (text) => {
    this.setState({ rating: text });
  };

  createFilm = () => {
    var filmTitle = this.state.filmName.replace(/\s+/g, " ").trim();
    var filmRating = this.state.rating;

    if (filmTitle == "") {
      alert("Film Title can not be empty");
    } else if (/^[a-zA-Z\s0-9-'@]+$/.test(filmTitle) == false) {
      alert(
        "Enter valid Movie name, contains letters, numbers and special characters like - ,@,'"
      );

      return false;
    } else if (filmRating == "") {
      alert("Film rating can not be empty");
      return false;
    } else if (filmRating < 0 || filmRating > 5) {
      alert("Film rating should be between 0 and 5");

      return false;
    } else {
      try {
        fetch("http://192.168.0.24:8080/api/v1/films", {
          method: "POST",
          body: JSON.stringify({
            name: filmTitle,
            rating: filmRating,
          }),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: "Bearer " + this.props._state.jwtToken,
          },
        }).then((resp) => {
          if (resp.status == 200) {
            alert("Successful");
          } else {
            alert(
              "Forbidden Error with status code" +
                resp.statusText +
                ":" +
                resp.status
            );
          }
        });
      } catch (e) {
        console.log(e);
        console.log("-------------------------");
      }
    }
    this.setState({ filmName: "" });
    this.setState({ rating: "" });

    return false;
  };
  modifyFilm = () => {
    var filmTitle = this.state.filmName.replace(/\s+/g, " ").trim();
    var filmRating = this.state.rating;
    this.setState({ jwtToken: this.props._state.jwtToken });

    if (filmTitle == "") {
      alert("Film Title can not be empty");
    } else if (/^[a-zA-Z\s0-9-'@]+$/.test(filmTitle) == false) {
      alert(
        "Enter valid Movie name, contains letters, numbers and special characters like - ,@,'"
      );
    } else if (filmRating == "") {
      alert("Film rating can not be empty");
    } else if (filmRating < 0 || filmRating > 5) {
      alert("Film rating should be between 0 and 5");
    } else {
      try {
        console.log(filmTitle, filmRating);
        fetch("http://192.168.0.24:8080/api/v1/films", {
          method: "PUT",
          body: JSON.stringify({
            name: filmTitle,
            rating: filmRating,
          }),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: "Bearer " + this.props._state.jwtToken,
          },
        }).then((resp) => {
          if (resp.status == 200) {
            resp.json().then((data) => {
              if (data.n > 0) {
                alert("rating value added successfully");
              } else {
                alert("Film Title does not exist");
              }
            });
          } else {
            alert("Forbidden Error with status code:" + resp.status);
          }
        });
      } catch (e) {
        console.log(e);
        console.log("-------------------------");
      }
    }
    this.setState({ filmName: "" });
    this.setState({ rating: "" });
    return false;
  };
  render() {
    return (
      <React.Fragment>
        <TextInput
          style={styles.input}
          placeholder="Film Title"
          placeholderTextColor="#45818e"
          onChangeText={this.handleFilmName}
          value={this.state.filmName}
        />
        <TextInput
          style={styles.input}
          placeholder="Rating"
          placeholderTextColor="#45818e"
          keyboardType="numeric"
          onChangeText={this.handleRating}
          value={this.state.rating}
        />
        <View style={styles.buttonsView}>
          <Button
            title="SUBMIT FILMS"
            color="#000000"
            onPress={() => this.createFilm()}
          ></Button>
          <Button
            title="MODIFY FILMS"
            color="#000000"
            onPress={() => this.modifyFilm()}
          ></Button>
        </View>
      </React.Fragment>
    );
  }
}

export default FilmDetails;
