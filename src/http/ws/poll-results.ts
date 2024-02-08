import { FastifyInstance } from "fastify";

export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results', { websocket: true }, (connection, request) => {
    
  })
}

// Pub/Sub => Publish and Subscribers => WebSockets
