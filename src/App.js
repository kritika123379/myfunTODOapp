import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title:"Simple crud app",
       act:0,
       index:'',
       datas:[]

    }
  }
  componentDidMount(){
    this.refs.name.focus();

  }
  fsubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let name=this.refs.name.value;
    let address=this.refs.address.value;

    if(this.state.act ===0){
      let data ={
        name,address
      }
      datas.push(data);
    }
    else{
      let index=this.state.index;
      datas[index].name=name;
      datas[index].address=address;

    }

    

    this.setState({
      datas:datas,
      act:0
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  fremove = (i) =>{
    let datas=this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  }
  fedit = (i) => {
    let data=this.state.datas[i];
    this.refs.name.value =data.name;
    this.refs.address.value=data.address;

    this.setState({
    act:1,
    index:i
    });

    this.refs.name.focus();
  }
  
  render() {
    let datas=this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myName">
        <input type="text" ref="name" placeholder="yur name" className="formField"/>
        <input type="text" ref="address" placeholder="your address" className="formField"/>
        <button onClick={(e)=>this.fsubmit(e)} className="mybutton">Submit</button>
        </form>
        <pre>
          {datas.map((data,i)=>
            <li key={i} className="mylist">
            {i+1}.{data.name}.{data.address}
            <button onClick={()=>this.fremove(i)} className="myButton">remove</button>
            <button onClick={()=>this.fedit(i)} className="myButton">Edit</button>
            </li>
            )}
        </pre>
      </div>
    )
  }
}

export default App
