import React from 'react'

export default function Footer(info) {
  return (
    <div className="mt-3">
    <p className="text-secondary text-center">
      copyright © {info.year} {info.fullname} {info.studentid}
    </p>
  </div>
  )
}