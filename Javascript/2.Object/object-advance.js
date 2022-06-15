// // 1 Cara Membuat Object Optimal di Javascript

// const methodPerson =  {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Saya ${this.nama} dan saya sedang makan  `);
//     },
//     aktivitas: function(jam){
//         this.energi -= jam;
//         console.log(`Saya ${this.energi} dan saya sedang beraktivitas `);
//     }
// }

// function person(nama, energi){
//     let karakteristik = {}
//     karakteristik.nama = nama
//     karakteristik.energi = energi
//     karakteristik.makan  = methodPerson.makan
//     karakteristik.aktivitas = methodPerson.aktivitas

//     return karakteristik;
// }

// let Indra = person('Indra', 10);

// 2. pembuatan Objek pada memori optimal yang otomatis
// const methodPerson =  {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Saya ${this.nama} dan saya sedang makan  `);
//     },
//     aktivitas: function(jam){
//         this.energi -= jam;
//         console.log(`Saya ${this.energi} dan saya sedang beraktivitas `);
//     }
// }

// function Person(nama,energi){
//     let karakteristik = Object.create(methodPerson);

//     karakteristik.nama = nama;
//     karakteristik.energi = energi;

//     return karakteristik
// }


// let Dina = Person('Dina', 10);

// 3. Prototype Object 

// function Person(nama,energi){
//         this.nama = nama;
//         this.energi = energi;
// }

// Person.prototype.makan = function(porsi){
//     this.energi += porsi;
//     console.log(`Saya ${this.nama} dan saya sedang makan  `);
// }

// Person.prototype.aktivitas = function(porsi){
//     this.energi -= porsi;
//     console.log(`Saya ${this.nama} dan saya sedang aktivitas  `);
// }

// let Dina = new Person('Dina', 10);

// 4. Prototype Inheritance versi Class

class Person{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }
    makan(porsi){
        this.energi += porsi;
        console.log(`Saya ${this.nama} dan saya sedang makan  `);
    }
    aktivitas(jam){
        this.energi -= jam;
        console.log(`Saya ${this.nama} dan saya sedang beraktivitas `);
    }
}

let Dina = new Person('Dina', 10);