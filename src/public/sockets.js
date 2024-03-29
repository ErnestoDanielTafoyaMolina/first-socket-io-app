const socket = io.connect();

const saveNote = (title, description) => {
  socket.emit("client:newnote", {
    title,
    description,
  });
};

const deleteNote = (id) => {
  socket.emit("client:deletenote", id);
};

const updateNote= (id, title, description) => {
  socket.emit("client:updatenote", {
    id,
    title,
    description,
  });
};

socket.on("server:loadnotes", renderNotes);

socket.on("server:newnote", appendNote);

socket.on("server:selectednote", (note) => {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  title.value = note.title;
  description.value = note.description;

  savedId = note.id;
});