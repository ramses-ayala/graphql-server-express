const task = require('../../models/task');


const resolvers = {
    Query: {
        hello: () => 'Hello',
        getAllTasks: async () => {
            try {
                const allTasks = await task.find();
                console.log('allTasks: ',allTasks);
            } catch (error) {
                throw new Error('There was an error getting all tasks : ', error);
            }
        }
    },

    Mutation: {
        createTask: async({ title, description }) => {

            try {
                const newTask = new task({title, description});
                const taskSaved = await newTask.save();
                console.log('taskSaved: ', taskSaved);
                return taskSaved;
            } catch (error) {
                throw new Error('There was an error saving the task: ', error);
            }
            
        }
    }
};

module.exports = {resolvers};