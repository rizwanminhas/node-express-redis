import { createClient } from 'redis'

(async () => {
  const client = createClient()

  client.on('error', (err) => console.log('Redis Client Error', err))

  await client.connect()

  await client.set('name', 'rizwan')
  const value = await client.get('name')
  console.log(value)
})()