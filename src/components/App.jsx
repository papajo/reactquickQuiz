import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

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
						correct: 'a'
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
								text: 'Selena'
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

	setCurrent(current) {
		this.setState({current});
	}	

	setScore(score) {
		this.setState({score});
	}

	render() {
		if(this.state.current > this.state.questions.length) {
			var scorebox = '';
			var results = <Results {...this.state} />
		} else {
			var scorebox = <Scorebox {...this.state} />
			var results = ';'
		}	
	
	    return (
	        <div>
	             {scorebox}
	            <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
	        	{results}
	        </div>
	    )
	}
}

export default App