// 1. Object Literal
var person = {
    nama : "Rizki",
    umur : 20,
    email : "rizki@gmail.com",
    jurusan : "Sistem Informatika"
}

// 2. function declaration (function literal)
function createPerson(nama, umur, email, jurusan){
    var person = {}
    person.nama = nama;
    person.umur = umur;
    person.email = email;   
    person.jurusan = jurusan;

    return person;
}

// 3 Constructor Function
function person(nama, umur, email, jurusan){
    this.nama = nama;
    this.umur = umur;
    this.email = email;   
    this.jurusan = jurusan;

}

let rizki = new person("Rizki", 20, "Rizi@gmail.com", "Sistem Informatika");