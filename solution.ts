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