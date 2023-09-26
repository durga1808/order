import { Breadcrumbs } from '@mui/material';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const BreadCrumbs = ({ customNames }) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            {pathnames.map((path, index) => {
                const isLast = index === pathnames.length - 1;

                return (
                    <span key={path}>
                        {isLast ? (
                            customNames[path] || path // Use custom name if available, or the path segment
                        ) : (
                            <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                                {customNames[path] || path}
                            </Link>
                        )}
                    </span>
                );
            })}
        </Breadcrumbs>
    )
}

export default BreadCrumbs