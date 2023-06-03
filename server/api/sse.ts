export default eventHandler(async (e) => {
  setResponseStatus(e, 200)
  setHeaders(e, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
  })

  let counter = 0

  sseHooks.hook("message", (data) => {
    e.node.res.write(`id: ${++counter}\n`)
    e.node.res.write(`data: ${JSON.stringify({ data })}\n\n`)
  })

  await new Promise(() => {})
})
