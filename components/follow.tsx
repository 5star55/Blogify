import React from 'react'

export default function Follow({children, className}:{children: React.ReactNode, className: string}) {

  return (
    <div className={`border rounded-lg p-3  border-sky-600 ${className}`}>
        {children}
    </div>
  )
}
