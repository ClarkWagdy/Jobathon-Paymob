function solution(A,B,x,y){
    let indexoftap;
    const N=A.length;
    for(let i=0;i<N;i++){
        if(x>=A[i]&&x<=(A[i]+20)&&y>=B[i]&&y<=(B[i]+20)){
            indexoftap=i; 
            break;
        }
        else{
            indexoftap=-1;
        }
    }
    return indexoftap;
    //console.log(indexoftap)
    }



    // const A=[100, 200, 100];
    // const B=[50, 100, 100];
    // const x=200;
    // const y=60;
    // solution(A,B,x,y);