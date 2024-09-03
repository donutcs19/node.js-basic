let employee = {
    id: 100,
    name: 'Shikikie',
    salary: 200000 
};

console.log(employee);

console.log("id : " + employee.id);
console.log("ชื่อ : " + employee.name);
console.log("เงินเดือน : " + employee.salary.toLocaleString("th-TH") + " THB");

let array = [1,3,5,7,9,11];
console.log(array)
console.log(array.length)

for (let i = 0; i < array.length; i++){
    const item = array[i];
    console.log("ตัวที่:" + i + " ค่าคือ:" + item)
}
