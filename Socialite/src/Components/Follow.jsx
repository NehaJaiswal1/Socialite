import React from 'react';
import './Follow.css'; // Ensure you have a CSS file to style your component

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
        { id: 1, name: 'John Doe', following: '120k', icon: 'https://via.placeholder.com/50' },
        { id: 2, name: 'Jane Smith', following: '95k', icon: 'https://via.placeholder.com/50' },
        { id: 3, name: 'Alice Johnson', following: '200k', icon: 'https://via.placeholder.com/50' },
        { id: 4, name: 'Bob Brown', following: '150k', icon: 'https://via.placeholder.com/50' },
        { id: 5, name: 'Charlie White', following: '80k', icon: 'https://via.placeholder.com/50' },
    ];

    return (
        <div className="box">
            <div className="container">
                <h2 className="headline">People You May Know</h2>
                <a href="#" className="see-all">See All</a>
            </div>

            {users.map(user => (
                <UserProfile key={user.id} user={user} />
            ))}
        </div>
    );
};

export default PeopleYouMayKnow;
