import { useAuth } from '@clerk/nextjs';

export default function useFetch() {
    const { getToken } = useAuth();

    const authenticatedFetch = async (...args: Parameters<typeof fetch>) => {
        const token = await getToken();
        const response = await fetch(args[0], {
            ...args[1],
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    };

    return authenticatedFetch;
}
