import axios from 'axios';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect,useState } from 'react';

function App(){
  const [datas, setDatas] = useState()
  const [loading, setLoading] = useState(false)
  //SENDING DATA
  //create a schema for user
  const userSchema = yup.object().shape({
    Username: yup.string().required(),
    Age: yup.string().required(),
  });

  const { register:registeruser, handleSubmit:handleSubmituser, formState: { errors:errorsuser }, reset:resetuser } = useForm({
    resolver: yupResolver(userSchema),
  });
  //posting your data from yup to server
  const onSubmitHandleruser = (data) => {
    axios({
        method: 'post',
        url: `http://localhost:3001/api/user`,
        data: data,
      })
    .then(function (response) {
      setDatas(response.data)
      setLoading(true)
      //console.log(response)
      }).catch(function (error) {
        console.log(error);
      }) 
  }; 
console.log(datas)
  return(
    <div>
      {loading ? <h1> Welcome <u>{datas.name}</u> and your age is <u>{datas.age}</u> </h1> : <h1>What`s your name?</h1>}
      <input {...registeruser("Username")} placeholder="Username"/><br />
      <input {...registeruser("Age")} placeholder="Age"/><br />
      
      <button onClick={handleSubmituser(onSubmitHandleruser)}>Submit</button>
    </div>
  )
}
export default App



  