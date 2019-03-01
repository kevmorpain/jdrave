export default function updateElement (list, data, push = true) {
  const { id } = data
  let index

  const el = list.find((item, idx) => {
    index = idx
    return item.id === id
  })

  if (el) {
    list.splice(index, 1, Object.assign({}, el, data))
  } else if (push) {
    list.push(data)
  }
}
