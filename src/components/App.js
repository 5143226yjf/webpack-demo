import React from 'react';
import './app.css';
//import Todo from './todo';
import Nav from './nav-bar';
import Search from './search';
import Menu from './menu-items';
import MenuContent from './menuContent';



class AppComponent extends React.Component {
  //初始化
  constructor(props){
    super(props);
    // this.show=this.show.bind(this);
    this.a=1;
  }

  show(){
    alert(this.a)
  }

  render() {
    return (
      <div className="index">
       {/*onClick={()=>{this.show()}}>*/}
        <Nav/>
        <Search/>
        <Menu/>
        <MenuContent/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
