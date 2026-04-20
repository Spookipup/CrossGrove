// priority: 9970

function cgAddAll(event, tag, ids) {
  if (!ids) {
    return
  }

  for (var i = 0; i < ids.length; i++) {
    event.add(tag, ids[i])
  }
}

function cgAddExisting(event, tag, ids) {
  if (!ids) {
    return
  }

  for (var i = 0; i < ids.length; i++) {
    var id = ids[i]
    if (Item.exists(id)) {
      event.add(tag, id)
    }
  }
}

function cgRemoveAll(event, tag, ids) {
  if (!ids) {
    return
  }

  for (var i = 0; i < ids.length; i++) {
    event.remove(tag, ids[i])
  }
}
