import React,{Component} from 'react';
export default class CommentList extends Component{
   render(){
       //this.deleteComment.bind(this,item.id)
       return (
           <ul className="list-group">
               {
                   this.props.comments.map((item,index)=>{
                        return <li key={index} className="list-group-item">
                            {item.name}:{item.content}  <span className="pull-right">{item.createAt.toLocaleString()}<button className="btn btn-danger btn-xs" onClick={()=>this.props.deleteComment(item.id)}>删除</button></span>
                        </li>
                   })
               }
           </ul>
       )
   }
}