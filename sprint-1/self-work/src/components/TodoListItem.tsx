import {Task} from "../App.tsx";
import {Button} from "./Button.tsx";

type Props = {
    item: string;
    tasks: Task[];
}

export const TodoListItem = ({item, tasks}: Props) => {

    return (
        <div>
            <h3>{item}</h3>
            <div>
                <input/>
                <Button title={'+'}/>
            </div>
            <ul>
                {tasks.map(task => {
                    return (
                        <li>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    )
                })}
            </ul>
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    );
};
