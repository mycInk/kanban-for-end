import './css/signup.css'
function ToSignUp()
{
  window.location.href='./dashboard';
}
function SignUp()
{
    return (
        <div className="signupblock">
        <br />
        <h1>
            注册 SignUp
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
          type="text"
        />
        <br />
        <br />
            ConFirm Password:{' '}
        <input
          defaultValue="password"
          name="ConFirm Password"
          type="text"
        />
        <br />
        <br />
        <div className='multibuttonblock'>
            <button type="signup" className='signupbutton' onClick={ToSignUp}>注 册</button>
        </div>
      </form>
      </div>)
}
export default SignUp