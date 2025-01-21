import type { Server as HttpServer } from 'node:http';
import util from 'node:util';
import express, { type Request, type Response } from 'express';
import cors from 'cors';

export type Server = Omit<HttpServer, 'close'> & { close: () => Promise<void> };

export const PORT = 8000;

export async function startServer({ port = PORT }: { port?: number } = {}): Promise<Server> {
    const app = express();

    app.use(cors());

    app.get('/api/greeting', (_: Request, res: Response) => {
        res.json({ greeting: 'Hello, World!' });
    });

    return new Promise((resolve) => {
        const server = app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
            const close = util.promisify(server.close.bind(server));
            resolve({ ...server, close } as Server);
        });
    });
}
