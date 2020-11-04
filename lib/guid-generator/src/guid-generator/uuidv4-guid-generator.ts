import { v4 as uuidv4 } from "uuid";

import { GuidGenerator } from "./guid-generator";

/**
 * @internal
 */
export class Uuidv4GuidGenerator implements GuidGenerator {
    create(): string {
        return uuidv4();
    }
}
