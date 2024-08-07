import './output.css'
import {useState} from "react";
import mongoose, { Schema } from 'mongoose';
function SignUp()
{
  try
  {
    mongoose.connect("mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster", { useNewUrlParser: true });
  }catch(error)
  {
    console.log(error);
  }
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  async function ToSignUp()
{
    mongoose.connection.once('open',()=>{
      console.log('数据库连接成功……')
  })
    mongoose.connection.once('close',()=>{
      console.log('数据库断开……')
  })
  let UserSchema=new Schema({
    uID: Number,
    Account: String,
    Password: String
  })
  var UserModle = mongoose.model('User',UserSchema)
  UserModle.create({
    uID:String(Math.floor(Math.random*10000)),
    Account: account,
    Password: password
  },(err,docs)=>{
    if(!err){
        console.log('插入成功'+docs)
    }
})
    setAccount("");
    setPassword("");
  window.location.href='./dashboard';
}
    return (
        <div className="bg-black  flex items-center justify-center min-h-screen">
          <div className="bg-zinc-900 p-8 rounded-lg shadow-lg">
        <br />
        <div className="flex items-center justify-around"><div>
        <h1 className="text-3xl">
            注册 SignUp
        </h1>
        </div></div>
        <br />
        <form onSubmit={e => {
            e.preventDefault();}}>
            Account:{' '}
        <input
          className='rounded-full text-black'
          defaultValue="account"
          name="Account"
          type="text"
          onChange={event => setAccount(event.target.value)}
        />
        <br />
        <br />
            Password:{' '}
        <input
          className='rounded-full text-black'
          defaultValue="password"
          name="Password"
          type="password"
          onChange={event => setPassword(event.target.value)}
        />
        <br />
        <br />
            ConFirm Password:{' '}
        <input
          className='rounded-full text-black'
          defaultValue="password"
          name="ConFirm Password"
          type="password"
        />
        <br />
        <br />
        <div className="flex items-center justify-around">
        <div>
            <button type="signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full duration-100" onClick={ToSignUp}>注 册</button>
        </div>
        </div>
      </form>
      </div>
      </div>)
}
export default SignUp