/**
 * Created by yjf on 16-9-25.
 */
import React, {Component} from 'react';
import './style.css';

class Nav extends Component{
  render(){
    return (
      <div className="nav">
        <div className="nav-left">
          <div className="s-weather-wrapper">
            <div className="s-mod-weather">
              <div className="weather-mod">
                <a className="city-weather" href="//www.baidu.com/s?tn=baidutop10&amp;rsv_idx=2&amp;wd=%E7%A7%A6%E7%9A%87%E5%B2%9B%E5%A4%A9%E6%B0%94%E9%A2%84%E6%8A%A5">
                  <div className="show-weather">
                    <span className="show-city">
                      <em className="show-city-name"> 秦皇岛： </em>
                    </span>
                    <span className="show-icon">
                      <span className="weather-icon" style={{background:'url(https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a7.png);*background-image:none;*filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/icon/weather/aladdin/png_18/a7.png, enabled=true'}}>
                      </span>
                      <em className="show-icon-temp">15℃</em>
                    </span>
                  </div>
                  <div className="show-pollution ">
                    <span className="show-airParam">
                      <em className="show-pollution-name">优</em>
                      <em className="show-pollution-num">39</em>
                    </span>
                    <span className="show-vertical">|</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="nav-left-r">
            <ul>
              <li>宝箱</li>
              <li>换肤</li>
              <li>消息</li>
            </ul>
          </div>

        </div>
        <ul className="clearfix">
          <li>糯米</li>
          <li>新闻</li>
          <li>hao123</li>
          <li>地图</li>
          <li>视频</li>
          <li>贴吧</li>
          <li>登陆</li>
          <li>设置</li>
          <li className="more">更多产品</li>
        </ul>
      </div>
    );
  }
}

export default Nav;
