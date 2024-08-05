import React from 'react'
import { UserCreate } from '../utils/type';

interface InputFieldUpdateProps {
  text: string;
  users: UserCreate;
  setUsers: React.Dispatch<React.SetStateAction<UserCreate>>;
}


function InputFieldUpdate({text, users, setUsers  }:InputFieldUpdateProps) {

  const field = users[text as keyof UserCreate] ?? '';

  return (
    <label>
      {text}
      <input
        className="input"
        type="text"
        value={field}
        onChange={e => setUsers({ ...users, [text]: e.target.value })}
      />
    </label>
    )
}

export default InputFieldUpdate