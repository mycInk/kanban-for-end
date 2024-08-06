import './css/signin.css'
function SignIn()
{
    return (
        <div className="signinblock" >
        <br />
        <h1>
            登录 Login
        </h1>
        <br />
        <form onSubmit={e => {
        e.preventDefault();}}>
        Account:{' '}
        <input
          defaultValue="account"
          name="Account"
          type="text"
        />
        <br />
        <br />
            Password:{' '}
        <input
          defaultValue="password"
          name="Password"
          type="password"
        />
        <br />
        <br />
        <div className='multibuttonblock'>
            <button className='signupbutton' onClick={ToSignUp}>注 册</button>
            <button className='signinbutton' onClick={ToSignIn}>登 录</button>
        </div>
      </form>
</div>
    );
}
function ToSignUp()
{
    window.location.href="./signup";
}
function ToSignIn()
{
    window.location.href="./dashboard";
    }
export default SignIn