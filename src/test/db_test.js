const axios  = require('axios');
const URL = 'http://localhost:5000/users'
const Data ={
    'name':'Sudhanshu Parihar',
    'email':'sudhanshu447@gmail.com',
    'role':'user'
}

axios({
    method:'post',
    url:URL,
    data:Data
}).then(data =>console.log(data.data)).catch(err=>console.log(err))