import './output.css'
//import {useState} from "react";
//import { MongoClient } from "mongodb";
//const uri = "mongodb+srv://lichenchen794:Chen0014@mycluster.wi6j1th.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster";
//const client = new MongoClient(uri);
function SignIn()
{
    /* const [account, setAccount] = useState("");
    const [password, setPassword] = useState(""); */
    function ToSignUp()
    {
        window.location.href="./signup";
    }
    async function ToSignIn()
    {
        /* await client.connect();
        const database = client.db("WebProject");
        const collection = database.collection("UserInfo");
        const result = await collection.findOne({
            account: account,
            password: password
        });
        console.log(result);
        await client.close(); */
        window.location.href="./dashboard";
    }
    return (
        <div className="bg-black flex items-center justify-center min-h-screen">
        <div className="bg-zinc-900 p-8 rounded-lg shadow-lg">
        <br />
        <div className="flex items-center justify-around"><div>
        <h1 className="object-top text-white text-4xl items-center justify-center">
            登录 Login
        </h1>
        </div></div>
        <br />
        <form onSubmit={e => {
        e.preventDefault();}}>
        Account:{' '}
        <input className="rounded-full text-black"
          defaultValue="account"
          name="Account"
          type="text"
//          onChange={event => setAccount(event.target.value)}
        />
        <br />
        <br />
            Password:{' '}
        <input className="rounded-full text-black"
          defaultValue="password"
          name="Password"
          type="password"
//        onChange={event => setPassword(event.target.value)}
        />
        <br />
        <br />
        <div className="static flex justify-between">
            <div><button className="bg-transparent hover:bg-transparent text-white font-semibold hover:text-blue-500 py-2 px-4 border border-white hover:border-blue-500 rounded-full duration-100" onClick={ToSignUp}>注 册</button></div>
            <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full duration-100" onClick={ToSignIn}>登 录</button></div>
        </div>
      </form>
        </div>
</div>
    );
}
export default SignIn