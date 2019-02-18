import React from 'react';
import moment from 'moment';

const Notifications = ({notifications}) => {
    return(
       <div className="section">
           <h5 className="grey-text text-darken-3">Notifications</h5>
            <ul className="notifications">
                { notifications && notifications.map(item => {
                    return (
                        <li key={item.id}>
                            <span className="pink-text">{item.user}</span>
                            <span>{item.content}</span>
                            <span className="grey-text  note-date">
                                {moment(item.time.toDate()).fromNow()}
                            </span>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

export default Notifications;