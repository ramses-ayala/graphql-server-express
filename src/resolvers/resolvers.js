const Task = require('../../models/task');


const resolvers = {
    Query: {
        hello: () => 'Hello',
        getAllTasks: async () => {
            try {
                const allTasks = await Task.find();
                console.log('allTasks: ',allTasks);
            } catch (error) {
                throw new Error('There was an error getting all tasks : ', error);
            }
        }
    },

    Mutation: {
        createTask: async(parent, args) => {

            const {title, description} = args;
            
            try {
                const newTask = new Task({title, description});
                const taskSaved = await newTask.save();
                return taskSaved;
            } catch (error) {
                throw new Error('There was an error saving the task: ', error);
            }
            
        },
        updateTask: async(parent,args) => {

            const { id, title, description } = args;

            const taskUpdated = await Task.findByIdAndUpdate(id, {title, description});
            console.log('taskUpdated: ', taskUpdated);

            return taskUpdated;
            
        }
    }
};

module.exports = {resolvers};