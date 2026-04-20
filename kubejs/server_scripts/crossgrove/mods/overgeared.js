// priority: 800

ServerEvents.recipes(event => {
  function og(id) {
    return 'overgeared:' + id
  }

  function normalIngot(material) {
    var gtIngot = 'gtceu:' + material + '_ingot'
    if (Item.exists(gtIngot)) {
      return gtIngot
    }

    var vanillaIngots = {
      copper: 'minecraft:copper_ingot',
      gold: 'minecraft:gold_ingot',
      iron: 'minecraft:iron_ingot'
    }
    return vanillaIngots[material] || gtIngot
  }

  function cooling(id, input, output) {
    if (!Item.exists(input) || !Item.exists(output)) {
      return
    }

    event.custom({
      type: og('cooling'),
      input: cgItem(input),
      output: cgItem(output)
    }).id('crossgrove:overgeared/cooling/' + id)
  }

  function gtHotIngotCooling(material) {
    cooling(
      'gtceu_hot_' + material + '_ingot',
      'gtceu:hot_' + material + '_ingot',
      normalIngot(material)
    )
  }

  function itemToTooltype(id, tooltype, parts) {
    var existingParts = cgExistingItems(parts)
    if (existingParts.length === 0) {
      return
    }

    event.custom({
      type: og('item_to_tooltype'),
      item: existingParts.map(cgItem),
      tooltype: tooltype
    }).id('crossgrove:overgeared/item_to_tooltype/' + id)
  }

  function reheatBloom(type, id, cookingTime) {
    event.custom({
      type: 'minecraft:' + type,
      category: 'misc',
      cookingtime: cookingTime,
      experience: 0.0,
      ingredient: cgItem('crossgrove_integrations:iron_bloom'),
      result: 'crossgrove_integrations:hot_iron_bloom'
    }).id('crossgrove:iron_processing/' + id)
  }

  function reheatIngot(material, type, id, cookingTime) {
    var output = 'gtceu:hot_' + material + '_ingot'
    if (!Item.exists(output)) {
      return
    }

    event.custom({
      type: 'minecraft:' + type,
      category: 'misc',
      cookingtime: cookingTime,
      experience: 0.0,
      ingredient: {
        tag: 'forge:ingots/' + material
      },
      result: output
    }).id('crossgrove:metalworking/' + id)
  }

  function forging(id, input, output, pattern, hammering, tier, options) {
    options = options || {}
    var recipe = {
      type: og('forging'),
      category: 'misc',
      group: '',
      hammering: hammering,
      has_quality: false,
      key: {
        '#': cgItem(input)
      },
      need_quenching: options.needQuenching !== undefined ? options.needQuenching : true,
      needs_minigame: options.needsMinigame !== undefined ? options.needsMinigame : false,
      pattern: pattern,
      quality_difficulty: 'none',
      result: cgStack(output, options.count),
      show_notification: true,
      tier: tier || 'stone'
    }

    if (options.failedOutput) {
      recipe.result_failed = cgStack(options.failedOutput, options.failedCount)
    }

    event.custom(recipe).id('crossgrove:overgeared/' + id)
  }

  [
    'alloy_furnace',
    'casting_furnace',
    'nether_alloy_furnace',
    'copper_smithing_hammer',
    'copper_smithing_hammer_2',
    'iron_tong',
    'smithing_hammer',
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
  event.remove({ id: /^overgeared:(copper|iron|golden|steel)_(axe_head|pickaxe_head|shovel_head|hoe_head|sword_blade|hammer_head)(_\d+)?$/ })
  event.remove({ input: /^overgeared:(copper|iron|golden|steel)_(axe_head|pickaxe_head|shovel_head|hoe_head|sword_blade|hammer_head)$/ })
  event.remove({ output: /^overgeared:(copper|iron|golden|steel)_(axe_head|pickaxe_head|shovel_head|hoe_head|sword_blade|hammer_head)$/ })
  event.remove({ input: /^overgeared:(copper_)?smithing_hammer$/ })
  event.remove({ output: /^overgeared:(copper_)?smithing_hammer$/ })

  event.remove({ id: og('copper_plate') })
  event.remove({ id: og('iron_plate') })
  event.remove({ id: og('steel_plate') })
  ;[
    'axe',
    'pickaxe',
    'shovel',
    'hoe',
    'sword',
    'hammer'
  ].forEach(tooltype => {
    event.remove({ id: og('item_to_tooltype/' + tooltype) })
  })

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
  forging('iron_rod_from_hot_ingot', 'gtceu:hot_iron_ingot', 'gtceu:iron_rod', ['#'], 4, 'stone', {
    count: 2
  })
  forging('iron_tong_from_hot_iron_ingot', 'gtceu:hot_iron_ingot', 'overgeared:iron_tong', [
    '  #',
    ' ##',
    '#  '
  ], 2, 'stone')
  forging('steel_plate_from_hot_ingot', 'gtceu:hot_steel_ingot', 'gtceu:steel_plate', ['#'], 4, 'stone')
  forging('steel_rod_from_hot_ingot', 'gtceu:hot_steel_ingot', 'gtceu:steel_rod', ['#'], 5, 'stone', {
    count: 2
  })
  forging('hot_iron_bloom_to_hot_iron_ingot', 'crossgrove_integrations:hot_iron_bloom', 'gtceu:hot_iron_ingot', ['#'], 4, 'stone', {
    failedOutput: 'crossgrove_integrations:iron_bloom',
    needQuenching: false
  })

  cooling('iron_bloom_from_hot_iron_bloom', 'crossgrove_integrations:hot_iron_bloom', 'crossgrove_integrations:iron_bloom')

  for (var i = 0; i < CG_GT_HOT_INGOT_MATERIALS.length; i++) {
    gtHotIngotCooling(CG_GT_HOT_INGOT_MATERIALS[i])
  }

  reheatBloom('smelting', 'hot_iron_bloom_from_reheated_iron_bloom', 400)
  reheatBloom('blasting', 'hot_iron_bloom_from_blasting_iron_bloom', 200)
  reheatIngot('copper', 'smelting', 'hot_copper_ingot_from_reheated_copper_ingot', 200)
  reheatIngot('copper', 'blasting', 'hot_copper_ingot_from_blasting_copper_ingot', 100)
  reheatIngot('iron', 'smelting', 'hot_iron_ingot_from_reheated_iron_ingot', 200)
  reheatIngot('iron', 'blasting', 'hot_iron_ingot_from_blasting_iron_ingot', 100)
  reheatIngot('steel', 'smelting', 'hot_steel_ingot_from_reheated_steel_ingot', 600)
  reheatIngot('steel', 'blasting', 'hot_steel_ingot_from_blasting_steel_ingot', 300)

  itemToTooltype('axe', 'axe', ['overgeared:stone_axe_head'].concat(cgGtParts('tool_head_axe')))
  itemToTooltype('pickaxe', 'pickaxe', ['overgeared:stone_pickaxe_head'].concat(cgGtParts('tool_head_pickaxe')))
  itemToTooltype('shovel', 'shovel', ['overgeared:stone_shovel_head'].concat(cgGtParts('tool_head_shovel')))
  itemToTooltype('hoe', 'hoe', ['overgeared:stone_hoe_head'].concat(cgGtParts('tool_head_hoe')))
  itemToTooltype('sword', 'sword', ['overgeared:stone_sword_blade'].concat(cgGtParts('tool_blade_sword')))
  itemToTooltype('hammer', 'hammer', ['overgeared:stone_hammer_head'].concat(cgGtParts('tool_head_hammer')))

  event.remove({ output: /^overgeared:(crude_steel|heated_crude_steel|heated_steel_ingot|steel_.*)$/ })
  event.remove({ input: /^overgeared:(crude_steel|heated_crude_steel|heated_steel_ingot|steel_(ingot|nugget|block|plate))$/ })
})

ServerEvents.tags('item', event => {
  var overgearedMetalHeads = [
    'overgeared:copper_axe_head',
    'overgeared:copper_pickaxe_head',
    'overgeared:copper_shovel_head',
    'overgeared:copper_hoe_head',
    'overgeared:copper_sword_blade',
    'overgeared:copper_hammer_head',
    'overgeared:iron_axe_head',
    'overgeared:iron_pickaxe_head',
    'overgeared:iron_shovel_head',
    'overgeared:iron_hoe_head',
    'overgeared:iron_sword_blade',
    'overgeared:golden_axe_head',
    'overgeared:golden_pickaxe_head',
    'overgeared:golden_shovel_head',
    'overgeared:golden_hoe_head',
    'overgeared:golden_sword_blade',
    'overgeared:steel_axe_head',
    'overgeared:steel_pickaxe_head',
    'overgeared:steel_shovel_head',
    'overgeared:steel_hoe_head',
    'overgeared:steel_sword_blade',
    'overgeared:steel_hammer_head'
  ]

  var removedSteelTags = [
    ['forge:ingots/steel', 'overgeared:steel_ingot'],
    ['forge:nuggets/steel', 'overgeared:steel_nugget'],
    ['forge:plates/steel', 'overgeared:steel_plate'],
    ['forge:storage_blocks/steel', 'overgeared:steel_block'],
    ['forge:storage_blocks', 'overgeared:steel_block']
  ]

  for (var i = 0; i < removedSteelTags.length; i++) {
    event.remove(removedSteelTags[i][0], removedSteelTags[i][1])
  }

  cgAddAll(event, 'crossgrove:removed/overgeared_metallurgy_shortcuts', [
    'overgeared:alloy_furnace',
    'overgeared:casting_furnace',
    'overgeared:nether_alloy_furnace',
    'overgeared:copper_smithing_hammer',
    'overgeared:smithing_hammer',
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
  cgAddAll(event, 'crossgrove:removed/overgeared_metallurgy_shortcuts', overgearedMetalHeads)

  cgRemoveAll(event, 'overgeared:smithing_hammers', [
    'overgeared:copper_smithing_hammer',
    'overgeared:smithing_hammer'
  ])
  event.add('overgeared:smithing_hammers', '#gtceu:tools/crafting_hammers')
  cgAddExisting(event, 'overgeared:smithing_hammers', cgGtHammers())
  event.add('overgeared:heated_metals', 'crossgrove_integrations:hot_iron_bloom')
  cgAddExisting(event, 'overgeared:heated_metals', cgGtHotIngots())

  cgAddAll(event, 'crossgrove:tool_heads/axes', [
    'overgeared:stone_axe_head'
  ])
  cgAddExisting(event, 'crossgrove:tool_heads/axes', cgGtParts('tool_head_axe'))

  cgAddAll(event, 'crossgrove:tool_heads/pickaxes', [
    'overgeared:stone_pickaxe_head'
  ])
  cgAddExisting(event, 'crossgrove:tool_heads/pickaxes', cgGtParts('tool_head_pickaxe'))

  cgAddAll(event, 'crossgrove:tool_heads/shovels', [
    'overgeared:stone_shovel_head'
  ])
  cgAddExisting(event, 'crossgrove:tool_heads/shovels', cgGtParts('tool_head_shovel'))

  cgAddAll(event, 'crossgrove:tool_heads/swords', [
    'overgeared:stone_sword_blade'
  ])
  cgAddExisting(event, 'crossgrove:tool_heads/swords', cgGtParts('tool_blade_sword'))

  cgAddAll(event, 'crossgrove:tool_heads/hoes', [
    'overgeared:stone_hoe_head'
  ])
  cgAddExisting(event, 'crossgrove:tool_heads/hoes', cgGtParts('tool_head_hoe'))

  cgAddAll(event, 'crossgrove:tool_heads/hammers', [
    'overgeared:stone_hammer_head'
  ])
  cgAddExisting(event, 'crossgrove:tool_heads/hammers', cgGtParts('tool_head_hammer'))
})

ServerEvents.tags('block', event => {
  event.remove('forge:storage_blocks/steel', 'overgeared:steel_block')
  event.remove('forge:storage_blocks', 'overgeared:steel_block')
})
