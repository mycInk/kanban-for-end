import "./output.css";
import {useState} from "react";
export default function Dashboard() {
    const [project, setProject] = useState(["My Project"]);
    const [projectName, setProjectName] = useState("My Project");
    function addproject()
    {
        const projectName = prompt("请输入项目名称");
        if(projectName === null || projectName === "") return;
        setProject([...project, projectName]);
    }
    function handleEdit(e)
    {
        const oldProjectName = e.target.parentElement.querySelector(".project-name").textContent;
        const projectName = prompt("请输入新的项目名称");
        if(projectName === null || projectName === "") return;
        setProjectName(projectName);
        const newProject = project.filter((name) => name !== oldProjectName);
        setProject([...newProject, projectName]);
    }
    function handleDel(e)
    {
        e.stopPropagation();
        const projectName = e.target.parentElement.querySelector("#project-name").textContent;
        const newProject = project.filter((name) => name !== projectName);
        setProject(newProject);
    }
    function handleClickOnProject(e)
    {
        const projectName = e.target.querySelector("#project-name").textContent;
        if(projectName !== null && projectName !== "") setProjectName(projectName);
    }
    function Right()
    {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-900">Hello, RUNOOB!</h1>
            <p className="mt-4 text-gray-600">菜鸟教程，学的不仅是技术，更是梦想！</p>
            <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
         点我试试
        </button>
      </div>
    </div>
        );
    }
    function Center()
    {
        return (
            <>
                <div id="project">
                    <div id="project-header">
                        <div id="project-header-header" className="bg-zinc-500 static flex items-center justify-around left-0 top-0 py-2 px-4">
                            <div><h1 className="project-name">{projectName}</h1></div>
                            <div onClick={handleEdit}>✎</div>
                        </div>
                    </div>
                    <div id="mission-list">
                        <div>
                            {project.map((missionName, index) => (
                                <div key={index} className="static flex justify-between bg-transparent hover:bg-zinc-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-black rounded-2xl" onClick={handleClickOnProject}>
                                    <div><p id="project-name" className="text-2xl">{missionName}</p></div>
                                    <div onClick={handleDel} className="text-2xl border-black border rounded-full bg-transparent hover:bg-purple-300 py-1 px-2">删除</div>
                                </div>
                            ))}
                            <div id="add-box" className="static flex justify-between bg-transparent hover:bg-zinc-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-black rounded-2xl" onClick={addproject}>
                                <img src="..\img\plus1.png" className="w-12 h-12"></img>
                                <p id="add-text">&nbsp;&emsp;添加任务</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    function Left()
    {
        return (
            <>
            <div className="flex-col justify-start">
                <div id="user-info-box" className="bg-zinc-500 static flex items-center justify-around left-0 top-0 py-2 px-4">
                    <div><p id="user-name" className="text-white">用户名</p></div>
                </div>
                <div>
                    <div>
                        {project.map((projectName, index) => (
                            <div key={index} className="static flex justify-between bg-transparent hover:bg-zinc-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-black rounded-2xl" onClick={handleClickOnProject}>
                                <div><p id="project-name" className="text-2xl">{projectName}</p></div>
                                <div onClick={handleDel} className="text-2xl border-black border rounded-full bg-transparent hover:bg-purple-300 py-1 px-2">删除</div>
                            </div>
                        ))}
                        <div id="add-box" className="static flex justify-between bg-transparent hover:bg-zinc-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-black rounded-2xl" onClick={addproject}>
                            <img src="..\img\plus1.png" className="w-12 h-12"></img>
                            <p id="add-text">&nbsp;&emsp;添加项目</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
    return (
        <div className="divide-x flex">
            <div id="left" className="w-1/5 h-screen bg-zinc-400 border-solid"><Left /></div>
            <div id="center" className="w-2/5 h-screen bg-zinc-300 border-solid"><Center /></div>
            <div id="right" className="w-2/5 h-screen bg-zinc-200 border-solid"><Right /></div>
        </div>
    );
}