// priority: 10000

function cgArray(value) {
  return Array.isArray(value) ? value : [value]
}

function cgItem(id) {
  return { item: id }
}

function cgTag(id) {
  return { tag: id }
}

function cgStack(id, count) {
  var value = cgItem(id)
  if (count && count > 1) {
    value.count = count
  }
  return value
}

function cgExistingItems(ids) {
  return ids.filter(id => Item.exists(id))
}
