class Note {
  constructor(title, content, tag) {
    this.title = title;
    this.content = content;
    this.tag = tag;
  }
}

class Notes {
  constructor() {
    this.items = []
  }

  addNote(title, content, tag) {
    const newNote = new Note(title, content, tag);

    this.items.push(newNote);
  }

  removeNote(index) {
    this.items.splice(index, 1);
  }
}

export default Notes;