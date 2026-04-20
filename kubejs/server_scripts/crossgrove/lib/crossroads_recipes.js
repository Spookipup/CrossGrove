// priority: 9960

function cgCrossroadsFireMold(event, id, input, output) {
  event.custom({
    type: 'minecraft:campfire_cooking',
    category: 'misc',
    ingredient: cgItem(input),
    result: output,
    experience: 0.3,
    cookingtime: 600
  }).id('crossgrove:casting_molds/campfire/' + id)

  event.smelting(output, input)
    .id('crossgrove:casting_molds/smelting/' + id)
}

function cgCrossroadsMill(event, id, input, output, count) {
  event.custom({
    type: 'crossroads:mill',
    input: input,
    output: [
      {
        item: output,
        count: count || 1
      }
    ]
  }).id('crossgrove:crossroads/millstone/' + id)
}
