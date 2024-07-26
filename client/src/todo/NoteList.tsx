import React from "react";

interface NoteListProps {
  notes: string[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => (
  <>
    <p className="text-left font-bold">Notes</p>
    <hr className="border-chocolate-dark" />
    <ul className="overflow-y-auto h-[200px] flex-grow rounded-md mt-2">
      {notes.map((note, index) => (
        <React.Fragment key={index}>
          <li className="py-2 px-3">{note}</li>
          {index < notes.length - 1 && <hr />}
        </React.Fragment>
      ))}
    </ul>
  </>
);

export default NoteList;
