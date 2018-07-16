import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import NavBar from '../component/NavBar.jsx';
import BlogSidebar from '../component/BlogSidebar.jsx';

export class MainHome extends React.Component{
    
    render(){
        return (
            <div>
                <NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-md-9">
                            <h1 className="text-center">Main Content</h1>
                        </div>
                        <div className="col">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
