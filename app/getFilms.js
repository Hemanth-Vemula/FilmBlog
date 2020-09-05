import React, { Component } from "react";
import { Table, TableWrapper, Row, Rows } from "react-native-table-component";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import styles from "./styles";
class GetFilms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: "",
      tableData: "",
      tableHead: ["S.No.", "FilmTitle", "rating"],
    };
  }

  getFilms = () => {
    var tableData = [];
    var i = 0;
    try {
      fetch("http://192.168.0.24:8080/api/v1/films", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((results) => {
          if (results.length > 0) {
            results.forEach((data) => {
              tableData.push([i + 1, data.name, data.rating]);
              i += 1;
            });
            this.setState({ tableData: tableData });
            this.setState({ flag: true });
          }
        });
    } catch (e) {
      console.log(e);
      console.log("-------------------------");
    }
  };
  render() {
    const state = this.state;
    return (
      <React.Fragment>
        <View style={styles.retrival}>
          <Button
            title="GET FILMS"
            color="#000000"
            onPress={() => this.getFilms()}
          ></Button>
        </View>
        <View style={styles.table}>
          {state.flag ? (
            <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
              <Row
                data={state.tableHead}
                style={styles.head}
                textStyle={styles.text}
              />
              <Rows data={state.tableData} textStyle={styles.text} />
            </Table>
          ) : null}
        </View>
      </React.Fragment>
    );
  }
}

export default GetFilms;
