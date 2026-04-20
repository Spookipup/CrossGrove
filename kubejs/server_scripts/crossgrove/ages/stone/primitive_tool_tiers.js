// priority: 700

var CG_SOFT_ORE_MATERIALS = [
  'copper',
  'tin',
  'lead',
  'gold'
]

var CG_SOFT_ORE_BLOCKS = [
  'minecraft:copper_ore',
  'minecraft:deepslate_copper_ore',
  'minecraft:raw_copper_block',
  'minecraft:gold_ore',
  'minecraft:deepslate_gold_ore',
  'minecraft:nether_gold_ore',
  'minecraft:raw_gold_block'
]

var CG_SOFT_ORE_PATTERNS = [
  /^gtceu:.*(copper|tin|cassiterite|lead|galena|gold).*_ore$/,
  /^crossroads:.*(copper|tin|lead|gold).*_ore$/
]

var CG_BRONZE_ORE_MATERIALS = [
  'iron',
  'nickel',
  'zinc',
  'silver'
]

var CG_BRONZE_ORE_BLOCKS = [
  'minecraft:iron_ore',
  'minecraft:deepslate_iron_ore',
  'minecraft:raw_iron_block'
]

var CG_BRONZE_ORE_PATTERNS = [
  /^gtceu:.*(iron|hematite|magnetite|limonite|nickel|garnierite|pentlandite|zinc|sphalerite|silver|argentite).*_ore$/,
  /^crossroads:.*(iron|nickel|zinc|silver).*_ore$/
]

var CG_ABOVE_SOFT_ORE_TOOL_TIER_TAGS = [
  'minecraft:needs_iron_tool',
  'minecraft:needs_diamond_tool',
  'forge:needs_wood_tool',
  'forge:needs_netherite_tool',
  'overgeared:needs_copper_tool',
  'overgeared:needs_steel_tool',
  'crossgrove_integrations:needs_bronze_tool',
  'gtceu:needs_duranium_tool',
  'gtceu:needs_neutronium_tool'
]

ServerEvents.tags('block', event => {
  function markOreRequiresStone(source) {
    event.add('minecraft:mineable/pickaxe', source)
    event.add('minecraft:needs_stone_tool', source)
  }

  function makeSoftOreRequireStone(source) {
    markOreRequiresStone(source)
    CG_ABOVE_SOFT_ORE_TOOL_TIER_TAGS.forEach(tag => {
      event.remove(tag, source)
    })
  }

  function makeOreRequireIron(source) {
    event.add('minecraft:mineable/pickaxe', source)
    event.add('minecraft:needs_iron_tool', source)
    event.add('crossgrove_integrations:needs_bronze_tool', source)
    event.remove('minecraft:needs_stone_tool', source)
  }

  markOreRequiresStone('#forge:ores')
  CG_SOFT_ORE_BLOCKS.forEach(makeSoftOreRequireStone)

  CG_SOFT_ORE_MATERIALS.forEach(material => {
    makeSoftOreRequireStone('#forge:ores/' + material)
  })

  CG_SOFT_ORE_PATTERNS.forEach(makeSoftOreRequireStone)

  CG_BRONZE_ORE_BLOCKS.forEach(makeOreRequireIron)

  CG_BRONZE_ORE_MATERIALS.forEach(material => {
    makeOreRequireIron('#forge:ores/' + material)
  })

  CG_BRONZE_ORE_PATTERNS.forEach(makeOreRequireIron)
})
