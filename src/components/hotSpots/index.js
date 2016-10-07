/**
 * Created by yjf on 16-10-4.
 */
import React,{Component}from 'react';
import './style.css';

class HotSpots extends Component{
  render(){
    return (
      <div className="hotSpots">
        <div className="h-top">
          <span className="h-top-hots">实时热点</span>
          <a className="hot-refresh">
            <div className="hot-refresh-icon"></div>
            <span className="hot-refresh-text">换一换</span>
          </a>
        </div>
        <ul className="s-news-rank-content">
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E5%BE%90%E8%8B%A5%E7%91%84%E8%80%81%E5%85%AC%E8%B4%9F%E5%B7%A8%E5%80%BA&amp;rsv_idx=2" target="_blank">徐若瑄老公负巨债</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E4%BA%9A%E5%90%89%E9%93%81%E8%B7%AF%E5%B0%86%E9%80%9A%E8%BD%A6&amp;rsv_idx=2" target="_blank">亚吉铁路将通车</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E6%97%85%E5%AE%A2%E6%BB%9E%E7%95%99%E5%8D%8E%E5%B1%B1%E5%B1%B1%E9%A1%B6&amp;rsv_idx=2" target="_blank">旅客滞留华山山顶</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E5%8A%A8%E7%89%A9%E5%9B%AD%E7%AD%BE%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE&amp;rsv_idx=2" target="_blank">动物园签安全协议</a><span class="new-identity"></span>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E8%AF%BA%E8%B4%9D%E5%B0%94%E5%A5%96%E5%B0%86%E6%8F%AD%E6%99%93&amp;rsv_idx=2" target="_blank">诺贝尔奖将揭晓</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=4%E4%BA%BA%E6%94%BE%E7%94%9F%E8%90%BD%E6%B0%B4%E5%A4%B1%E8%B8%AA&amp;rsv_idx=2" target="_blank">4人放生落水失踪</a>
          </li>
          <li className="news-meta-item">
                <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E5%8F%B8%E6%9C%BA%E8%B5%B6%E8%B7%AF%E9%AB%98%E9%80%9F%E5%A4%A7%E7%9D%A1&amp;rsv_idx=2" target="_blank">司机赶路高速大睡</a>
            </li>
          <li className="news-meta-item">
              <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E7%BD%97%E4%BB%B2%E8%B0%A6%E6%9D%A8%E6%80%A1%E5%A4%A7%E5%A9%9A&amp;rsv_idx=2" target="_blank">罗仲谦杨怡大婚</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E4%B9%90%E5%B1%B1%E5%A4%A7%E4%BD%9B%E6%B8%B8%E5%AE%A2%E7%88%86%E6%A3%9A&amp;rsv_idx=2" target="_blank">乐山大佛游客爆棚</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E4%B8%87%E4%BA%BA%E5%9B%B4%E8%A7%82%E5%A3%B6%E5%8F%A3%E7%80%91%E5%B8%83&amp;rsv_idx=2" target="_blank">万人围观壶口瀑布</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E8%B4%BE%E9%9D%99%E9%9B%AF%E6%80%80%E4%B8%8A%E7%AC%AC%E4%B8%89%E8%83%8E&amp;rsv_idx=2" target="_blank">贾静雯怀上第三胎</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E9%87%91%E9%A9%AC%E5%A5%96%E5%85%AC%E5%B8%83%E6%8F%90%E5%90%8D&amp;rsv_idx=2" target="_blank">金马奖公布提名</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E6%88%90%E9%83%BD%E5%8C%BA%E5%9F%9F%E9%99%90%E8%B4%AD&amp;rsv_idx=2" target="_blank">成都区域限购</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E6%A8%8A%E6%8C%AF%E4%B8%9C%E5%A4%BA%E5%8D%95%E6%89%93%E5%86%A0%E5%86%9B&amp;rsv_idx=2" target="_blank">樊振东夺单打冠军</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E6%A4%85%E7%BC%9D%E5%8F%96%E7%8E%A9%E5%85%B7%E8%A2%AB%E5%8D%A1%E6%89%8B&amp;rsv_idx=2" target="_blank">椅缝取玩具被卡手</a>
          </li>
          <li className="news-meta-item">
            <a className="title-content" href="https://www.baidu.com/s?cl=3&amp;tn=baidutop10&amp;fr=top1000&amp;wd=%E7%A6%BB%E5%BC%82%E5%A5%B3%E5%86%8D%E5%A9%9A%E9%81%AD%E5%AE%B6%E6%9A%B4&amp;rsv_idx=2" target="_blank">离异女再婚遭家暴</a>
          </li>
        </ul>
      </div>

    );
  }
}
export default HotSpots;
