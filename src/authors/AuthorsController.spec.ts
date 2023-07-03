import { expect, test } from "vitest";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3000';

test('Should be greater then 1', async () => {
  const response = await axios.get("/authors");
  const output = response.data;

  expect(output).not.toBeNull();
  expect(output.length).greaterThanOrEqual(1);
});