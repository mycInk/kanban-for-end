import './css/App.css'
function SignIn()
{
    return (
        <div className="signinblock" >
        <br />
        <h1>
            登录 Login
        </h1>
        <br />
        <form action="">
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
          type="text"
        />
        <br />
        <br />
        <div className='multibuttonblock'>
            <button type="signup" className='signupbutton' onClick={ToSignUp}>注 册</button>
            <button type="signin" className='signinbutton' onClick={ToSignIn}>登 录</button>
        </div>
      </form>
</div>
    );
    function ToSignUp()
    {
        return "location.href='./signup'";
    }
    function ToSignIn()
    {
        return "location.href='./dashboard'";
    }
}
export default SignIn