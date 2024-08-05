import { ListUsersProps, User, UserCreate } from '../utils/type';
import styles from '../styles/ListUsers.module.css';
import { useDeleteUserMutation } from '../features/slices/apiSlice';
import { useEffect, useState } from 'react';
import Modal from './Modal';

function ListUsers({ data, refetch }: ListUsersProps) {
  const [deleteUser] = useDeleteUserMutation();
  const [open, setOpen] = useState(false);
  const [dataOfUser, setDataOfUser] = useState<UserCreate | null>(null);

  function convertBufferToImg(arrayBuffer: number[] | undefined) {
    if (!arrayBuffer) return undefined;
    const base64string = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));

    return `data:image/png;base64,${base64string}`;
  }

  function deleteAndRefresh(id: number) {
    deleteUser(id);
    refetch();
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      deleteAndRefresh;
    }, 350);
    console.log(open);
    return () => clearTimeout(timerId);
  }, [open]);

  function openAndSendDataToModal(item: User) {
    setOpen(true);
    console.log(item);
    setDataOfUser(item as unknown as UserCreate);
  }

  return (
    <ul className={styles.list}>
      {data.map(item => (
        <li className={styles.item} key={item.id}>
          <h2>Name: {item.name}</h2>
          <p>Surname: {item.surname}</p>
          <p>Weight: {item.weight}</p>
          <p>Height: {item.height}</p>
          <p>Residency: {item.residency}</p>
          <p>Sex: {item.sex}</p>
          <div className={styles.boxImage}>
            <img src={convertBufferToImg(item.image?.data)} alt="photo profile" />
          </div>
          <div className={styles.boxButtons}>
            <button onClick={() => deleteAndRefresh(item.id)}>delete</button>
            <button onClick={() => openAndSendDataToModal(item)}>update</button>
          </div>
        </li>
      ))}

      {open && <Modal setOpen={setOpen}>{dataOfUser}</Modal>}
    </ul>
  );
}

export default ListUsers;
