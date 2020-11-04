import { guidGenerator } from "/dist/guid-generator/index.js";

export function run(): void {
    const guid = guidGenerator.create();
    document.write(guid);
}
