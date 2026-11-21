function multiplyvalue (value : number , multiplier ?: number) {
    if(multiplier === undefined){
        return value * 2;
    } else {
        return value * multiplier;
    }
};


function processInput (value : string | number | boolean) {
    if(typeof(value) === "string"){
        return value.trim().toLowerCase();
    }else if(typeof(value) === "number"){
        return value * 10;
    }else if (typeof(value) === "boolean"){
        if(value === true){
            return "Active";
        }
        return "Inactive";
    };
}


function formatCoordinate (coordinate : readonly [number, number, string]){
    const latitude = coordinate[0];
    const longitude = coordinate[1];
    const location = coordinate[2];
    return `Location: ${location} (${latitude}, ${longitude})`;
}


function concatenateArrays<T> (...arrays : T[][]) : T[] {
    return arrays.flat();
}


interface Course {
    title : string,
    students : number,
    isPublished : boolean,
}

function getPopularCourses (courses : Course[], ministudens : number) {
    const popularCourse = courses.filter((course) => 
        course.students >= ministudens && course.isPublished=== true);
    return popularCourse;
}


function pluckValues<T, K extends keyof T>(items: T[], key: K ): T[K][] {
    const values = items.map((item) => item[key])
    return values;
}


class Employee {
    constructor(
        protected name : string,
        private baseSalary : number,
    ){}

    getDetails() : string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
  constructor(name: string, baseSalary: number, private department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}


function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}