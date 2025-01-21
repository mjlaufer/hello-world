import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { startServer, PORT, type Server } from './server.mts';

describe('server', () => {
    let server: Server;
    let url: string;

    beforeAll(async () => {
        server = await startServer();
        url = `http://localhost:${PORT}/api/greeting`;
    });

    afterAll(async () => {
        await server.close();
    });

    it('should return greeting', async () => {
        const response = await fetch(url);
        const body = await response.json();
        expect(body).toEqual({ greeting: 'Hello, World!' });
    });
});
