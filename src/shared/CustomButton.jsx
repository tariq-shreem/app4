import React from 'react'

export default function CustomButton({ text, type, onClick }) {
    let btnClass = 'btn btn-lg rounded-pill shadow ';
    if (type === 'delete') {
      btnClass += 'btn-outline-danger';
    } else if (type === 'info') {
      btnClass += 'btn-outline-secondary';
    } else if (type === 'create') {
      btnClass += 'btn-outline-primary';
    } else {
      btnClass += 'btn-outline-secondary'; // الافتراضي
    }
    return (
    <button className={btnClass} onClick={onClick}>
      {text}
    </button>
  );
}
