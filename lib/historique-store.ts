import { create } from 'zustand';

interface Store {
    tickets: ITicket[];
    addTicket: (ticket: ITicket) => void;
    loadTickets: () => void; // Ajout de la méthode loadTickets
}

export const useStore = create<Store>((set) => ({
    tickets: [],
    addTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
    loadTickets: () => {
        const storedTickets = localStorage.getItem('tickets');
        if (storedTickets) {
            const parsedTickets = JSON.parse(storedTickets) as ITicket[];
            set({ tickets: parsedTickets });
        }
    },
}));
