import React from 'react';

class TaskForm extends React.Component{
    constructor(props) {
      super(props);
    
      this.state = {
        name:'',
        status: false
      };
    }

    onCloseForm=()=>{
        this.props.onCloseForm();
    }

    onChange=(e)=>{
        var target=e.target
        var name = target.name
        var value = target.value
        if(name === 'status') {
            value =  target.value === 'true' ? true : false
        }
        this.setState({
            [name]:value,
        }) 
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state)
        //close frm va xoa du lieu
        this.onClear()
        this.onCloseForm()
    }

    onClear=()=>{
        this.setState({
            name:'',
            status: false
        })
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
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên :</label>
                            <input type="text" 
                                    className="form-control" 
                                    name="name" 
                                    value={this.state.name}
                                    onChange={this.onChange}/>
                            <br/>
                            <label>Trạng thái :</label>
                            <select name="status" 
                                    className="form-control" 
                                    value={this.state.status}
                                    onChange={this.onChange}>
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                        </div>
                        <br/>
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fas fa-plus"></span>
                                &nbsp; Lưu lại
                            </button>
                            &nbsp;
                            <button type="button" 
                                    className="btn btn-danger"
                                    onClick={this.onClear}>
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
