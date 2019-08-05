const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    data(name: String): String!
  }
`

const resolvers = {
  Query: {
    data: (_, {}) =>
      JSON.stringify([
        { datetime: '08-01-1989',  device: 'MAC', ip: '192.168.1.1' },
        { datetime: '08-02-1989', device: 'WINDOWS', ip: '192.168.1.1' },
        { datetime: '08-03-1989', device: 'LINUX', ip: '192.168.1.1' },
      ]),
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))
