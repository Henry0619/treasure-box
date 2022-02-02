import React from 'react';
import {useState} from 'react';
import ReactDOM  from 'react-dom';
const colors=["red","yellow","blue","green","pink","cyan","grey","brown"];
let i=0;
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "white"};
//   }
//   componentDidMount() {
//     setInterval(() => {
//       i++;

//       this.setState({favoritecolor: color[i%color.length]})
      
//       document.getElementById('span').style.color=color[i%color.length];
//     }, 1000)
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is <span id='span'>{this.state.favoritecolor}</span></h1>
//     );
//   }
// }
//export default Car;
// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {visible: true};
//   }
//   delHeader = () => {
//     this.setState({visible: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.visible) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }
// export default Container;
function Garage() {
  const [name, setName] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name.</label>
      <input type="text"  placeholder='Please input your name.' onChange={(e) =>{alert(e.target.value)}}/>
      <input type="submit" />
    </form>
  )
}
export default Garage;

