import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BarkService from '../Services/bark-service';

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
                    {this.state.barks.map((bark) =>
                        <div className="bark" key={bark._id}>
                            <div className="image">
                                <img src={`${bark.creator.picture}`} alt='smh' />
                            </div>
                            <div className="content">
                                <ul>
                                    <li><Link to={`/users/${bark.creator._id}`}>{bark.creator.username}</Link></li>
                                    <li> {bark.creator.email}</li>
                                </ul>
                                <Link to={`/${bark.creator.username}/${bark._id}`}>
                                    <div className="bark-content">
                                        {bark.content}
                                    </div>
                                </Link>
                                <ul>
                                    <li>{bark.comments.length} Comments</li>
                                    <li>{bark.creationDate.split('T')[0]}</li>
                                    <li><i className="fas fa-heart"></i> {bark.likes}</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        )
    }
}

export default Feed;