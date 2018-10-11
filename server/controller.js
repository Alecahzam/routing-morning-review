let messages = [];
let id = 0;

const getMessages = (req, res) => {
    res.status(200).send(messages)
}

const addMessage = (req,res) => {

    const {title} = req.body
    console.log(req.body)

    messages.push({id, title})
    res.status(200).send(messages)
    id++
}

const editMessage = (req, res) => {
    const {title} = req.body
    const {id} = req.params
    console.log('edit', id, title)

    const newIndex = messages.findIndex(e=> e.id == id)

    let message = messages[newIndex]

   console.log( message)

   messages[newIndex] = {
    id: message.id,
    title: title || message.title
  };

  res.status(200).send(messages)

}

module.exports = {
    getMessages,
    addMessage,
    editMessage
}