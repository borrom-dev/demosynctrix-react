import React from 'react';
import {Link} from 'react-router-dom';
export const MenuTo = ({children, active, to}) => (
    <Link to={to} className={`item ${active ? 'active' : '' }`}>{children}</Link>
)