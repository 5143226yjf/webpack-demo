/**
 * Created by yjf on 16-10-3.
 */
import React,{Component} from 'react';
import './style.css';

class Menu extends Component{

  handleChange(event) {
    return (this.style={background:'',color:'#fff'});
  };
  render(){
    return (
      <div className="menu-items">
        <div className="myConcern" onClick={this.handleChange}>
          <div className="img"></div>
          <div>我的关注</div>
        </div>
        <div className="item" style={{background:'#9a9da2',color:'#fff'}}>推荐</div>
        <div className="item" onClick={this.handleChange.bind(this)}>导航</div>
        <div className="item" onClick={this.handleChange}>视频</div>
        <div className="item" onClick={this.handleChange}>购物</div>
        <div className="icon"></div>
      </div>
    );

  }
}
export default Menu;
