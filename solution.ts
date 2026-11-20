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