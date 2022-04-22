import {Task} from "../../tasks";
import {TableViewRoot} from "./TableView.styles";

const TableView = (props: { allTasks: Task[] }) => {
  const {allTasks} = props;

  return (
    <TableViewRoot>
      <table className="table">
        <tr className="row">
          <th className="headerCell">Task Name</th>
          <th className="headerCell">Owner</th>
          <th className="headerCell">Description</th>
          <th className="headerCell">Priority</th>
          <th className="headerCell">Status</th>
          <th className="headerCell">Budget</th>
          <th className="headerCell">Spent</th>
          <th className="headerCell">Left</th>
        </tr>
        {allTasks.map((task) => (
          <tr className="row">
            <td className="cell">{task.taskName}</td>
            <td className="cell">{task.owner}</td>
            <td className="cell">{task.description}</td>
            <td className="cell">{task.priority}</td>
            <td className="cell">{task.status}</td>
            <td className="cell">${task.budget.toLocaleString()}</td>
            <td className="cell">${task.spent.toLocaleString()}</td>
            <td className="cell">${task.remainingSpend.toLocaleString()}</td>
          </tr>
        ))}
      </table>
    </TableViewRoot>
  );
};

export default TableView;
