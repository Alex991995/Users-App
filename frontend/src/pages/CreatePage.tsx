import React, { useState } from 'react';
import { useAddUserMutation } from '../features/slices/apiSlice';
import InputField from '../components/InputField';
import styles from '../styles/CreatePage.module.css';
import { useNavigate } from 'react-router-dom';
import { UserCreate } from '../utils/type';

function CreatePage() {
  const navigate = useNavigate();
  const [addUser] = useAddUserMutation();
  const [users, setUsers] = useState<UserCreate>({
    name: '',
    surname: '',
    height: '',
    weight: '60kg',
    sex: '',
    residency: '',
    image: null,
  });

  function submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData();
    for (const key in users) {
      if (key === 'image' && users.image) {
        data.append(key, users.image);
      } else if (key !== 'id') {
        data.append(key, String(users[key as keyof UserCreate]));
      }
    }

    addUser(data);
    navigate('/');
  }

  return (
    <section>
      <form method="post" className={styles.form} onSubmit={e => submitForm(e)}>
        <InputField text="name" users={users} setUsers={setUsers} />
        <InputField text="surname" users={users} setUsers={setUsers} />
        <InputField text="height" users={users} setUsers={setUsers} />
        <InputField text="weight" users={users} setUsers={setUsers} />
        <InputField text="sex" users={users} setUsers={setUsers} />
        <InputField text="residency" users={users} setUsers={setUsers} />

        <label>
          img
          <input
            accept="image/*,.png,.jpg,.gif,.web"
            className="input"
            type="file"
            onChange={e => setUsers({ ...users, image: e.target.files && e.target.files[0] })}
          />
        </label>

        <button type="submit">button</button>
      </form>
    </section>
  );
}

export default CreatePage;
