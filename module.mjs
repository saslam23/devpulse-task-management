// @ts-check
import { module } from "@prisma/composer";
import devpulseService from "./service.mjs";

export default module("devpulse", ({ provision }) => {
  provision(devpulseService);
});
