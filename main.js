'use strict'

const team = [
    {
      nome: 'wayne Barret',
      ruolo: 'Founder & CEO',
      foto:  'img/img/wayne-barnett-founder-ceo.jpg',
    },
    {
      nome: 'Angela Carrol',
      ruolo: 'Chief Editor',
      foto: 'img/img/angela-caroll-chief-editor.jpg',
    },
    {
      nome: 'Angela Lopez',
      ruolo: 'Social Media Manager',
      foto: 'img/img/angela-lopez-social-media-manager.jpg',
    },
    {
      nome: 'Barbara Ramos',
      ruolo: 'Graphic Designer',
      foto: 'img/img/barbara-ramos-graphic-designer.jpg',
    },
    {
      nome: 'Scott Estrada',
      ruolo: 'Developer',
      foto: 'img/img/scott-estrada-developer.jpg',
    },
    {
      nome: 'Walter Gordon',
      ruolo: 'Office Manager',
      foto: 'img/img/walter-gordon-office-manager.jpg',
    },
];

// for (let i = 0; i < team.length; i++) {
//    const member = team[i];
//
 //   for (let key in member) {
 //       console.log(member[key]);
 //   }
 //}

 const ul = document.getElementById('list'); 
 
 for (let i = 0; i < team.length; i++) {
     const member = team[i];

     const liEl = document.createElement('li');

     const memberName = document.createElement('h2');
     memberName.innerText = member.nome;

     const memberRole = document.createElement('h3');
     memberRole.innerText = member.ruolo;

     const memberImg = document.createElement('img');
     memberImg.src = member.foto;

     ul.append(liEl);
     liEl.append(memberName);
     liEl.append(memberRole);
     liEl.append(memberImg);
 }
