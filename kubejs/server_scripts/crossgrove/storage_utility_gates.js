// priority: 850

var CG_DRAWER_WOODS = [
  'oak',
  'spruce',
  'birch',
  'jungle',
  'acacia',
  'dark_oak',
  'mangrove',
  'cherry',
  'crimson',
  'warped'
]

var CG_FUNCTIONAL_STORAGE_LOCKED_ITEMS = [
  'functionalstorage:storage_controller',
  'functionalstorage:controller_extension',
  'functionalstorage:framed_storage_controller',
  'functionalstorage:framed_controller_extension',
  'functionalstorage:simple_compacting_drawer',
  'functionalstorage:compacting_drawer',
  'functionalstorage:framed_simple_compacting_drawer',
  'functionalstorage:compacting_framed_drawer',
  'functionalstorage:ender_drawer',
  'functionalstorage:armory_cabinet',
  'functionalstorage:fluid_1',
  'functionalstorage:fluid_2',
  'functionalstorage:fluid_4',
  'functionalstorage:framed_1',
  'functionalstorage:framed_2',
  'functionalstorage:framed_4',
  'functionalstorage:copper_upgrade',
  'functionalstorage:gold_upgrade',
  'functionalstorage:diamond_upgrade',
  'functionalstorage:netherite_upgrade',
  'functionalstorage:iron_downgrade',
  'functionalstorage:void_upgrade',
  'functionalstorage:redstone_upgrade',
  'functionalstorage:pusher_upgrade',
  'functionalstorage:puller_upgrade',
  'functionalstorage:collector_upgrade',
  'functionalstorage:configuration_tool',
  'functionalstorage:linking_tool',
  'functionalstorage:rubber_1',
  'functionalstorage:rubber_2',
  'functionalstorage:rubber_4',
  'functionalstorage:treated_1',
  'functionalstorage:treated_2',
  'functionalstorage:treated_4'
]

function cgDrawerOutput(wood, size, count) {
  var id = 'functionalstorage:' + wood + '_' + size
  return count > 1 ? count + 'x ' + id : id
}

ServerEvents.recipes(event => {
  event.remove({ id: /^functionalstorage:.+/ })
  event.remove({ id: /^rubberdrawers:.+/ })

  CG_DRAWER_WOODS.forEach(wood => {
    var plank = 'minecraft:' + wood + '_planks'

    event.shaped(cgDrawerOutput(wood, 1, 1), [
      'PWP',
      'SCS',
      'PWP'
    ], {
      P: 'gtceu:wood_plate',
      W: plank,
      S: 'gtceu:wood_screw',
      C: '#forge:chests/wooden'
    }).id('crossgrove:storage/functional_storage/' + wood + '_1')

    event.shaped(cgDrawerOutput(wood, 2, 2), [
      'PCP',
      'SWS',
      'PCP'
    ], {
      P: 'gtceu:wood_plate',
      W: plank,
      S: 'gtceu:wood_screw',
      C: '#forge:chests/wooden'
    }).id('crossgrove:storage/functional_storage/' + wood + '_2')

    event.shaped(cgDrawerOutput(wood, 4, 4), [
      'CPC',
      'SWS',
      'CPC'
    ], {
      P: 'gtceu:wood_plate',
      W: plank,
      S: 'gtceu:wood_screw',
      C: '#forge:chests/wooden'
    }).id('crossgrove:storage/functional_storage/' + wood + '_4')
  })
})

ServerEvents.tags('item', event => {
  event.add('crossgrove:removed/storage_networking', CG_FUNCTIONAL_STORAGE_LOCKED_ITEMS)
})
