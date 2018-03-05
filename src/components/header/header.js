import React, {Component} from 'react';

// var i =4;
// console.log("eeee",i);
// for(var i=0; i<3; i++){
//   // var i =3;
//   console.log(i);
// };
// console.log("ffff",i);
//
// const arr = [1,2,3,4];
// arr[2]=23;
// console.log(arr);
// arr.splice(1,1);
// console.log(arr);
// arr.push("poksw");
// console.log(arr);
//
// {let y=3;console.log(y);}
// let y=10
//
// console.log("let y:",y);


export default class Header extends Component {
  constructor(props){
    super(props);
    this.state={
      data:this.props.data,

    }
  }

  render() {
      return (
        <div className="header">
        </div>
      );
  }
}
