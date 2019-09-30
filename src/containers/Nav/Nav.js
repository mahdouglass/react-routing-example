import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Courses from '../Courses/Courses';
import Users from '../Users/Users';

class Nav extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to="/users">Users</Link></li>
                        <li><Link to="/courses">Courses</Link></li>
                    </ul>
                </nav>
                <Route path="/users" component={Users} />
                <Route path="/courses" component={Courses} />
            </header>
        )
    }
}

export default Nav;