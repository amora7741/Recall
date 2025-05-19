import { create } from "zustand";

interface NotesState {
  currentNote: {
    id: string;
    text: string;
  } | null;
  updateCurrentNote: (noteId: string, text: string) => void;
  clearCurrentNote: () => void;
}

export const useNotesStore = create<NotesState>((set) => ({
  currentNote: null,
  updateCurrentNote: (id, text) => set({ currentNote: { id, text } }),
  clearCurrentNote: () => set({ currentNote: null }),
}));
