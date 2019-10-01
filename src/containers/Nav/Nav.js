import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';

class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/users">Users</NavLink></li>
                        <li><NavLink to="/courses">Courses</NavLink></li>
                    </ul>
                </nav>
                <Route path="/users" component={Users} />
                <Route path="/courses" component={Courses} />
            </header>
        )
    }
}

export default Nav;