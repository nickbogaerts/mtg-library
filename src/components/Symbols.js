import React from 'react'
import './Symbols.css'

const SymbolMap = {
  '{T}': { abbr: 'T', text: 'Tap this permanent' },
  '{Q}': { abbr: 'Q', text: 'Untap this permanent' },
  '{E}': { abbr: 'E', text: 'An enery counter' },
  '{PW}': { abbr: 'PW', text: 'Planeswalker' },
  '{CHAOS}': { abbr: 'CHAOS', text: 'Chaos' },
  '{W}': { abbr: 'W', text: 'One white mana' },
  '{U}': { abbr: 'U', text: 'One blue mana' },
  '{B}': { abbr: 'B', text: 'One black mana' },
  '{R}': { abbr: 'R', text: 'One red mana' },
  '{G}': { abbr: 'G', text: 'One green mana' },
  '{X}': { abbr: 'X', text: 'X generic mana' },
  '{Y}': { abbr: 'Y', text: 'Y generic mana' },
  '{Z}': { abbr: 'Z', text: 'Z generic mana' },
  '{S}': { abbr: 'S', text: 'One snow mana' },
  '{C}': { abbr: 'C', text: 'One colorless mana' },
  '{0}': { abbr: '0', text: 'Zero mana' },
  '{½}': { abbr: 'HALF', text: 'One-half generic mana' },
  '{1}': { abbr: '1', text: 'One generic mana' },
  '{2}': { abbr: '2', text: 'Two generic mana' },
  '{3}': { abbr: '3', text: 'Three generic mana' },
  '{4}': { abbr: '4', text: 'Four generic mana' },
  '{5}': { abbr: '5', text: 'Five generic mana' },
  '{6}': { abbr: '6', text: 'Six generic mana' },
  '{7}': { abbr: '7', text: 'Seven generic mana' },
  '{8}': { abbr: '8', text: 'Eight generic mana' },
  '{9}': { abbr: '9', text: 'Nine generic mana' },
  '{10}': { abbr: '10', text: 'Ten generic mana' },
  '{11}': { abbr: '11', text: 'Eleven generic mana' },
  '{12}': { abbr: '12', text: 'Twelve generic mana' },
  '{13}': { abbr: '13', text: 'Thirteen generic mana' },
  '{14}': { abbr: '14', text: 'Fourteen generic mana' },
  '{15}': { abbr: '15', text: 'Fifteen generic mana' },
  '{16}': { abbr: '16', text: 'Sixteen generic mana' },
  '{17}': { abbr: '17', text: 'Seventeen generic mana' },
  '{18}': { abbr: '18', text: 'Eighteen generic mana' },
  '{19}': { abbr: '19', text: 'Nineteen generic mana' },
  '{20}': { abbr: '20', text: 'Twenty generic mana' },
  '{100}': { abbr: '100', text: 'One hundred generic mana' },
  '{1000000}': { abbr: '1000000', text: 'One million generic mana' },
  '{∞}': { abbr: 'INFINITY', text: 'Infinite generic mana' },
  '{HW}': { abbr: 'HW', text: 'One-half white mana' },
  '{HR}': { abbr: 'HR', text: 'One-half red mana' },
  '{W/U}': { abbr: 'WU', text: 'One white or blue mana' },
  '{U/B}': { abbr: 'UB', text: 'One blue or black mana' },
  '{B/R}': { abbr: 'BR', text: 'One blue or red mana' },
  '{R/G}': { abbr: 'RG', text: 'One red or green mana' },
  '{G/W}': { abbr: 'Gw', text: 'One green or white mana' },
  '{W/B}': { abbr: 'WB', text: 'One white or black mana' },
  '{U/R}': { abbr: 'UR', text: 'One blue or red mana' },
  '{B/G}': { abbr: 'BG', text: 'One black or green mana' },
  '{R/W}': { abbr: 'RW', text: 'One red or white mana' },
  '{G/U}': { abbr: 'GU', text: 'One green or blue mana' },
  '{2/W}': { abbr: '2W', text: 'Two generic mana or one white mana' },
  '{2/U}': { abbr: '2U', text: 'Two generic mana or one blue mana' },
  '{2/B}': { abbr: '2B', text: 'Two generic mana or one black mana' },
  '{2/R}': { abbr: '2R', text: 'Two generic mana or one red mana' },
  '{2/G}': { abbr: '2G', text: 'Two generic mana or one green mana' },
  '{P}': { abbr: 'P', text: 'One colored mana or two life' },
  '{W/P}': { abbr: 'WP', text: 'One white mana or two life' },
  '{U/P}': { abbr: 'UP', text: 'One blue mana or two life' },
  '{B/P}': { abbr: 'BP', text: 'One black mana or two life' },
  '{R/P}': { abbr: 'RP', text: 'One red mana or two life' },
  '{G/P}': { abbr: 'GP', text: 'One green mana or two life' }
}

const ManaCost = (props) => {
  let innerHTML = props.children.toString().replace(/\{.+?\}/g, (symbol) => {
    return (symbol in SymbolMap ? `<abbr class="card-symbol card-symbol-${SymbolMap[symbol].abbr}" title="${SymbolMap[symbol].text}">${symbol}</abbr>` : symbol)
  })
  return <span dangerouslySetInnerHTML={{__html: innerHTML}} />
}

export default ManaCost
