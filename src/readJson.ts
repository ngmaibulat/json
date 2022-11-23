import fs from "node:fs/promises";

export async function readJson<T>(path: string): Promise<T> {
    const rawdata = await fs.readFile(path);
    const data = JSON.parse(rawdata.toString());
    return data as T;
}
