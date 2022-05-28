import { React, useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './TaskAddInput'
import { TaskCardTitle } from './TaskCardTitle'
import { Tasks } from './Tasks'


export const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index }) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div
          className='taskCard'
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className="taskCardTitleAndTaskCardDeleteButtonArea" {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton 
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
          <TaskAddInput
            inputText={inputText}
            setInputText={setInputText}
            setTaskList={setTaskList}
            taskList={taskList}
          />
          <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
        </div>

      )}
    </Draggable>
  )
}
