                  // TODO: Import validator functions
                    import {validateTitle,validatePriority,validateDueDate} from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                     if(!validateTitle && !validatePriority && !validateDueDate)
                     {
                        return "invalid addtask"
                     }
                     tasks.push({title,priority,dueDate})
                     return true
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      console.log(tasks)


                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                      return true
                    }

                  // Export functions
                  export {addTask,getAllTasks,completeTask}