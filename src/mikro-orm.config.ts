import { MikroORM } from '@mikro-orm/core'
import path from 'path'
import { __prod__ } from './constants'
import { User } from './entities/User';

export default {
    migrations: {
        path: path.join(__dirname + "/migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [User],
    dbName: "postgres",
    user: "postgres",
    password: "AwS56$ds",
    type: "postgresql",
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];