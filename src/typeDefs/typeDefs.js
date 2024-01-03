const { gql } = require('apollo-server-express');



const typeDefs = gql`

    type Task{
        id: ID!
        title: String!
        description: String
    }

    input TaskInput{
        title: String
        description: String
    }

    type Query {
        hello: String!
        getAllTasks: [Task]
        getTask(id: ID): Task
    }

    type Mutation{
        createTask(task: TaskInput): Task
        updateTask(id: ID!, task: TaskInput): Task
        deleteTask(id: ID): String
    }
`;

module.exports = { typeDefs };