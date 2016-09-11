var React = require('react');
module.exports = React.createClass({
    render: function() {

        return (
            <div>
                <div className="AllRecW AllReclist">
                    <div className="AllRecR fl">
                        <div className="AllRecR_T">
                            <div className="AllRecR_Over f-l">
                                <a className="Headpic" href="#" target="_blank">
                                    <img src={this.props.peopleImg}/>
                                </a>
                                <a href="#" className="people-name">{this.props.peopleName}</a>

                            </div>
                        </div>
                    </div>
                    <div className="f-r people-count"><em className="orange">{this.props.peopleCount}</em>人次</div>
                    <div className="people-ip">
                        <p>{this.props.peopleIp}</p>
                        <p>{this.props.timeDate}</p>
                    </div>
                </div>
            </div>
        );
    }
});
