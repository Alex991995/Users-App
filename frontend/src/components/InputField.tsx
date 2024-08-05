import { UserCreate } from '../utils/type';

interface InputFieldProps {
  text: string;
  users: UserCreate;
  setUsers: React.Dispatch<React.SetStateAction<UserCreate>>;
}

function InputField({ text, users, setUsers }: InputFieldProps) {
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
  );
}

export default InputField;
