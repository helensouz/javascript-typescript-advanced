

//ao inves de return é usado yield

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

for(let valor of g4){
    console.log(valor)
}

function* geradora5(){
    yield function(){
        console.log("vim do y1");

    }

    yield function(){
        console.log('vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
