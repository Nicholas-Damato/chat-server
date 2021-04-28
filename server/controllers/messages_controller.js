let messages = []
let id = 0

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body
        const newMessage = {
            text,
            time,
            id
        }
        id++
        messages = [...messages, newMessage]
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },
    update: (req, res) => {
        const { text, time } = req.body
        const { id } = req.params
        const index = messages.findIndex((e) => e.id === +id)
        messages.splice(index, 1, {
            text: text || messages.text,
            time: time,
            id: +id
        })
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        const { id } = req.params
        messages = messages.filter((e) => e.id !== +id)
        res.status(200).send(messages)
    }
}