import fs from "node:fs/promises";

interface Student {
    name: string;
    age: number;
    gender: string;
    department: string;
    car: string;
}

export async function readJson<T>(path: string): Promise<T> {
    const rawdata = await fs.readFile(path);
    const data = JSON.parse(rawdata.toString());
    return data as T;
}

const data = await readJson<Student>("funtest.json");

console.log(data.name);
console.log(data.gender);
