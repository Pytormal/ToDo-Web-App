import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import VideoBg from 'reactjs-videobg';
// import mp4 from "./components/girl.mp4";

import './components/reset.css';
import './components/main.css';
import './components/dual-screen.css';

const task = [
	{
		name: 'Enter your Todo items in box above',
		id: 123124,
		completed: false,
	},
	{
		name: 'Select or touch a task to complete it',
		id: 365475476,
		completed: false,
	},
	{
		name: 'click the "Clear Completed Tasks" button to remove your tasks',
		id: 3654756,
		completed: false,
	},
	{
		name: 'make as many tasks as you like!',
		id: 365411756,
		completed: false,
	},
	{
		name: 'best thing: it supports dual screen phones like the Surface Duo!',
		id: 3654117562,
		completed: false,
	},
	{
		name: 'Enjoy the App!',
		id: 36541231756,
		completed: false,
	},
	{
		name: 'new features to come',
		id: 3654117561,
		completed: false,
	},
];

const ClearData = () => {
	localStorage.clear();
};

class App extends React.Component {
	// you will need a place to store your state in this component.
	// design `App` to be the parent component of your application.
	// this component is going to take care of state, and any change handlers you need to work with your state

	constructor() {
		super();
		this.state = {
			task,
		};
	}

	toggleTask = (taskId) => {
		console.log('task toggled', taskId);
		this.setState({
			task: this.state.task.map((task) => {
				if (taskId === task.id) {
					return {
						...task,
						completed: !task.completed,
					};
				}
				return task;
			}),
		});
	};

	addToDo = (toDoName) => {
		const newToDo = {
			name: toDoName,
			id: Date.now(),
			completed: false,
		};
		this.setState({
			...this.state,
			task: [...this.state.task, newToDo],
		});
	};

	clearCompleted = (e) => {
		e.preventDefault();
		this.setState({
			...this.state,
			task: this.state.task.filter((task) => !task.completed),
		});
	};

	render(props) {
		return (
			<section className='App'>
				<div className='h-container'>
					<h1 className='header'>Welcome to your Todo App!</h1>
					<TodoForm addToDo={this.addToDo} />
				</div>

				<div className='split'>
					<div className='todo-contain'>
						<TodoList
							toggleTask={this.toggleTask}
							task={this.state.task}
							clearCompleted={this.clearCompleted}
						/>
					</div>

					<div className='btn-contain2'>
						<button className='clr-btn' onClick={this.clearCompleted}>
							Clear Completed Tasks
						</button>
						<button className='clr-btn' onClick={ClearData}>
							Clear Local app data
						</button>
					</div>
				</div>

				<VideoBg>
					<VideoBg.Source
						src={
							'https://player.vimeo.com/external/384669529.sd.mp4?s=9298f360e4c1b897d738481bcfdc4a2f607e442a&profile_id=139&oauth2_token_id=57447761'
						}
						type=''
					/>
				</VideoBg>
			</section>
		);
	}
}

export default App;
