import React, { Component } from 'react';
import BarkService from '../Services/bark-service';
import BarkPreview from './BarkPreview';

class Feed extends Component {
    state = {
        barks: [],
        content: ''
    }

    static service = new BarkService();

    async componentDidMount() {
        const barks = await Feed.service.getBarksByFollowing();

        this.setState({
            barks: barks.barksByFollowing
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        await Feed.service.createBark({ content: this.state.content });
        const barks = await Feed.service.getBarksByFollowing();

        this.setState({
            barks: barks.barksByFollowing,
            content: ''
        });
    }

    render() {
        return (
            <main className="user">
                <div className="bark-form">
                    <form>
                        <textarea name="content" onChange={this.handleChange} value={this.state.content}></textarea>
                        <button onClick={this.handleSubmit}>BARK!</button>
                    </form>
                </div>
                <div className="feed">
                    <h1>Feed</h1>
                    <BarkPreview barks={this.state.barks} />
                </div>
            </main>
        )
    }
}

export default Feed;