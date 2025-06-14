let course={
    name: 'cognition',
    duration: '2 month',
    details(){
        return `${this.name} is ${this.duration}`
    }
}
console.log(`${course.name} is ${course.duration}`)
console.log(course.details())
course={
    name: 'cognition',
    duration: '2 month',
    get details(){
        return `${this.name} is ${this.duration}`
    },
    set details(value){
        let parts=value.split('is ');
        this.name=parts[0];
        this.duration=parts[1];
    }
}
course.details='codingninjas is 1 week'
console.log(course.details)