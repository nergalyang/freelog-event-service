/**
 * Created by yuliang on 2017/9/11.
 */

'use strict'

const dataProvider = require('./app/data-provider/index')
const eventSubscribe = require('./event-core/event-subscribe')

module.exports = async (app) => {

    global.eggApp = app

    dataProvider.registerToApp(app)
    
    await eventSubscribe.subscribeRabbit(app)
}