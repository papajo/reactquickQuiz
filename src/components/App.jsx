import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
	constructor(props) {
		super(props);
		this.state = {
			questions: [
					{
						id: 1,
						text: 'What is your name?',
						choices: [
							{
								id: 'a',
								text: 'Michael'
							},
							{
								id: 'b',
								text: 'William'
							},
							{
								id: 'c',
								text: 'Justin'
							}
						],
						correct: 'c'
					},
					{
						id: 2,
						text: 'What is your last name?',
						choices: [
							{
								id: 'a',
								text: 'Bieber'
							},
							{
								id: 'b',
								text: 'Finch'
							},
							{
								id: 'c',
								text: 'O\'Mally'
							}
						],
						correct: 'c'
					},
					{
						id: 3,
						text: 'What is your girl friends name?',
						choices: [
							{
								id: 'a',
								text: 'Eva'
							},
							{
								id: 'b',
								text: 'Rose'
							},
							{
								id: 'c',
								text: 'Brittany'
							}
						],
						correct: 'b'
					},
					{
						id: 4,
						text: 'What is your pets name?',
						choices: [
							{
								id: 'a',
								text: 'Buster'
							},
							{
								id: 'b',
								text: 'Milo'
							},
							{
								id: 'c',
								text: 'Tippsy'
							}
						],
						correct: 'b'
					}
				],
				score: 0,
				current: 1
			}
	}
	render() {
	    return (
	        <div>
	            <QuestionList {...this.state} />
	        </div>
	    )
	}
}

export default App