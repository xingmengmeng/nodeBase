import React,{Component} from 'react';
export default class CommentList extends Component{
   render(){
       return (
           <ul className="list-group">
               <li className="list-group-item">
                   张三:今天好冷,快开空调  2016年12月14日12:52:52
               </li>
               <li className="list-group-item">
                   李四:是呀，太冷了,把穿上吧  2016年12月14日12:52:52
               </li>
           </ul>
       )
   }
}