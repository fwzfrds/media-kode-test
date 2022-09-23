const arr = [
    {
        "session_id": 1,
        "time": "09:00",
        "student": {
            "student_id": 1,
            "name": "Adi"
        },
        "class": {
            "class_id": 1,
            "name": "A"
        }
    },
    {
        "session_id": 2,
        "time": "10:00",
        "student": {
            "student_id": 5,
            "name": "Surya"
        },
        "class": {
            "class_id": 3,
            "name": "C"
        }
    },
    {
        "session_id": 2,
        "time": "10:00",
        "student": {
            "student_id": 8,
            "name": "Edi"
        },
        "class": {
            "class_id": 4,
            "name": "D"

        }
    },
    {
        "session_id": 2,
        "time": "10:00",
        "student": {
            "student_id": 7,
            "name": "Dede"
        },
        "class": {
            "class_id": 4,
            "name": "D"

        }
    },
    {
        "session_id": 1,
        "time": "09:00",
        "student": {
            "student_id": 3,
            "name": "Bayu"
        },
        "class": {
            "class_id": 2,
            "name": "B"

        }
    },
    {
        "session_id": 1,
        "time": "09:00",
        "student": {
            "student_id": 2,
            "name": "Budi"
        },
        "class": {
            "class_id": 1,
            "name": "A"

        }
    },
    {
        "session_id": 1,
        "time": "09:00",
        "student": {
            "student_id": 4,
            "name": "Dharma"
        },
        "class": {
            "class_id": 2,
            "name": "B"

        }
    },
    {
        "session_id": 2,
        "time": "10:00",
        "student": {
            "student_id": 3,
            "name": "Maha"
        },
        "class": {
            "class_id": 3,
            "name": "C"

        }

    }
]

const test = arr.filter(item => item.session_id === 2)

// console.log(test)

let obj1 = {}
let obj2 = {}

arr.forEach(item => {
    if (item.session_id === 1) {
        // obj1 = { session_id: item.session_id, time: item.time }
        if (obj1.classes) {
            if (obj1.classes[0].class_id === 1) {
                obj1 = { session_id: item.session_id, time: item.time, classes: [...obj1.classes] }
            } else if (obj1.classes[1].class_id === 1) {
                obj1 = { session_id: item.session_id, time: item.time, classes: [...obj1.classes, { class_id: item.class.class_id, name: item.class.name }] }
            } else {
                obj1 = { session_id: item.session_id, time: item.time, classes: [...obj1.classes, { class_id: item.class.class_id, name: item.class.name }] }
            }
        } else {
            obj1 = { session_id: item.session_id, time: item.time, classes: [{ class_id: item.class.class_id, name: item.class.name }] }
        }
    } else {
        obj2 = { session_id: item.session_id, time: item.time }
    }
})

console.log(obj1)
console.log(obj2)