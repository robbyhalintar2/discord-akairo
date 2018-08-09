/* eslint-disable no-console */

const { Command } = require('../..');
const util = require('util');

class PCommand extends Command {
    constructor() {
        super('p', {
            aliases: ['p'],
            args: [
                {
                    id: 'integer',
                    type: 'bigint',
                    prompt: {
                        start: 'Give me an integer!',
                        retry: 'That\'s not an integer, try again!',
                        optional: true
                    }
                }
            ]
        });
    }

    exec(message, args) {
        message.channel.send(util.inspect(args, { depth: 1 }), { code: 'js' });
    }
}

module.exports = PCommand;
