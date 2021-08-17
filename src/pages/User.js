import React from 'react';
import UserForm from '../components/forms/UserForm';
import { API } from 'aws-amplify';

const User = (prop) => {
    const { users, loading } = prop.app;

    // console.log(users, loading)

    const del = (id) => {
        API.del('userapi',`/users/${id}`).then(
            res => console.log(res)
        )
    }

    const edit = (id) => {

    }

    return (
        <div className='App-page'>
            <div>
                <UserForm />
            </div>
            <div>{loading ? <>loading...</> : users.map(
                (user) => (
                    <div key={user.email}>
                        {user.firstname}
                        <button onClick={edit(user.firstname)}>edit</button>
                        <button onClick={del}>delete</button>
                    </div>
                )
            )}</div>
        </div>
    )
}

export default User
