/**
 * Created by yjf on 16-9-27.
 */
import React,{Component} from 'react';
import './style.css';

class Search extends Component{
  render(){
    return (
      <div className="search">
        <div className="search-t">
          <img id="s_lg_img" src="https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png" width="270" height="129"/>
        </div>
        <div className="search-b">
          <input type="text" className="sr"/>
          <input type="submit" value="百度一下" className="tj"/>
        </div>

      </div>
    );
  }

}
export default Search;
