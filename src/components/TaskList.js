import React from 'react';
import TaskItem from './TaskItem.js'

class TaskList extends React.Component{

  render(){
   var {tasks}= this.props; //var tasks=this.props.tasks;
    var elmTasks=tasks.map((task,index)=>{
        return <TaskItem key= {task.id} 
                        index={index} 
                        task={task}
                        onUpdateStatus={this.props.onUpdateStatus}
                        onDelete={this.props.onDelete}/>
    })
    return(  
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" name="filterName" id="input" className="form-control"/>
                                </td>
                                <td>
                                    <select name="filterStatus" className="form-control">
                                        <option value={-1}>Tất cả</option>
                                        <option value={0}>Ẩn </option>
                                        <option value={1}>Kích hoạt</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                           {elmTasks}
                        </tbody>
                    </table>
                </div>
            </div>
        )

    }
}

export default TaskList;
