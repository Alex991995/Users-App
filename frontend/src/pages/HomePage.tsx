import { useEffect } from 'react';
import { useGetUsersQuery } from '../features/slices/apiSlice';
import ListUsers from '../components/ListUsers';



function HomePage() {
  const { data, refetch } = useGetUsersQuery(1);

  useEffect(() => {
    const timerId = setTimeout(() => {
      refetch()
    }, 200);

    return () => clearTimeout(timerId);
  }, [])

console.log(data)


  return <div>{data && <ListUsers data={data} refetch={refetch}/>}</div>;
}

export default HomePage;
