"use-strict";
import {createElement} from '../modules/utils.js'

export function initCards(title, subtitle, bulletType, ram, so, cpuCores, valor) {
  const parentElement = document.getElementsByClassName('list')[0]

  const bullet = 1;
  
  if(parentElement) {   
    const html2 = createElement(
      { tag: 'div', classes: ['card'], props: [{name: 'Pizza', value: 'calabresa'}], children: [
        { tag: 'div', classes: ['card-header'], children: [
          {tag: 'div', classes: ['bullet', 'hc'], children: [
            {tag: 'i', classes: ['lni', 'lni-coin']},
            {tag: 'p', text: 'High-cost choice'}          
        ]},
        {tag: 'p', classes: ['card-title'], text: 'B2ms'},
        {tag: 'p', text: '(Standard_B2ms)'}
      ]},
        { tag: 'div', classes: ['card-data'], children: [
          {tag: 'div', children: [
            {tag: 'p', classes: ['info-title'], text: 'Memória RAM'},
            {tag: 'p', classes: ['info-value'], text: '65536'}
          ]},
          {tag: 'div', children: [
            {tag: 'p', classes: ['info-title'], text: 'SO'},
            {tag: 'p', classes: ['info-value'], text: 'Linux'}
          ]},
          {tag: 'div', children: [
            {tag: 'p', classes: ['info-title'], text: 'vCPU Cores'},
            {tag: 'p', classes: ['info-value'], text: '8'}
          ]}
        ]},
        { tag: 'div', classes: ['card-footer'], children: [
          {tag: 'hr'},
          {tag: 'div', classes: ['card-value'], children: [
            {tag: 'p', classes: ['info-title'], text: 'Valor'},
            {tag: 'p', classes: ['info-value'], text: '0,41334'}
          ]},
        ]},
      ]}
    )

    const filho = parentElement.append(html2);
    
  }
}