import "./css/welcome-page.css";
export default function Welcome() {
  function handleClick() {
    window.location.href = "./signin";
  }
  return (
    <>
      <div id="whole" className="welcomeblock">
        <div>
          <h1>MY KANBAN</h1>
        </div>
        <div>
        <form onSubmit={e => {
            e.preventDefault();}}>
            <button className="button" onClick={handleClick}>Enter</button>
        </form>
        </div>
      </div>
    </>
  );
}