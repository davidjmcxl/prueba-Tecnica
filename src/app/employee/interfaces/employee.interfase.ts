export interface Employee {
    ok:   boolean;
    data: Data[];
}

export interface Data {
    _id:             string;
    id:              number;
    employee_name:   string;
    employee_salary: number;
    employee_age:    number;
    profile_image:   null;
    __v:             number;
}
