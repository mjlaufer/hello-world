import { beforeEach, describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

const mockFetch = vi.fn();

describe('page', () => {
    beforeEach(() => {
        mockFetch.mockReset();
        global.fetch = mockFetch;
    });

    it('renders the page with a dynamic greeting', async () => {
        const mockGreeting = 'Hello, world!';
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ greeting: mockGreeting }),
        });

        render(await Home());

        const greeting = screen.getByText(mockGreeting);
        expect(greeting).toBeInTheDocument();
        expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/api/greeting');
    });

    it('throws an error when the fetch fails', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(Home()).rejects.toThrow('HTTP error! Status: 500');
        expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/api/greeting');
    });
});
