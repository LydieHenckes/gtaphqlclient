import { useMutation, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import './App.css';
import { CREATE_USER } from './mutations/user';
import { GET_ALL_USERS } from './query/user';

function App() {
  const [users, setUsers] = useState([]);
  const {data, loading, error} = useQuery(GET_ALL_USERS); // возвращается объект
  
  const [newUser, {dataUser, loadingUser, errorUser}] = useMutation(CREATE_USER) // возвращается кортеж, где первый элемент это ф-ия которая будет вызывать мутацию

  const [username, setUsername] = useState('');
  const [age, setAge] = useState(0);


  console.log(data);
  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers)
    }
  }, [data])

/*
mutation {
  createUser(input: {
    username: "Petya"
    age: 25
  }) {
    id, username
  }
}

async function loadStudentsAsync() {
   const query = gql`
   {
      students{
         id
         firstName
         lastName
         college{
            name
         }
      }
   }`
   const {data} = await client.query({query}) ;
   return data.students;
}
*/

  const addUser = (e) => {
    console.log('ici2 ', username, ' ',age)
    e.preventDefault();
    console.log('ici2 ', username, ' ',age)
    newUser({ variables: { 
       input: {
          username,
          age 
      }
    } });
  /*
    newUser({
      variables: {
          input: {
              username, age
          }
      }
    }).then(({res}) => {
        console.log('jkjkj')
        console.log(dataUser)
        console.log(res)
        setUsername('')
        setAge(0)
    }).catch(e => {
      console.log(e)
      console.log(dataUser)
      console.log(errorUser)
      console.log(loadingUser)
    })
    */
  }

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (errorUser) {
    return <h1>Error...</h1>
  }

  return (
    <div>
      <form>
        <input value = {username}  onChange = {e => setUsername(e.target.value)} type = "text" />
        <input value = {age} onChange = {e => setAge(e.target.value)} type = "number" />
        <div className='btns'>
          <button onClick={(e) => addUser(e)}>Créer</button>
          <button>Obtenir</button>
        </div>
      </form>
      <div>
        {users.map(user =>
          <div key = {user.id} className='user'>{user.id} {user.username} {user.age}</div> 
        )}
      </div>
    </div>
  );
}

export default App;
