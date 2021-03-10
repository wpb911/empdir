import React from 'react'

function Table(props){

    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name <button className='filter' onClick={props.sortName}><i className="fa fa-sort-alpha-asc"></i></button><button className='filter' onClick={props.sortNameA}><i className="fa fa-sort-alpha-desc"></i></button></th>
                <th>Phone Number <button className='filter' onClick={props.sortNumber}><i className="fa fa-sort-numeric-asc"></i></button><button className='filter' onClick={props.sortNumberA}><i className="fa fa-sort-numeric-desc"></i></button></th>
                <th>Email <button className='filter' onClick={props.sortEmail}><i className="fa fa-sort-alpha-asc"></i></button><button className='filter' onClick={props.sortEmailA}><i className="fa fa-sort-alpha-desc"></i></button></th>
                
                <th>Location(City, State, Country) <button className='filter' onClick={props.sortCountry}><i className="fa fa-sort-alpha-asc"></i></button></th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(user => 
                <tr style={{borderTop: "1px solid black"}}>
                <td>
                    <img src={user.picture.thumbnail} alt="profile pic"/>
                </td>
                <td>{user.name.last}, {user.name.first} </td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.location.city}, {user.location.state}, {user.location.country}</td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table