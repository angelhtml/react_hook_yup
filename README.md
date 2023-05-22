<h1>React Hook Form</h1>

<p align="center">
  <img src="https://img.shields.io/badge/code_style-Angel-ff0000.svg" alt="angel code style"/>
</p>

<p>manage your data using with react hook form and yup and send it to your server 💻</p>

<h1>📜libraries</h1>
<ul>
  <li>React js or Next js</li>
  <li>React hook form</li>
  <li>yup</li>
  <li>Axios</li>
  <li>Express js</li>
  <li>Cors</li>
</ul>

<p>in client folder you can see the react hook form and yup tool and axios that can send your data to server</p>

``` javascript
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
```

<p>the server folder is a basic express server that will be available response your requests</p>

``` javascript
app.post("/api/user", (req, res) => {
    const username = req.body.Username;
    const age = req.body.Age;
    res.send({"name" : username, "age" : age})  
    console.log("data receive")
});
```


