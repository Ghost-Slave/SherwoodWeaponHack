'use strict'



const { prompt } = require('inquirer')
const { write } = require('clipboardy')

// The lists
const avatars = ['MaleWarrior', 'FemaleWarrior', 'DarkKnight', 'Skeleton', 'Viking', 'Ranger']
const teams = ['Red', 'Green', 'Blue', 'Purple', 'Yellow', 'Cyan', 'White', 'Black']
const armors = ['Gold', 'Dark', 'Blue']
const skins = ['White', 'Dark', 'Darker', 'Darkest']
const heads = {
  'B': ['Long', 'Short'],
  'C': ['Winged', 'Double pony', 'Pony with band', 'Short', 'Long pony', 'Long'],
  'D': ['Big spike', 'Small spike', 'Round', 'Roman', 'Malformed'],
  'E': ['None'],
  'F': ['None'],
  'G': ['Winged', 'Double pony', 'Pony with band', 'Short', 'Long pony', 'Long']
}
const haircolors = ['Blonde', 'White', 'Red', 'Black', 'Brown']

// Start the whole input asking process
prompt([{
  type: 'list',
  name: 'avatar',
  message: 'Pick your avatar',
  choices: avatars,
  default: 'MaleWarrior',
  filter: (v) => String.fromCharCode(avatars.indexOf(v) + 66)
}]).then(({ avatar }) => {
  let code = avatar

  // Remove blue armor
  if (avatar === 'E' || avatar === 'F' || avatar === 'G') {
    armors.pop()
  }

  // Remove skins
  if (avatar === 'E') {
    skins.pop()
    skins.pop()
    skins.pop()
  }

  // No hair color
  if (avatar === 'D' || avatar === 'E' || avatar === 'F') {
    haircolors[0] = 'None'

    haircolors.pop()
    haircolors.pop()
    haircolors.pop()
    haircolors.pop()
  }

  prompt([{
    type: 'list',
    name: 'team',
    message: 'Pick your team',
    choices: teams,
    default: 'Red',
    filter: (v) => String.fromCharCode(teams.indexOf(v) + 67)
  }]).then(({ team }) => {
    code += team

    prompt([{
      type: 'list',
      name: 'armor',
      message: 'Pick your armor',
      choices: armors,
      default: 'Gold',
      filter: (v) => String.fromCharCode(armors.indexOf(v) + 66)
    }]).then(({ armor }) => {
      code += armor

      prompt([{
        type: 'list',
        name: 'skin',
        message: 'Pick your skin',
        choices: skins,
        default: 'White',
        filter: (v) => String.fromCharCode(skins.indexOf(v) + 66)
      }]).then(({ skin }) => {
        code += skin

        prompt([{
          type: 'list',
          name: 'head',
          message: 'Pick your head',
          choices: heads[avatar],
          default: heads[avatar][0],
          filter: (v) => String.fromCharCode(heads[avatar].indexOf(v) + (avatar === 'D' ? 66 : 67))
        }]).then(({ head }) => {
          code += head

          prompt([{
            type: 'list',
            name: 'haircolor',
            message: 'Pick your hair color',
            choices: haircolors,
            default: haircolors[0],
            filter: (v) => String.fromCharCode(haircolors.indexOf(v) + 66)
          }]).then(({ haircolor }) => {
            code += haircolor

            write(code).then(() => console.log(code))
          })
        })
      })
    })
  })
})
