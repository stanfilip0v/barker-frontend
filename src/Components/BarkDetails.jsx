import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StateConsumer } from './Contexts/state-context';
import ReportService from '../Services/report-service';

class BarkDetails extends Component {
    state = {
        report: false,
        content: '',
        sent: false
    }

    static service = new ReportService();

    viewReportArea = () => {
        this.setState((prevState) => {
            return {
                report: !prevState.report
            }
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const barkId = this.props.bark._id;

        await BarkDetails.service.createReport(barkId, { content: this.state.content });

        this.setState({
            report: false,
            content: '',
            sent: true
        });

        setTimeout(() => {
            this.setState({
                sent: false
            });
        }, 10000)
    }

    render() {
        const { bark, userId, isAdmin, likeBark, deleteBark, isLiked } = this.props;

        return (
            Object.keys(bark).length === 0
                ? ''
                : <div className="bark">
                    <Link to={`/user/profile/${bark.creator._id}`}>
                        <div className="image">
                            <img src={`${bark.creator.picture}`} alt='smh' />
                            <span>{bark.creator.username}</span>
                        </div>
                    </Link>
                    <div className="content">
                        <ul>
                            <li> {bark.creator.email}</li>
                        </ul>
                        <div className="bark-content">
                            {bark.content}
                        </div>
                        <ul>
                            <li>{bark.creationDate.split('T')[0]}</li>
                            <li><i className="fas fa-heart" style={{ color: isLiked ? 'red' : 'black' }} onClick={() => likeBark(bark._id)}></i> {bark.likes}</li>
                            <li><i className="fas fa-flag"  onClick={this.viewReportArea}></i> Report</li>
                        </ul>
                        {userId === bark.creator._id || isAdmin ? <button onClick={() => deleteBark(bark._id)}>Delete</button> : null}
                        {this.state.report
                            ? <form onSubmit={this.handleSubmit}>
                                <textarea name="content" value={this.state.content} onChange={this.handleChange}></textarea>
                                <button>Report</button>
                            </form>
                            : null}
                        {this.state.sent ? <div>Report sent</div> : null}
                    </div>
                </div>
        )
    }
}

const BarkDetailsWithContext = (props) => {
    return (
        <StateConsumer>
            {
                (state) => (
                    <BarkDetails bark={props.bark} deleteBark={props.deleteBark} userId={state.userId} isAdmin={state.isAdmin} likeBark={props.likeBark} isLiked={props.isLiked} />
                )
            }
        </StateConsumer>
    )
}

export default BarkDetailsWithContext;