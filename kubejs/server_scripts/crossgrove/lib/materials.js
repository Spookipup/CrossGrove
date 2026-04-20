// priority: 9990

var CG_VANILLA_WOOD_TYPES = [
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

var CG_WOOD_TYPES_WITH_BAMBOO = CG_VANILLA_WOOD_TYPES.concat(['bamboo'])

function cgWoodLogTag(wood) {
  if (wood === 'bamboo') {
    return '#minecraft:bamboo_blocks'
  }

  if (wood === 'crimson' || wood === 'warped') {
    return '#minecraft:' + wood + '_stems'
  }

  return '#minecraft:' + wood + '_logs'
}

function cgWoodPlanks(wood) {
  return 'minecraft:' + wood + '_planks'
}

var CG_BASIC_METALS = [
  'copper',
  'tin',
  'iron',
  'zinc',
  'lead',
  'nickel',
  'gold'
]

var CG_BASIC_ALLOYS = [
  'bronze',
  'brass',
  'steel',
  'cupronickel'
]

var CG_FORM_METALS = CG_BASIC_METALS.concat(CG_BASIC_ALLOYS)

var CG_CROSSROADS_GEAR_METALS = [
  'bronze',
  'copper',
  'gold',
  'iron',
  'tin'
]

var CG_TOOL_PART_METALS = [
  'copper',
  'bronze',
  'iron',
  'gold',
  'steel'
]

var CG_FORM_ITEM_PATTERNS = {
  metal_sponges: '%s_metal_sponge',
  hot_ingots: 'hot_%s_ingot',
  heavy_plates: 'double_%s_plate',
  plates: '%s_plate',
  light_plates: 'light_%s_plate',
  rods: '%s_rod',
  light_rods: 'light_%s_rod',
  threaded_rods: 'threaded_%s_rod',
  heavy_wires: 'heavy_%s_wire',
  fine_wires: 'fine_%s_wire',
  sieve_meshes: '%s_mesh',
  bolts: '%s_bolt',
  screws: '%s_screw'
}

var CG_ORE_PROCESSING_ITEM_PATTERNS = {
  concentrates: '%s_concentrate',
  fines: '%s_fines',
  tailings: '%s_tailings'
}

var CG_BILLET_ITEM_PATTERNS = {
  small_raw_billets: 'small_raw_%s_billet',
  raw_billets: 'raw_%s_billet',
  large_raw_billets: 'large_raw_%s_billet',
  small_billets: 'small_%s_billet',
  billets: '%s_billet',
  large_billets: 'large_%s_billet',
  small_precision_billets: 'small_precision_%s_billet',
  precision_billets: 'precision_%s_billet',
  large_precision_billets: 'large_precision_%s_billet'
}

function cgMaterialItem(metal, pattern) {
  return 'gtceu:' + pattern.replace('%s', metal)
}

function cgMetalFormItem(metal, form) {
  return cgMaterialItem(metal, CG_FORM_ITEM_PATTERNS[form])
}

function cgMetalFormTag(form, metal) {
  return 'crossgrove:metal_forms/' + form + '/' + metal
}

function cgMetalFormIngredient(form, metal) {
  return '#' + cgMetalFormTag(form, metal)
}

function cgOreProcessingItem(form, metal) {
  return cgMaterialItem(metal, CG_ORE_PROCESSING_ITEM_PATTERNS[form + 's'] || '%s_' + form)
}

function cgCrushedOreItem(metal) {
  return 'gtceu:crushed_' + metal + '_ore'
}

function cgCrushedOreTag(metal) {
  return 'crossgrove:ore_processing/crushed_ores/' + metal
}

function cgRawMaterialTag(metal) {
  return 'crossgrove:ore_processing/raw_materials/' + metal
}

function cgGtParts(prefix) {
  return CG_TOOL_PART_METALS.map(material => 'gtceu:' + prefix + '_' + material)
}

function cgCrossroadsMaterialItem(item, material) {
  return Item.of(item, '{material:"' + material + '"}')
}

function cgCrossroadsMaterialStack(item, material, count) {
  return Item.of(item, count, '{material:"' + material + '"}')
}
