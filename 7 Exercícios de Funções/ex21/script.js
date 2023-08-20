function verificaTipo(dado){
   if (typeof dado === 'string'){
      console.log("Este dado é uma String.");
   } else if (typeof dado === 'number'){
      console.log("Este dado é um numero.");
   } else if (typeof dado === 'boolean'){
      console.log("Este dado é um boolean.");
   }
}

verificaTipo(true);
verificaTipo("luan");
verificaTipo(31);