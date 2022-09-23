// soal 1
const input = [
    {
        session_name: "first test",
        classes: [
            {
                class_name: undefined,
                students: [
                    {
                        student_name: "john"
                    }
                ]
            }
        ]
    },
    {
        session_name: null,
        classes: [
            {
                class_name: "second class",
                students: [
                    {
                        student_name: "doe"
                    }
                ]
            }
        ]
    }
]

const remove = () => {
    let result = []

    input.map(item => {
        if (item.session_name) {
            result = [...result, item]
        } else {
            delete item.session_name
            result = [...result, item]
        }
    })

    result.map(item => {
        if (!item.classes[0].class_name) {
            delete item.classes[0].class_name
        }
    })

    return result
}

console.log(remove())