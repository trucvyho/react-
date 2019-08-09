import React from 'react';

class TaskForm extends React.Component{
    onCloseForm=()=>{
        this.props.onCloseForm();
    }
  render(){
    
    return(
                
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm công việc
                    <span 
                        className="fa fa-times-circle icon text-right"
                        onClick={this.onCloseForm}
                    ></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form action="">
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" className="form-control" name="name"/>
                            <br/>
                            <label>Trạng thái :</label>
                            <select name="status" className="form-control">
                                <option value="true">Kích hoạt</option>
                                <option value="false">Ẩn</option>
                            </select>
                        </div>
                        <br/>
                        <div className="text-center">
                            <button type="button" className="btn btn-warning">
                                <span className="fas fa-plus"></span>
                                &nbsp; Lưu lại
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger">
                                <span className="fas fa-times"></span>
                                &nbsp; Hủy bỏ
                        </button>
                        </div>
                        
                    </form>
                </div>
            </div>

  )};
}

export default TaskForm;
