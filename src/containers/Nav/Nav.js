import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import Courses from '../Courses/Courses';
import Course from '../Course/Course';
import Users from '../Users/Users';
import Error from '../../components/404/404';

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
                <Switch>
                    <Route path="/" exact />
                    <Route path="/users" component={Users} />
                    <Route path="/courses" component={Courses} />
                    <Route path="/courses/:courseId/:courseTitle" component={Course} />
                    <Route component={Error} />
                </Switch>
            </header>
        )
    }
}

export default Nav;