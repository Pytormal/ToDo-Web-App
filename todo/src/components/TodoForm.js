import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTask: ''
        };
    }
    local
    handleChanges = (e) => {

        this.setState({ ...this.state, newTask: e.target.value });
    }

    submitTask = (e) => {
        e.preventDefault();
        localStorage.setItem(
            this.props.addToDo(this.state.newTask),
            this.setState({ ...this.state, newTask: '' }))
    };

    saveData = () => {
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem(this.state.newTask, this.state.newTask)
    }
    }
    

    render() {
        return (
            <form className='nPut' onSubmit={this.submitTask}>
                
                <div className='btn-contain'>
                    
                    <button className='addButton' onClick={this.saveData}>Add</button>
                       
                        <div>
                            <input className='Input'
                            type='text'
                            name='task'
                            placeholder='add tasks'
                            value={this.state.newTask}
                            onChange={this.handleChanges}
                            />
                        </div>
                  
                </div >
                
                
              
            </form>
        )
    }
}

export default TodoForm

// saveData = () => {
//     if (typeof (Storage) !== "undefined") {
//         localStorage.setItem("newTask", this.state.newTask)
//     }
// }