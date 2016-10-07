/**
 * Created by yjf on 16-10-4.
 */
import React,{Component} from 'react';
import './style.css';
import RecommendContent from '../recommendContent';
import HotSpots from '../hotSpots';


class MenuContent extends Component{
  render(){
    return (
      <div className="menuContent">
        <RecommendContent/>
        <HotSpots/>
      </div>
    );
  }
}
export default MenuContent;
