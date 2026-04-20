// priority: 851

var CG_EXDEORUM_REMOVED_ITEMS = [
  'exdeorum:crook',
  'exdeorum:bone_crook',
  'exdeorum:wooden_hammer',
  'exdeorum:stone_hammer',
  'exdeorum:golden_hammer',
  'exdeorum:iron_hammer',
  'exdeorum:diamond_hammer',
  'exdeorum:netherite_hammer',
  'exdeorum:compressed_wooden_hammer',
  'exdeorum:compressed_stone_hammer',
  'exdeorum:compressed_golden_hammer',
  'exdeorum:compressed_iron_hammer',
  'exdeorum:compressed_diamond_hammer',
  'exdeorum:compressed_netherite_hammer',
  'exdeorum:iron_mesh',
  'exdeorum:golden_mesh',
  'exdeorum:diamond_mesh',
  'exdeorum:netherite_mesh',
  'exdeorum:unfired_porcelain_bucket',
  'exdeorum:porcelain_bucket',
  'exdeorum:porcelain_water_bucket',
  'exdeorum:porcelain_lava_bucket',
  'exdeorum:porcelain_milk_bucket',
  'exdeorum:porcelain_witch_water_bucket',
  'exdeorum:iron_ore_chunk',
  'exdeorum:copper_ore_chunk',
  'exdeorum:gold_ore_chunk',
  'exdeorum:aluminum_ore_chunk',
  'exdeorum:cobalt_ore_chunk',
  'exdeorum:silver_ore_chunk',
  'exdeorum:lead_ore_chunk',
  'exdeorum:platinum_ore_chunk',
  'exdeorum:nickel_ore_chunk',
  'exdeorum:uranium_ore_chunk',
  'exdeorum:osmium_ore_chunk',
  'exdeorum:tin_ore_chunk',
  'exdeorum:zinc_ore_chunk',
  'exdeorum:iridium_ore_chunk',
  'exdeorum:thorium_ore_chunk',
  'exdeorum:magnesium_ore_chunk',
  'exdeorum:lithium_ore_chunk',
  'exdeorum:boron_ore_chunk'
]

var CG_EXDEORUM_STOCK_MESH_METALS = [
  'copper',
  'bronze',
  'iron',
  'steel',
  'cupronickel'
]

var CG_EXDEORUM_SIEVE_METALS = CG_BASIC_METALS

var CG_EXDEORUM_CRUCIBLE_METALS = [
  'copper',
  'tin',
  'lead',
  'gold'
]

var CG_EXDEORUM_WOOD_TYPES = CG_WOOD_TYPES_WITH_BAMBOO

function cgExDeorumStockMesh(metal) {
  return 'gtceu:' + metal + '_mesh'
}

function cgExDeorumForm(form, metal) {
  return cgMetalFormIngredient(form, metal)
}

function cgExDeorumOreProcessingItem(form, metal) {
  return cgOreProcessingItem(form, metal)
}

function cgExDeorumImpureDustItem(metal) {
  return 'gtceu:impure_' + metal + '_dust'
}

function cgExDeorumDustItem(metal) {
  return 'gtceu:' + metal + '_dust'
}

function cgExDeorumHammerDustItem(metal) {
  var impureDust = cgExDeorumImpureDustItem(metal)
  if (Item.exists(impureDust)) {
    return impureDust
  }

  var dust = cgExDeorumDustItem(metal)
  return Item.exists(dust) ? dust : null
}

function cgExDeorumBinomial(chance) {
  return {
    type: 'minecraft:binomial',
    n: 1.0,
    p: chance
  }
}

function cgExDeorumSieve(event, id, inputTag, mesh, result, amount) {
  event.custom({
    type: 'exdeorum:sieve',
    ingredient: {
      tag: inputTag
    },
    mesh: mesh,
    result: result,
    result_amount: amount
  }).id('crossgrove:ex_deorum/sieve/' + id)
}

function cgExDeorumHammer(event, id, ingredient, result, amount) {
  event.custom({
    type: 'exdeorum:hammer',
    ingredient: ingredient,
    result: result,
    result_amount: amount || 1.0
  }).id('crossgrove:ex_deorum/hammer/' + id)
}

function cgExDeorumLavaCrucible(event, id, item, fluid, amount) {
  event.custom({
    type: 'exdeorum:lava_crucible',
    ingredient: cgItem(item),
    fluid: {
      FluidName: fluid,
      Amount: amount
    }
  }).id('crossgrove:ex_deorum/lava_crucible/' + id)
}

function cgExDeorumSmelting(event, id, inputTag, result, experience, cookingTime) {
  event.custom({
    type: 'minecraft:smelting',
    ingredient: {
      tag: inputTag
    },
    result: result,
    experience: experience,
    cookingtime: cookingTime
  }).id('crossgrove:iron_processing/smelting/' + id)
}

function cgExDeorumRemoveCrushedOreSmelting(event, metal) {
  ;[
    'minecraft:smelting',
    'minecraft:blasting'
  ].forEach(type => {
    event.remove({ type: type, input: cgCrushedOreItem(metal) })
    event.remove({ type: type, input: '#forge:crushed_ores/' + metal })
  })

  event.remove({ id: new RegExp('^(minecraft|gtceu|crossroads|overgeared|quark):.*(smelt|blast|furnace).*crushed.*' + metal + '.*') })
  event.remove({ id: new RegExp('^(minecraft|gtceu|crossroads|overgeared|quark):.*crushed.*' + metal + '.*(smelt|blast|furnace).*') })
}
