"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    id;
    name;
    email;
    password;
    phone;
    _age;
    notebooks = [];
    constructor(id, name, email, password, phone, age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.age = age; //calling set age()
    }
    set age(value) {
        if (value < 18 || value > 60) {
            throw new Error("Age must be between 18 and 60");
        }
        this._age = value;
    }
    get age() {
        return this._age;
    }
    displayInfo() {
        console.log(`User info -> id: ${this.id} | name: ${this.name} | email: ${this.email} | phone: ${this.phone} | age: ${this.age}`);
    }
    addNotebook(notebook) {
        this.notebooks.push(notebook);
    }
    removeNotebook(notebook) {
        this.notebooks = this.notebooks.filter(n => n !== notebook);
    }
    getNotebooks() {
        return [...this.notebooks];
    }
}
const user = new User(101, "Lola", "lola@gmail.com", "lola@123", "012345456", 30);
user.displayInfo();
//////////////////////////////////////////////////////
class Admin extends User {
    manageNotes(notebook, noteId) {
        notebook.removeNote(noteId);
        console.log(`Admin ${this.name} (id: ${this.id}) is managing notes`);
    }
}
const admin = new Admin(1, "Sara", "sara@gmail.com", "sara@123", "011111111", 35);
admin.displayInfo();
//////////////////////////////////////////////////
class Note {
    id;
    title;
    content;
    userId;
    author;
    constructor(id, title, content, author) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.userId = author.id;
        this.author = author;
    }
    preview() {
        return this.content.length > 50
            ? this.content.slice(0, 50) + "..."
            : this.content;
    }
}
const note1 = new Note(1, "My First Note", "This is my first note and I am learning TypeScript OOP.", user);
console.log(note1.preview());
console.log(note1.userId);
///////////////////////////////////////////////////////////
class NoteBook {
    owner;
    notes = [];
    constructor(owner) {
        this.owner = owner;
    }
    addNote(id, title, content) {
        const note = new Note(id, title, content, this.owner);
        this.notes.push(note);
    }
    removeNote(id) {
        this.notes = this.notes.filter(note => note.id !== id);
    }
    getNotes() {
        return [...this.notes];
    }
}
const notebook = new NoteBook(user);
const notebook1 = new NoteBook(user);
notebook.addNote(1, "Learning TypeScript", "Today I learned about OOP and Composition");
notebook.addNote(2, "JavaScript", "Learning about object references");
notebook1.addNote(1, "Learning nest", "Today I learned about nest js");
console.log(notebook.getNotes());
notebook.removeNote(1);
admin.manageNotes(notebook, 2);
user.addNotebook(notebook);
user.addNotebook(notebook1);
console.log("users notebook", user.getNotebooks().length);
class Storage {
    items = [];
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i !== item);
    }
    getAllItems() {
        return [...this.items];
    }
}
const userStorage = new Storage();
userStorage.addItem(user);
userStorage.addItem(admin);
console.log("user and admin storage", userStorage.getAllItems());
const numberStorage = new Storage();
numberStorage.addItem(10);
console.log(numberStorage.getAllItems());
