import { entryPoint } from '@rpgjs/standalone'

let game, server, client

beforeEach(async () => {
    const game = await entryPoint([]).start() 
    server = game.server
    client = game.client
})

test('Test RPG mode starting', async () => {
    expect(server).toBeDefined() 
    expect(client).toBeDefined()
})

afterEach(() => {
    server.world.clear()
    client.reset()
})