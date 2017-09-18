'use strict';

const dbConfig = require('./db_config/dbconfig_local')

module.exports = appInfo => {

    const config = {
        keys: '20ab72d9397ff78c5058a106c635f008',

        i18n: {
            enable: false
        },

        /**
         * 关闭安全防护
         */
        security: {
            xframe: {
                enable: false,
            },
            csrf: {
                enable: false,
            }
        },

        ua: {
            enable: true
        },

        bodyParser: {
            enable: true,
        },

        middleware: ['errorHandler'],


        /**
         * mongoDB配置
         */
        mongo: {
            uri: 'mongodb://192.168.0.3:27017/auth'
        },

        /**
         * 上传文件相关配置
         */
        uploadConfig: {
            aliOss: {
                enable: true,
                accessKeyId: 'LTAIy8TOsSnNFfPb',
                accessKeySecret: 'Bt5yMbW89O7wMTVQsNUfvYfou5GPsL',
                bucket: 'freelog-shenzhen',
                internal: false,
                region: 'oss-cn-shenzhen',
                timeout: 180000
            },
            amzS3: {}
        },

        multipart: {
            autoFields: true,
            defaultCharset: 'utf8',
            fieldNameSize: 100,
            fieldSize: '100kb',
            fields: 10,
            fileSize: '100mb',
            files: 10,
            fileExtensions: [],
            whitelist: (fileName) => true,
        },

        freelogBase: {
            retCodeEnum: {},
            errCodeEnum: {}
        },

        gatewayUrl: 'http://192.168.0.3:1201',

        /**
         * DB-mysql相关配置
         */
        dbConfig: dbConfig,

        rabbitMq: {
            connOptions: {
                host: '192.168.99.100',
                port: 5672,
                login: 'guest',
                password: 'guest',
                authMechanism: 'AMQPLAIN'
            },
            implOptions: {
                reconnect: true,
                reconnectBackoffTime: 10000  //10秒尝试连接一次
            },
            exchange: {
                name: 'freelog-event-exchange',
                options: {
                    type: 'topic',
                    autoDelete: false,
                    confirm: true,
                    durable: true
                }
            },
            queues: [
                {
                    name: 'event-contract-fsm-event-register-queue',
                    options: {autoDelete: false, durable: true},
                    routingKeys: [
                        {
                            exchange: 'freelog-contract-exchange',
                            routingKey: 'event.register.*'
                        }
                    ]
                },
                {
                    name: 'event-subscribe-queue',
                    options: {autoDelete: false, durable: true},
                    routingKeys: [
                        {
                            exchange: 'freelog-contract-exchange',
                            routingKey: 'contract.active.contract'
                        }
                    ]
                }
            ]
        }
    }

    return config;
};
