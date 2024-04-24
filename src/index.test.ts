import { Pasby } from "./index";

describe("pasby", () => {
    it("initialize client", async () => {
        const pasby = new Pasby({
            apikeyAuth: "",
            appSecretKey: "",
            basePath: 'https://l.pasby.africa',
            version: 'v1',
        });
    });
});
