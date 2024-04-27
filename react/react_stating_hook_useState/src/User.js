import React, { useState } from 'react';

function User() {

    const [user, setUser] = useState({ name: "", age: 0 });

    const updateName = newName => {
        setUser(prevUser => ({
            ...prevUser,
            name: newName
        }));
    };

    const updateAge = newAge => {
        setUser(prevUser => ({
            ...prevUser,
            age: newAge
        }));
    };

    return (
        <div>
            <p>Name: {user.name}, Age: {user.age}</p>
            <button onClick={() => updateAge(13)}>
                update age
            </button>
            <button onClick={() => updateName('Alex')}>
                update name
            </button>
        </div>
    );
}

export default User;
