import React, { Component } from 'react';
import axios from 'axios';
import Joke from './Joke';
import uuid from 'uuid/v4';
import './JokeList.css';

class JokeList extends Component {
	static defaultProps = {
		num: 10
	};
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]')
		};
		this.uniqueJokes = new Set(this.state.jokes.map((j) => j.joke));
		console.log(this.uniqueJokes);
	}
	componentDidMount() {
		if (this.state.jokes.length === 0) this.handleClick();
	}
	async getJokes() {
		try {
			let jokes = [];
			while (jokes.length < this.props.num) {
				let response = await axios.get('https://icanhazdadjoke.com/', {
					headers: { Accept: 'application/json' }
				});
				let newJoke = response.data.joke;
				if (!this.uniqueJokes.has(newJoke)) jokes.push({ id: uuid(), joke: newJoke, vote: 0 });
				else console.log(newJoke);
			}
			this.setState(
				(st) => ({
					loading: false,
					jokes: [ ...st.jokes, ...jokes ]
				}),
				() => {
					window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
				}
			);
		} catch (e) {
			alert(e);
			this.setState({ loading: false });
		}
	}
	handleVote = (id, delta) => {
		this.setState(
			(st) => ({
				jokes: st.jokes.map((j) => (j.id === id ? { ...j, vote: j.vote + delta } : j))
			}),
			() => {
				window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
			}
		);
	};
	handleClick = () => {
		this.setState({ loading: true }, this.getJokes);
	};
	render() {
		if (this.state.loading) {
			return (
				<div className="JokeList-spinner">
					<i className="fas fa-8x fa-laugh fa-spin" />
					<h1 className="JokeList-title">Loading...</h1>
				</div>
			);
		} else {
			let jokes = this.state.jokes.sort((a, b) => b.vote - a.vote);
			return (
				<div className="JokeList">
					<div className="JokeList-sidebar">
						<h1 className="JokeList-title">
							<span>Dad</span> Jokes
						</h1>
						<img
							src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
							alt="laughing emoji"
						/>
						<button className="JokeList-newJokes" onClick={this.handleClick}>
							New Jokes
						</button>
					</div>
					<div className="JokeList-jokes">
						{jokes.map((j) => {
							return (
								<Joke
									key={j.id}
									vote={j.vote}
									joke={j.joke}
									upVote={() => this.handleVote(j.id, 1)}
									downVote={() => this.handleVote(j.id, -1)}
								/>
							);
						})}
					</div>
				</div>
			);
		}
	}
}

export default JokeList;
