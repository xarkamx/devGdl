import { Paths } from "./PathsEnums.js";
import { Ajax } from "./../../tools/Ajax";
import { iConsumer } from "./iConsumer.js";
export class MockConsumer extends Ajax implements iConsumer {
  public get() {}
  public async show(id: Number) {
    const mockPath = Paths.mock + "/" + id;
    const json = await this.fetchData(mockPath);
    console.log(json.content.rendered);
    return json;
  }
}
