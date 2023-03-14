import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
 
export default class Searchbox extends Component {
  data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  onSelectRow=(e)=>{
    console.log(e);
  }
 
  render() {
    return (
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        //data={this.data}
        callback={(record) => console.log(record)}
        onSelect={(e)=>this.onSelectRow(e)}
      />
    );
  }
}