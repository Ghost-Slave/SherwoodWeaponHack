'use strict'



const { prompt } = require('inquirer')
const { write } = require('clipboardy')

// The lists
const categories = ['Weapons', 'Amulets', 'Rings']
const modelList = ['Dagger', 'ShortSword', 'LongSword', 'Scimitar', 'Gladius', 'Cutlass', 'Hatchet', 'BeardedAxe', 'WarAxe', 'BattleAxe', 'GreatAxe', 'Mace', 'MorningStar', 'Pick', 'Warhammer', 'StandardShield', 'Buckler', 'KiteShield', 'BoxShield', 'Vibroblade', 'Forkblade', 'Uberblade', 'AxeSword', 'CrescentSword', 'Broadsword', 'GreatSword', 'Scepter', 'FourBladeAxe', 'SkullAxe', 'DragonScepter', 'TwinBladeAxe', 'CurvedAxe', 'Trident', 'Spear', 'Cleaver', 'Club', 'Hammer', 'NotchedShield', 'TrojanShield', 'HalfMoonShield', 'MirrorAxe', 'FeyIronAxe', 'MinotaurAxe', 'Godslayer', 'Hellrazor', 'Sawblade', 'Limbcutter', 'Soulflayer', 'Doomblade', 'DestinysBite']
const shaderList = ['None', 'Red', 'Blue', 'Green', 'Purple', 'Magic', 'Shadow', 'Gold', 'Fey']
const prefixList = ['None', 'Flaming', 'Ruby', 'Frost', 'Amethyst', 'Poison', 'Ice', 'Emerald', 'Shifting', 'Dimensional', 'Stormcaller', 'Vorpal', 'Ethreal', 'Spellfire', `Enchanter's`, 'Chaosforged', 'Mindfire', 'Bloodrune', 'Darkiron', `Reaper's`, 'Wraith', 'Shadow', `Blackknight's`, `Archmage's`, 'Corrupted', 'Phantomfury', 'Wretched', 'Dragondoom', 'Dragon Claw', 'Darkblood', `Lycan's Bane `, 'Shadowfey']
const suffixList = ['None', 'of Agony', 'of Victory', 'of Power', 'of Conquest', 'of Control', 'of Destruction', 'of Dominion', 'of Mastery', 'of Ascendancy', 'of Dominance', 'of Rage', 'of Anger', 'of Supremacy', 'of Eminence', 'of Fame', 'of Dominance', 'of Conquest', 'of Wickedness', 'of Triumph', 'of Adventure', 'of Creation', 'of Fortune', 'of Darkness', 'of Vengence', 'of Chaos', 'of Defense', 'of Warding', 'of Protection', 'of Preservation', 'of Fortification', 'of Resistance', 'of Safekeeping', 'of Health', 'of Hardiness', 'of Constitution', 'of Armor', 'of Imperviousness', 'of Unnatural Health']
const amulets = ['Enchantment of Speed', 'Talisman of Fire', 'Talisman of Ice', 'Amulet of Poison', 'Stone of Darkness']
const rings = ['Ring', 'RingOne', 'RingTwo', 'RingThree', 'RingFour', 'RingFive', 'RingSix', 'RingSeven', 'RingEight', 'RingNine', 'RingTen', 'RingEleven', 'RingTwelve']
const ringStats = ['+75 Health', '+50 Armor', '+50 Health, +25 Armor', '+100 Health']

// Start the whole input asking process
prompt([
  { type: 'list', name: 'category', message: 'Pick your category', choices: categories, default: 'Weapons' }
]).then(({ category }) => {
  if (category === 'Weapons') {
    prompt([
      { type: 'list', name: 'model', message: 'Pick your weapon model', choices: modelList, default: 'Dagger', filter: (v) => String.fromCharCode(modelList.indexOf(v) + 66) },
      { type: 'list', name: 'element', message: 'Pick your weapon element', choices: shaderList, default: 'None', filter: (v) => String.fromCharCode(shaderList.indexOf(v) + 66) },
      { type: 'list', name: 'prefix', message: 'Pick your weapon prefix', choices: prefixList, default: 'None', filter: (v) => String.fromCharCode(prefixList.indexOf(v) + 65) },
      { type: 'list', name: 'suffix', message: 'Pick your weapon suffix', choices: suffixList, default: 'None', filter: (v) => String.fromCharCode(suffixList.indexOf(v) + 65) }
    ]).then(({ model, element, suffix, prefix }) => {
      const code = model + element + suffix + prefix

      write(code).then(() => console.log(code))
    })
  } else if (category === 'Amulets') {
    prompt([
      { type: 'list', name: 'amulet', message: 'Pick your amulet', choices: amulets, default: amulets[0], filter: (v) => String.fromCharCode(amulets.indexOf(v) + 66) }
    ]).then(({ amulet }) => write(amulet).then(() => console.log(amulet)))
  } else if (category === 'Rings') {
    prompt([
      { type: 'list', name: 'stat', message: 'Pick your ring stat', choices: ringStats, default: '+75 Health', filter: (v) => String.fromCharCode(ringStats.indexOf(v) + 66) },
      { type: 'list', name: 'ring', message: 'Pick your ring model', choices: rings, default: 'Ring', filter: (v) => String.fromCharCode(rings.indexOf(v) + 66) },
      { type: 'list', name: 'suffix', message: 'Pick your ring suffix', choices: suffixList, default: 'None', filter: (v) => String.fromCharCode(suffixList.indexOf(v) + 65) }
    ]).then(({ stat, ring, suffix }) => {
      const code = stat + ring + suffix

      write(code).then(() => console.log(code))
    })
  }
})
