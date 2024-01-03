const Task = require('../../models/task');


const resolvers = {
    Query: {
        hello: () => 'Hello',
        getAllTasks: async () => {
            try {
                const allTasks = await Task.find();
                return allTasks;
            } catch (error) {
                throw new Error('There was an error getting all tasks : ', error);
            }
        },

        getTask: async(_,args) => {

            const { id } = args;

            const taskFound = await Task.findById(id);

            return taskFound;
        },
       
    },

    Mutation: {

        createTask: async(_, {task}) => {

            try {
                const newTask = new Task({task});
                const taskSaved = await newTask.save();
                return taskSaved;
            } catch (error) {
                throw new Error('There was an error saving the task: ', error);
            }
            
        },

        updateTask: async(_,{id,task}) => {

            const taskUpdated = await Task.findByIdAndUpdate(id, {$set: task}, {new: true});
            return taskUpdated;
            
        },

        deleteTask: async(_, args) => {

            const { id } = args;

            const taskDeleted = await Task.findByIdAndDelete(id);

            if(taskDeleted !== null) return `Task deleted successfully !!!`;

            return `Task not found !!!`;
        },

        
    }
};

module.exports = {resolvers};