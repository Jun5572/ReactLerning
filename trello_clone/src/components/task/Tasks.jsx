import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Task } from './Task'

// タスクを入れ替えた状態を維持するための関数
const reorder = (taskList, startIndex, endIndex) => {
  // タスクを並び替える
  const remove = taskList.splice(startIndex, 1);
  taskList.splice(endIndex, 0, remove[0]);
}

export const Tasks = ({taskList, setTaskList}) => {

  const handleDragEnd = (result) => {
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppble">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task index={index} task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
