"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const constants_1 = require("./constants");
const User_1 = require("./entities/User");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname + "/migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [User_1.User],
    dbName: "postgres",
    user: "postgres",
    password: "AwS56$ds",
    type: "postgresql",
    debug: !constants_1.__prod__
};
//# sourceMappingURL=mikro-orm.config.js.map