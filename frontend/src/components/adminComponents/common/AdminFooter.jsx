import React from 'react'
import {links, appName} from "../../../constants/index.js"

function AdminFooter() {
    const  year = new Date().getFullYear();
  return (
  <footer className="bg-white border-t border-gray-200 px-8 py-4 text-center">
      
      <p className="text-sm text-gray-500">
        © {year} {appName}. All rights reserved.

\        {links.map((link, index) => (
          <span key={index}>
            <span className="mx-2">|</span>
            <a
              href={link.url}
              className="hover:text-blue-600 underline decoration-gray-300"
            >
              {link.name}
            </a>
          </span>
        ))}
      </p>

    </footer>
  )
}

export default AdminFooter
