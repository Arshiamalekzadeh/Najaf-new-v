import React from 'react'
import PageTitle from './PageHeader'

const SimplePage = ({ children, className }) => {
    return (
        <div className={`bg-white px-4 py-3 shadow-sm h-full flex flex-col ${className}`}>
            {children}
        </div>
    )
}

export default SimplePage