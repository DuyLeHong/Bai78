
let dog = {
    dogName: "JavaScript",
    weight: 2.4,
    color: "brown",
    age: 3,
    sua: function () { //tenphuongthuc: function(){}
        return "Gau Gau";
    },
    tangCan: function (value) {
        if (isNaN(value)) {
            return 'gia tri truyen vao khong hop le';
        } else {
            this.weight += value;
            return this.weight;
        }
        
    }
};
console.log('Ten:', dog.dogName);
console.log('Mau sac: ' + dog['color']);
console.log('Goi ham: ' + dog.sua() );
console.log('Tang can: ' + dog.tangCan(2.5) );


function phepCong (a, b) {
    return a + b;
}

// tao class JS bang Object constructor
function SinhVien (name, age, diemTB) {
    this.name = name;
    this.age = age;
}

let sv1 = new SinhVien("Le Van Long", 19);
sv1.diemTB = 9;
//console.log(sv1);

let sv2 = new SinhVien("Nguyen Tuan Anh", 20);
//console.log(sv2);

let arrSV = [sv1, sv2];
// arrSV.push(sv1);
// arrSV.push(sv2);

for (let index in arrSV) { 
    console.log(
        `Phan tu ${index} la: `, arrSV[index]);
}

//console.dir();



