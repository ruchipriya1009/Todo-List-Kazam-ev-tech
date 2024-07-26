import React, { ChangeEvent, KeyboardEvent } from "react";
import { IoIosAddCircle } from "react-icons/io";

interface NoteInputProps {
  newNote: string;
  setNewNote: React.Dispatch<React.SetStateAction<string>>;
  addNote: () => void;
}

const NoteInput: React.FC<NoteInputProps> = ({
  newNote,
  setNewNote,
  addNote,
}) => (
  <div className="flex flex-col sm:flex-row gap-3 mb-4">
    <input
      type="text"
      className="flex-grow border rounded-md px-2 py-1 focus:outline-none"
      placeholder="New Note..."
      value={newNote}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setNewNote(e.target.value)
      }
      onKeyPress={(e: KeyboardEvent<HTMLInputElement>) =>
        e.key === "Enter" && addNote()
      }
    />
    <button
      className="bg-[#91410c] flex justify-center gap-2 rounded-md items-center text-white px-2 py-1 hover:bg-chocolate-dark"
      onClick={addNote}
    >
      <IoIosAddCircle className="h-5 w-5" /> Add
    </button>
  </div>
);

export default NoteInput;
