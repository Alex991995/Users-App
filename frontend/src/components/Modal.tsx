/* eslint-disable react-hooks/rules-of-hooks */
import ReactPortal from '../hoc/ReactPortal';
import { UserCreate } from '../utils/type';
import styles from '../styles/Modal.module.css';
import { useState } from 'react';
import { useUpdateUserMutation } from '../features/slices/apiSlice';
import InputField from './InputField';
// import { useNavigate } from 'react-router-dom';

interface ModalProps {
  children: UserCreate | null;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ children, setOpen }: ModalProps) {
  if (children === null) return null;
  // const navigate = useNavigate();
  const [users, setUsers] = useState<UserCreate>(children);
  const [updateUser] = useUpdateUserMutation();

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
    if (users && users.id) {
      const dataUpdatedUser = {
        id: users.id,
        userUpdate: data,
      };
      updateUser(dataUpdatedUser);
      setOpen(false);
    }
  }


  function handelCloseModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    const isOverlay = target.classList.contains('overlay');
    if (isOverlay) setOpen(false);
  }

  return (
    <ReactPortal>
      <div className={`overlay ${styles.overlay}`} onClick={e => handelCloseModal(e)}>
        <div className={styles.modal}>
          <form method="post" className={styles.form} onSubmit={e => submitForm(e)}>
            {users && (
              <>
                <InputField text="name" users={users} setUsers={setUsers} />
                <InputField text="surname" users={users} setUsers={setUsers} />
                <InputField text="height" users={users} setUsers={setUsers} />
                <InputField text="weight" users={users} setUsers={setUsers} />
                <InputField text="sex" users={users} setUsers={setUsers} />
                <InputField text="residency" users={users} setUsers={setUsers} />
              </>
            )}

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
          <button onClick={() => setOpen(false)} className={styles.closeButton}>
            X
          </button>
        </div>
      </div>
    </ReactPortal>
  );
}

export default Modal;
