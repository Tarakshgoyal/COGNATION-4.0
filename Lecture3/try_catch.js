let course={
    name: 'cognition',
    duration: '2month',
    get details(){
        return `${this.name} is ${this.duration}`;
    },
    set details(value){
        if(typeof value!=='string'){
            throw new Error(`value, ${value} is not string`)
        }
        let parts=value.split('is')
        this.name=parts[0]
        this.duration=parts[1]
    }
}
course.details='codingninjas is 1 week'
console.log(course.details)
try {
    course.details='codingninjas is 2 week'
    console.log(course.details)
}
catch(e){
    console.log(`caught an error: ${e.message}`)
}