import { Pasby } from "./index";

describe("pasby", () => {
    it("initialize client", async () => {
        const pasby = new Pasby({
            apikeyAuth: "bk-test_",
            appSecretKey: "snb_",
            basePath: 'https://s.pasby.africa',
            version: 'v2',
        });
    });
});
