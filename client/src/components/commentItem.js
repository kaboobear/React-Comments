import React, {Component} from 'react';
import {connect} from 'react-redux';
import Moment from 'react-moment';

class CommentItem extends Component {

    render() {
        const comment = this.props.data;

        return (
            <div className="comment-item">
                <div className="comment-img">
                    <img src="../img/com.jpg" alt=""/>
                </div>

                <div className="comment-content">
                    <div className="comment-top">
                        <div className="comment-title">{comment.author.login}</div>

                        <Moment className="comment-time" fromNow>{comment.createdAt}</Moment>
                    </div>

                    <div className="comment-text">{comment.text}</div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(CommentItem);