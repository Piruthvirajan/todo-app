export function Tabs(props) {
  const { todos , selectedTab, setSelectedTab} = props;

  const butts = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {butts.map((tab, index) => {


        const noOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((status) => {
                return !status.completed;
              }).length
            : todos.filter((status) => status.completed).length;


        return (
          <button onClick={()=>{setSelectedTab(tab)}} className={  "tab-button " + (tab===selectedTab ? "tab-selected" : '')} key={index}>
            <h4>
              {tab} <span>({noOfTasks})</span>
            </h4>
          </button>
        );
        
      })}
      <hr />
    </nav>
  );
}
