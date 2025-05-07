let originalObj = {
    name: "jaydeep",
    age: 25,
    address:{
        temp_address: {
            state: "Gujrat",
            pin: 380012,
            isRent: true
        },
        perma_address:{
            state: "WB",
            pin: 740012,
            isRent: false
        }
    }
}
let shallowCopy = {...originalObj }

// let deepCopy = JSON.parse(JSON.stringify(originalObj));

shallowCopy.name = "Jay"
shallowCopy.address.perma_address.pin = 222001;


// console.log(shallowCopy)
console.log(originalObj)