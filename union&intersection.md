Title:
    Union (|) and Intersection (&) types in TypeScript.

Introduction:
    Union : it needs, when we have any  type of object like either A or B .
    Intersection: it needs, when we have to combine multiple type of object.

example of code:
type user = {
    userId: string;
    email: string;
}

type userInfo = {
    code: number;
    message: string
}

Union:
    type satus = user | userInfo

Intersection:
    type userDetails = user &Intersection userInfo
