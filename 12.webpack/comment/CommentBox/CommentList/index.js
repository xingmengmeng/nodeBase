import React,{Component} from 'react';
export default class CommentList extends Component{
   render(){
       return (
           <ul className="list-group">
               {
                   this.props.comments.map(function(item,index){
                        return <li key={index} className="list-group-item">
                            {item.name}:{item.content}  <span className="pull-right">{item.createAt.toLocaleString()}</span>
                        </li>
                   })
               }
           </ul>
       )
   }
}