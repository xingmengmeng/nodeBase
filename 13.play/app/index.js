// index.js
import React from 'react';
import { render } from 'react-dom';
import Banner from './Banner';

const IMAGE_DATA = [
    {
        src: require('./images/banner1.jpg'),
        alt: 'banner1',
    },
    {
        src: require('./images/banner2.jpg'),
        alt: 'banner2',
    },
    {
        src: require('./images/banner3.jpg'),
        alt: 'banner3',
    },
    {
        src: require('./images/banner4.jpg'),
        alt: 'banner4',
    },
];

render(
    <Slider
        items={IMAGE_DATA} //图片数据
        speed={1.2} //图片切换的速度(单位是秒)
        delay={2.1} //每隔多少秒切换一次
        pause={true} //鼠标移上去是否自动暂停
        autoplay={true}//是否自动播放
        dots={true} //是否显示导航小点
        arrows={true}//是否显示上一张和下一张箭头
    />,
    document.getElementById('app')
);