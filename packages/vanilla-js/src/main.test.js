import { beforeEach, describe, it, expect, vi } from 'vitest';
import { screen } from '@testing-library/dom';

const mockFetch = vi.fn();

describe('main.js', () => {
    beforeEach(() => {
        mockFetch.mockReset();
        globalThis.fetch = mockFetch;

        // Reset the DOM.
        document.body.innerHTML = `
            <div id="app">
                <p class="greeting">Loading...</p>
            </div>
        `;
    });

    it('renders a dynamic greeting', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => ({ greeting: 'Hello, World!' }),
        });

        // Dynamically import the script to trigger its execution.
        await import('./main');

        const greeting = await screen.findByText('Hello, World!');
        expect(greeting).toBeInTheDocument();
        expect(mockFetch).toHaveBeenCalledWith('http://localhost:8000/api/greeting');
    });
});
