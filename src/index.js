import "./styles.css";

var values = document.getElementById("input");
var form=document.getElementById("form")
var inputTable=document.getElementById('input-table')
var outpuTtable=document.getElementById('output-table')
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  let x=values.value.split(' ').map((x)=>{
    return(parseInt(x,10))
  })
  let max=0;
  for(let i=0;i<x.length;i++){
    max=Math.max(max,x[i])
  }
  let main=[]
  for(let i=0;i<max;i++){
    main[i]=new Array(x.length)
  }
  for(let i=0;i<max;i++){
    for(let j=0;j<x.length;j++){
      main[i][j]="white"
    }
  }
  let prev=0;
  for(let i=0;i<x.length;i++){
    if(x[i]!==0){
      let c=x[i]
      for(let row=max-1;row>=0;row--){
        if(c===0){
          break;
        }
        main[row][i]="yellow"
        c--;
      }
      if(i-prev>1&&x[prev]!==0){
        let val=Math.min(x[i],x[prev])
        for(let col=i-1;col>=0;col--){
          if(x[col]>0){
            break;
          }
          let c=val
          for(let row=max-1;row>=0;row--){
            if(c===0){
              break;
            }
            main[row][col]="blue"
            c--;
          }
        }
      }
      prev=i
    }
    
  }
  let ans=0
    for(let i=0;i<max;i++){
      let tr=document.createElement("tr");
      let outtr=document.createElement("tr")
      for(let j=0;j<x.length;j++){
        if(main[i][j]==="blue"){
          ans++;
        }
        let td=document.createElement("td")
        let outtd=document.createElement("td")
        td.classList.add(main[i][j])
        tr.appendChild(td)
        if(main[i][j]==="yellow"){
          outtd.classList.add("white")
        }
        else{
          outtd.classList.add(main[i][j])
        }
        outtr.appendChild(outtd)
      }
      console.log(outtr)
      inputTable.appendChild(tr)
      outpuTtable.appendChild(outtr)
    }
   let anstag= document.getElementById("ans")
    anstag.appendChild(document.createTextNode(`Output : ${ans} Units`))
  console.log(main)
})