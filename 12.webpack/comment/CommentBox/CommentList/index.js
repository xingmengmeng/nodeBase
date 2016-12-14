import React,{Component} from 'react';
require('moment/locale/zh-cn.js');
import moment from 'moment';

export default class CommentList extends Component{
   render(){
       //this.deleteComment.bind(this,item.id)
       return (
           <ul className="list-group">
               {
                   this.props.comments.map((item,index)=>{
                        return <li key={index} className="list-group-item">
                            {item.name}:{item.content}  <span className="pull-right">{moment(item.createAt).fromNow()}<button className="btn btn-danger btn-xs" onClick={()=>this.props.deleteComment(item._id)}>删除</button></span>
                        </li>
                   })
               }
           </ul>
       )
   }
}