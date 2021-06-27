'use strict';
// let Seattle =[];
// let Tokyo =[];
// let Dubai =[];
// let Paris =[];
// let Lima =[];
// function cocperh(){
//   for (let i= 0 ; i<14; i++)
//   {
//     Seattle[i]= Math.floor(Math.random() * (65 - 23 + 1) + 23);
//     Tokyo [i] = Math.floor(Math.random() * (24 - 3 + 1) + 3);
//     Dubai [i] = Math.floor(Math.random() * (38 - 3 + 1) + 3);
//     Paris [i] = Math.floor(Math.random() * (38 - 20 + 1) + 20);
//     Lima [i] = Math.floor(Math.random() * (16 - 2 + 1) + 2);

//   }

// }
// cocperh();

// let SeattleGroub  =
// {

//   Seattle: [],
//   Tokyo :[],
//   Dubai:[],
//   Paris:[],
//   Lima:[],
//   perh :[],
//   ts:0,
//   tt:0,
//   td:0,
//   tp:0,
//   tl:0,
//   total : 0,


//   account : function (s=[],t=[],d=[],p=[],l=[])
//   { this.Seatle=s;
//     this.Tokyo = t;
//     this.Dubai = d;
//     this.Paris = p;
//     this.Lima =l;

//     for (let i=0; i<this.Tokyo.length;i++)
//     {
//       this.ts+=this.Seattle[i];
//       this.tt+=this.Tokyo[i];
//       this.td+=this.Dubai[i];
//       this.tp+=this.perh[i];
//       this.tl+=this.Lima[i];
//       this.perh[i]=this.Seatle[i]+this.Tokyo[i]+this.Dubai[i]+this.Paris[i]+this.Lima[i];
//       this.total+=this.perh[i];
//     }
//   },



//   render :function (){
//     let rrs =[];


//     // ttotaly = totaly;
//     let section=[];
//     let ul;
//     let geet=['s','t','d','p','l','ea'];
//     let eacht=[this.ts,this.tt,this.td,this.tp,this.tl,this.total];
//     for (let i=0; i<6 ; i++)
//     {


//       rrs =this.Seattle;
//       if(i===1)
//         rrs =this.Tokyo;
//       else if(i===2)
//         rrs =this.Dubai;
//       else if(i===3)
//         rrs =this.Paris;
//       else if(i===4)
//         rrs =this.Lima;
//       else if(i===5)
//         rrs =this.perh;

//       section[i]=document.getElementById(geet[i]);
//       ul = document.createElement('ul');
//       for (let i=0; i<15; i++)
//       {
//         if (i<6)
//         {
//           let li = document.createElement('li');
//           li.textContent = (`${i+7}am: ${this.rrs[i]} cookies`);
//           ul.appendChild(li);
//         }
//         else{
//           let li = document.createElement('li');
//           li.textContent = (`${i+7}pm: ${this.rrs[i]} cookies`);
//           ul.appendChild(li);
//         }
//       }


//       let li = document.createElement('li');
//       li.textContent = (`Total: ${eacht[i]} cookies`);
//       ul.appendChild(li);

//       section[i].appendChild(ul);

//     }

//   },




// };
// SeattleGroub.account(Seattle,Tokyo,Dubai,Paris,Lima);
// SeattleGroub.render();


// let seso {
//     Seattle :[],
//     ts= 0,

//     function rero() {

//         for (let i= 0 ; i<14; i++)
//         {
//          this.SeattleSeattle[i]= Math.floor(Math.random() * (65 - 23 + 1) + 23);
//           this.ts+=Seattle[i];
//         }
//         this.Seattle[14]=this.ts;

//     },

//     function let section ()
//     {
//         let ul;


//         section=document.getElementById('s');
//         ul = document.createElement('ul');
//         for (let i=0; i<14; i++)
//         {
//           if (i<6)
//           {
//             let li = document.createElement('li');
//             li.textContent = (`${i+7}am: ${this.Seattle[i]} cookies`);
//             ul.appendChild(li);
//           }
//           else{
//             let li = document.createElement('li');
//             li.textContent = (`${i+7}pm: ${this.rrs[i]} cookies`);
//             ul.appendChild(li);
//           }
//         }


//         let li = document.createElement('li');
//         li.textContent = (`Total: ${eacht[i]} cookies`);
//         ul.appendChild(li);

//         section[i].appendChild(ul);

//     }








// };
// SeattleGroub.account();
// SeattleGroub.render();

// }
// let Seatle ={
//   perh :[],
//   total :0,

//   accont : function()
//   {
//     getAge: function (min, max) {
//         this.age = Math.floor(Math.random() * (max - min + 1) + min);
//       for (let i =0; i<14; i++)
//       {
//         this.perh[i]= Math.floor(Math.random() * (65 - 23 + 1) + 23);
//                   this.total+=this.perh[i];

//       }
//   }

//     llll : function()
//     {

//        let section =document.getElementById('s');
//         let ul = document.createElement('ul');
//         let li;
//         for (let i=0; i<14; i++)
//         {
//           if (i<6)
//           {
//             li = document.createElement('li');
//             li.textContent = (`${i+7}am: ${this.perh[i]} cookies`);
//             ul.appendChild(li);
//           }
//           else{
//             let li = document.createElement('li');
//             li.textContent = (`${i+7}pm: ${this.perh[i]} cookies`);
//             ul.appendChild(li);
//         }
//         section.appendChild(ul);

//     }





// }


/*let Seattle = {
  name: 'Seattle',
  total: 0,
  arrstore :[],

  seattleq: function (min, max) {
    let t ;
    for (let i = 0 ; i<13; i ++)
    {
      this.arrstore[i] = Math.floor(Math.random() * (max - min + 1) + min);
      t+=this.arrstore;

    }
    this.total=t;

  },



  render: function () {

    let h2 = document.createElement('h2');
    let section = document.getElementById('s');
    h2.textContent = `${this.name}`;
    section.appendChild(h2);

    let ul = document.createElement('ul');
    let li;
    for (let i = 0; i < this.arrstore.length; i++) {
      li = document.createElement('li');
      li.textContent = `${this.arrstore[i]}`;

      ul.appendChild(li);
      section.appendChild(ul);
    }
    li.textContent = `${this.total}`;

    ul.appendChild(li);
    section.appendChild(ul);


  }
};

Seattle.seattleq(23,65);
Seattle.render();

*/
// let Tokyo = {
//   name: 'Tokyo',
//   total: 0,
//   arrstore :[],

//   tokyoq: function (min, max) {
//     let t;
//     for (let i = 0 ; i<13; i ++)
//     {
//       this.arrstore[i] = Math.floor(Math.random() * (max - min + 1) + min);
//       t+=this.arrstore[i];
//     }
//     this.total=t;

//   },



//   render: function () {
//     let section = document.getElementById('s');
//     let h2 = document.createElement('h2');
//     h2.textContent = `${this.name}`;
//     section.appendChild(h2);
//     let ul = document.createElement('ul');

//     for (let i = 0; i < this.arrstore.length; i++) {
//       let li = document.createElement('li');
//       li.textContent = `${this.arrstore[i]}`;

//       ul.appendChild(li);
//     }
//     section.appendChild(ul);


//   }
// };
// Tokyo.tokyoq(3,24);
// Tokyo.render();

let Seattle = {
  name: 'Seattle',
  total:0,
  arrstore :[],

  seattleq: function (min, max) {
    for (let i = 0 ; i<13; i ++)
    {
      this.arrstore[i] = Math.floor(Math.random() * (max - min + 1) + min);

    }

  },

  totaly:function(){
    for (let i =0 ;i<this.arrstore.length; i++)
    {
      this.total+=this.arrstore[i];

    }
  },



  render: function () {
  // for(let i =0;i<this.arrstore.length;i++)
  // {
  // console.log(this.arrstore[i]);
  // }
    let h2 = document.createElement('h2');
    let section = document.getElementById('s');
    h2.textContent = `${this.name}`;
    section.appendChild(h2);

    let ul = document.createElement('ul');
    let li;
    for (let i = 0; i < this.arrstore.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${this.arrstore[i]}`;

      ul.appendChild(li);
      section.appendChild(ul);
    }
    li.textContent = `${Seattle.total}`;

    ul.appendChild(li);
    section.appendChild(ul);


  }
};

Seattle.seattleq(23,65);
Seattle.render();
