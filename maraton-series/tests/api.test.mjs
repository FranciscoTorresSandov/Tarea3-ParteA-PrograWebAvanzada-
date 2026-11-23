import test from 'node:test'
import assert from 'node:assert/strict'
import { buscarSeries, enviarPropuesta } from '../series-js/js/api.js'

test('buscarSeries: codifica texto y convierte wrapper de TVmaze', async () => {
  const previous=globalThis.fetch
  globalThis.fetch=async(url)=>{
    assert.match(url,/q=the%20office$/)
    return {ok:true,json:async()=>[{score:0.5,show:{id:1,name:'The Office'}}]}
  }
  try {assert.deepEqual(await buscarSeries('the office'),[{id:1,name:'The Office'}])}
  finally {globalThis.fetch=previous}
})
test('buscarSeries: HTTP 404 produce error', async () => {
  const previous=globalThis.fetch
  globalThis.fetch=async()=>({ok:false,status:404})
  try {await assert.rejects(buscarSeries('x'),/404/)} finally {globalThis.fetch=previous}
})
test('enviarPropuesta: POST JSON y confirmación simulada', async () => {
  const previous=globalThis.fetch
  globalThis.fetch=async(url,config)=>{
    assert.equal(config.method,'POST')
    assert.equal(config.headers['Content-Type'],'application/json')
    assert.equal(JSON.parse(config.body).titulo,'Dark')
    return {ok:true,json:async()=>({id:101})}
  }
  try {assert.deepEqual(await enviarPropuesta({titulo:'Dark'}),{id:101})}
  finally {globalThis.fetch=previous}
})
