import type { Server as HttpServer } from 'node:http';
import { promisify } from 'node:util';
import cors from 'cors';
import express, { type Request, type Response } from 'express';

export const PORT = 8000;

export type Server = HttpServer & { closeAsync: () => Promise<void> };

export async function startServer({ port = PORT }: { port?: number } = {}): Promise<Server> {
    const app = express();

    app.use(cors());

    app.get('/api/greeting', (_: Request, res: Response) => {
        res.json({ greeting: 'Hello, World!' });
    });

    return new Promise((resolve) => {
        const server = app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);

            const serverWithClose = server as Server;
            serverWithClose.closeAsync = promisify(server.close.bind(server));
            resolve(serverWithClose);
        });
    });
}
