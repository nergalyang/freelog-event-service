/**
 * Created by yuliang on 2017-06-28.
 * 开发环境DB配置
 */

"use strict"

module.exports = {
    /**
     * 用户相关DB配置
     */
    contract: {
        client: 'mysql2',
        connection: {
            host: '192.168.0.3',
            user: 'root',
            password: 'yuliang@@',
            database: 'fr_contract',
            charset: 'utf8',
            timezone: '+08:00',
            bigNumberStrings: true,
            supportBigNumbers: true,
            //dateStrings: true,
            connectTimeout: 10000
        },
        pool: {
            maxConnections: 50,
            minConnections: 2,
        },
        acquireConnectionTimeout: 10000,
        debug: false
    },
}