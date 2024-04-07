import { FastifyInstance } from 'fastify';
import { BadRequest } from './routes/_errors/bad-requests';
import { ZodError } from 'zod';

type FastifyErrorHandler = FastifyInstance['errorHandler']

export const errorHandler: FastifyErrorHandler = (error, request, reply) => {

    if ( error instanceof ZodError){
        return reply.status(400).send({
            message: `Error validation request`,
            errors: error.flatten().fieldErrors,
        })
    }

    //se o erro for originado da classe BadRequest
    if( error instanceof BadRequest){
        return reply.status(400).send({ message: error.message })
    }

    return reply.status(500).send({ message: 'Internal server error!'})
}