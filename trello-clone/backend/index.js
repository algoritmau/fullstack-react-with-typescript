const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = 4000
let lists = [
  {
    id: "0",
    text: "To Do",
    tasks: [{ id: "c0", text: "Generate app scaffold" }]
  },
  {
    id: "1",
    text: "In Progress",
    tasks: [{ id: "c2", text: "Learn Typescript" }]
  },
  {
    id: "2",
    text: "Done",
    tasks: [{ id: "c3", text: "Begin to use static typing" }]
  }
]

app.post("/save", (req, res) => {
  // console.log(req.body)
  lists = req.body.lists

  return res.json({ success: true })
})

app.get("/load", (_, res) => res.json({ lists: lists }))

app.listen(PORT, () =>
  console.log(`Kanban backend running on http://localhost:${PORT}!`)
)
