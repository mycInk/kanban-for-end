import "./css/dashboard.css";

export default function Dashboard() {
    return (
        <div className="container">
            <div id="left">
                <div className="add-project" onClick={addproject}>
                    <div id="add-box">
                        <img src="..\img\plus1.png" className="plus1"></img>
                        <div id="add-text"><p>&nbsp;&emsp;添加项目</p></div>
                    </div>
                </div>
            </div>
            <div id="center"></div>
            <div id="right"></div>
        </div>
    );
}
function addproject()
{
}