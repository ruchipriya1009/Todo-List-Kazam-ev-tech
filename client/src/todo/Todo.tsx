import React, { useState, useEffect } from "react";
import { fetchNotes, addNote as addNewNote } from "../api/note";
import Header from "./Header";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { toast } from "react-hot-toast";

const TodoApp: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState<string>("");

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    try {
      const notes = await fetchNotes();
      setNotes(notes);
    } catch (error) {
      console.error("Error loading notes:", error);
      toast.error("Error loading notes");
    }
  };

  const addNote = async () => {
    if (newNote.trim() !== "") {
      try {
        await addNewNote(newNote);
        setNewNote("");
        await loadNotes();
        toast.success("Note added successfully!");
      } catch (error) {
        console.error("Error adding note:", error);
        toast.error("Error adding note");
      }
    } else {
      toast.error("Note cannot be empty");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4 flex flex-col">
        <Header />
        <NoteInput
          newNote={newNote}
          setNewNote={setNewNote}
          addNote={addNote}
        />
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default TodoApp;
