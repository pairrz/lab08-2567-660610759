import React from 'react'

export default function Task(info) {
  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <span className={info.isDone ? 'text-decoration-line-through' : ''}>{info.title}</span>
      <button className="btn btn-success">Done</button>
      <button className="btn btn-danger">Delete</button>
    </div>
  )
}