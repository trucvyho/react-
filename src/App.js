import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm.js';
import Control from './components/Control.js';
import TaskList from './components/TaskList.js'

class App extends React.Component{
    constructor(props) {
      super(props);
    
      this.state = {
        tasks:[],
        isDisplayForm: false

      };
    }
    componentWillMount(){
        if(localStorage && localStorage.getItem('tasks')){
            var tasks =JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks : tasks
            })
        }
        console.log('componentWillMount');

    }
    onToggleForm=()=>{
        this.setState({
           isDisplayForm: !this.state.isDisplayForm
        })
    }
    onGenerateData=()=>{
        var tasks=[
        {
            id:this.generateID(),
            name:'Hoc lap trinh',
            status: true
        },
        {
            id:this.generateID(),
            name:'Di boi',
            status: false
        },
        {
            id:this.generateID(),
            name:'Ngu',
            status: true
        }
        ]
        this.setState(
        {
            tasks: tasks
        })
        localStorage.setItem('tasks',JSON.stringify(tasks));
        console.log(tasks);
    }
    s4(){
        return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
    }
    generateID(){
        return this.s4()+this.s4()+'-'+this.s4()+'-'+this.s4()+'-'+this.s4()
    }
    onCloseForm=()=>{
        this.setState({
           isDisplayForm:false
        })
    }
  render(){
    var {tasks, isDisplayForm}=this.state;// var tasks=this.state.tasks;
    var elmTaskForm=isDisplayForm ? <TaskForm onCloseForm={this.onCloseForm}/> : '';
    return(
        
        <div className="container">
            <div className="text-center">
                <h1>Quản lý công việc</h1>
                <br/>
            </div>


            <div className="row">
                <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4": ""}>
                 {/*Form*/}
                {elmTaskForm}
                    
                </div>

                <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8": "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                    <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                        <span className="fas fa-plus" ></span>
                        &nbsp;
                        Thêm công việc
                    </button>
                         &nbsp;
                    {/*<button type="button"
                             className="btn btn-danger"
                             onClick={()=>this.onGenerateData()}
                             >
                        Generate data
                    </button>*/}

                    <Control/>{/*Search and sort*/}

                    {<TaskList tasks={tasks}/>}
                </div>
            </div>
            </div>

    )

  }
}

export default App;
