// priority: 800

function item(id) {
  return { item: id }
}

ServerEvents.recipes(event => {
  function og(id) {
    return 'overgeared:' + id
  }

  function forging(id, input, output, pattern, hammering, tier) {
    event.custom({
      type: og('forging'),
      category: 'misc',
      group: '',
      hammering: hammering,
      has_quality: false,
      key: {
        '#': item(input)
      },
      need_quenching: true,
      needs_minigame: true,
      pattern: pattern,
      quality_difficulty: 'none',
      result: item(output),
      show_notification: true,
      tier: tier || 'stone'
    }).id('crossgrove:overgeared/' + id)
  }

  [
    'alloy_furnace',
    'casting_furnace',
    'nether_alloy_furnace',
    'copper_smithing_hammer_2',
    'stone_anvil_get',
    'heated_netherite_alloy',
    'heated_steel_ingot',
    'steel_block'
  ].forEach(id => {
    event.remove({ id: og(id) })
  })

  event.remove({ id: /^overgeared:(copper|iron)_ingot_from_(smelting|blasting)_.*/ })
  event.remove({ id: /^overgeared:heated_(copper|iron)_ingot_from_(smelting|blasting)_(raw_|.*ore).*/ })
  event.remove({ id: /^overgeared:.*_from_cast_(blasting|furnace|smelting)$/ })
  event.remove({ id: /^overgeared:.*_nugget_from_(blasting|smelting)_.*/ })
  event.remove({ id: /^overgeared:(crude_steel|heated_crude_steel|steel_ingot|steel_nugget|steel_block|netherite_alloy|heated_netherite_alloy|silver_ingot).*from_.*/ })

  event.remove({ id: og('copper_plate') })
  event.remove({ id: og('iron_plate') })
  event.remove({ id: og('steel_plate') })

  event.shapeless(og('knappable_rock'), [
    'survivalistessentials:rock_stone'
  ]).id('crossgrove:overgeared/knappable_rock_from_survivalist_rock')

  event.shaped(og('stone_anvil'), [
    'RRR',
    ' S ',
    'SSS'
  ], {
    R: 'survivalistessentials:rock_stone',
    S: 'minecraft:stone'
  }).id('crossgrove:overgeared/stone_anvil')

  forging('copper_plate_from_hot_ingot', 'gtceu:hot_copper_ingot', 'gtceu:copper_plate', ['#'], 3, 'stone')
  forging('iron_plate_from_hot_ingot', 'gtceu:hot_iron_ingot', 'gtceu:iron_plate', ['#'], 3, 'stone')
  event.remove({ output: /^overgeared:(crude_steel|heated_crude_steel|heated_steel_ingot|steel_.*)$/ })
  event.remove({ input: /^overgeared:(crude_steel|heated_crude_steel|heated_steel_ingot|steel_(ingot|nugget|block|plate))$/ })
})

ServerEvents.tags('item', event => {
  [
    ['forge:ingots/steel', 'overgeared:steel_ingot'],
    ['forge:nuggets/steel', 'overgeared:steel_nugget'],
    ['forge:plates/steel', 'overgeared:steel_plate'],
    ['forge:storage_blocks/steel', 'overgeared:steel_block'],
    ['forge:storage_blocks', 'overgeared:steel_block']
  ].forEach(entry => {
    event.remove(entry[0], entry[1])
  })

  event.add('crossgrove:removed/overgeared_metallurgy_shortcuts', [
    'overgeared:alloy_furnace',
    'overgeared:casting_furnace',
    'overgeared:nether_alloy_furnace',
    'overgeared:crude_steel',
    'overgeared:heated_crude_steel',
    'overgeared:heated_steel_ingot',
    'overgeared:netherite_alloy',
    'overgeared:heated_netherite_alloy',
    'overgeared:steel_ingot',
    'overgeared:steel_nugget',
    'overgeared:steel_block',
    'overgeared:steel_plate',
    'overgeared:steel_arrow',
    'overgeared:steel_arrow_head',
    'overgeared:steel_axe',
    'overgeared:steel_axe_head',
    'overgeared:steel_boots',
    'overgeared:steel_chestplate',
    'overgeared:steel_hammer_head',
    'overgeared:steel_helmet',
    'overgeared:steel_hoe',
    'overgeared:steel_hoe_head',
    'overgeared:steel_leggings',
    'overgeared:steel_pickaxe',
    'overgeared:steel_pickaxe_head',
    'overgeared:steel_shovel',
    'overgeared:steel_shovel_head',
    'overgeared:steel_sword',
    'overgeared:steel_sword_blade',
    'overgeared:steel_tong',
    'overgeared:steel_tongs'
  ])

  event.add('crossgrove:tool_heads/axes', [
    'overgeared:stone_axe_head',
    'overgeared:copper_axe_head',
    'overgeared:iron_axe_head',
    'overgeared:golden_axe_head'
  ])

  event.add('crossgrove:tool_heads/pickaxes', [
    'overgeared:stone_pickaxe_head',
    'overgeared:copper_pickaxe_head',
    'overgeared:iron_pickaxe_head',
    'overgeared:golden_pickaxe_head'
  ])

  event.add('crossgrove:tool_heads/shovels', [
    'overgeared:stone_shovel_head',
    'overgeared:copper_shovel_head',
    'overgeared:iron_shovel_head',
    'overgeared:golden_shovel_head'
  ])

  event.add('crossgrove:tool_heads/swords', [
    'overgeared:stone_sword_blade',
    'overgeared:copper_sword_blade',
    'overgeared:iron_sword_blade',
    'overgeared:golden_sword_blade'
  ])

  event.add('crossgrove:tool_heads/hoes', [
    'overgeared:stone_hoe_head',
    'overgeared:copper_hoe_head',
    'overgeared:iron_hoe_head',
    'overgeared:golden_hoe_head'
  ])

  event.add('crossgrove:tool_heads/hammers', [
    'overgeared:stone_hammer_head',
    'overgeared:copper_hammer_head'
  ])
})

ServerEvents.tags('block', event => {
  event.remove('forge:storage_blocks/steel', 'overgeared:steel_block')
  event.remove('forge:storage_blocks', 'overgeared:steel_block')
})
