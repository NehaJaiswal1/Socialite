import React from 'react';
import './Follow.css'; // Ensure you have a CSS file to style your component\
import a1 from '../assets/images/avatar1.jpg';
import a2 from '../../src/assets/images/avatar2.jpg';
import a3 from '../../src/assets/images/avatar3.jpg';
import a4 from '../../src/assets/images/avatar4.jpg';
import a5 from '../../src/assets/images/avatar5.jpg';

const UserProfile = ({ user }) => {
    return (
        <div className="user-info">
            <img src={user.icon} alt="User Icon" className="user-icon" />
            <div className="user-details">
                <p className="user-name">{user.name}</p>
                <p className="following">{user.following} Following</p>
            </div>
            <button className="follow-button">Follow</button>
        </div>
    );
};

const PeopleYouMayKnow = () => {
    const users = [
        { id: 1, name: 'John Doe', following: '120k', icon: a1 },
        { id: 2, name: 'Jane Smith', following: '95k', icon: a2 },
        { id: 3, name: 'Alice Johnson', following: '200k', icon: a3 },
        { id: 4, name: 'Bob Brown', following: '150k', icon: a4 },
        { id: 5, name: 'Charlie White', following: '80k', icon: a5 },
    ];

    return (
        <div className="box">
            <div className="container">
                <h4 className="headline">People You May Know</h4>
                <a href="#" className="see-all">See All</a>
            </div>

            {users.map(user => (
                <UserProfile key={user.id} user={user} />
            ))}
        </div>
    );
};

export default PeopleYouMayKnow;
