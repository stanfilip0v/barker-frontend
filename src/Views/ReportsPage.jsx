import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { StateConsumer } from '../Components/Contexts/state-context';
import ReportsService from '../Services/report-service';

class Reports extends Component {
    state = {
        reports: []
    }

    static service = new ReportsService();

    async componentDidMount() {
        const response = await Reports.service.getReports();

        this.setState({
            reports: response.reports
        });
    }

    discardReport = async (reportId) => {
        await Reports.service.discardReport(reportId);
        const response = await Reports.service.getReports();

        this.setState({
            reports: response.reports
        });
    }

    render() {
        return (
            <main className="reports-main">
                <h2>Reports</h2>
                {this.state.reports.length > 0
                    ? this.state.reports.map((report) => (
                        <div className="report" key={report._id}>
                            <p>{report.content}</p>
                            <ul>
                                <li><button onClick={() => this.discardReport(report._id)}>Discard</button></li>
                                <li><Link to={`${report.bark.creator.username}/${report.bark._id}`}>View Bark</Link></li>
                            </ul>
                        </div>
                    ))
                    : <h4>No reports</h4>}
            </main>
        )
    }
}

const ReportsWithContext = () => {
    return (
        <StateConsumer>
            {
                (state) => (
                    !state.isLogged || !state.isAdmin
                        ? <Redirect to='/' />
                        : <Fragment>
                            <Header />
                            <Reports />
                            <Footer />
                        </Fragment>
                )
            }
        </StateConsumer>
    )
}

export default ReportsWithContext;