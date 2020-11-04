import { GuidGenerator } from "./guid-generator/guid-generator";
import { Uuidv4GuidGenerator } from "./guid-generator/uuidv4-guid-generator";

const guidGenerator: GuidGenerator = new Uuidv4GuidGenerator();

export {
    guidGenerator
};
