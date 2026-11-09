const multiplyValue =(value:number,multiplier?:number):number=>{
    if(multiplier){
        return value  * multiplier
    }
    else if(multiplier==0){
        return 0
    }
    else{
        return value * 2
    }
}


const processInput = (value:string | number | boolean)=>{
    if (typeof value == "string") {
        return value.trim().toLowerCase()
    }
    else if (typeof value == "number") {
        return value * 10
    }
    else {
        if(value == true){
            return "Active"
        }else{
            return "Inactive"
        }
    }
}



const formatCoordinate = ([latitude, longitude, locationName]:readonly [number, number, string]):string=>{
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const concatenateArrays =<T>(...arrays:T[][]):T[]=>{
    return arrays.flat()
}


interface Course{
    title : string
    students : number
    isPublished : boolean
}
const getPopularCourses=(course:Course[],minStudents:number):Course[]=>{
    const arr : Course[] = []
    for (let i = 0; i < course.length; i++) {
        if (course[i].isPublished==true) {
            if (course[i].students>=minStudents) {
                arr.push(course[i])
            }
        }
    }
    return arr
}

function pluckValues<T,K extends keyof T>(items: T[],key:K):T[K][]{
  return items.map((item) => item[key])
}

class Employee{
  protected name:string
  private baseSalary:number
  constructor(name:string,baseSalary:number){
    this.name =name
    this.baseSalary = baseSalary
  }
  getDetails():string{
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee{
  private department: string
  constructor(name: string,baseSalary: number,department: string){
    super(name,baseSalary)
    this.department = department
  }
  getRoleInfo(): string{
    return `Manager of ${this.department}: ${this.name}`
  }
}

async function validateAgeAsync(age:number):Promise<string>{
  return new Promise((resolve, reject)=>{
    if (age<18){
      reject(new Error("Access Denied: Must be 18 or older"))
      return
    }
    setTimeout(()=>{
      resolve("Access Granted")
    },1000)
  })
}