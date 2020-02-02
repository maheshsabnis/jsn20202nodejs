class MyMath {
    // private x: number = 0;
    // private y: number = 0;

    // constructor(x1: number, y1: number){
    //       this.x = x1;
    //       this.y = y1;  
    // }
    constructor(private x:number, private y:number){}
    add(): number {
        return this.x +this.y;
    } 
    
     sub(): number {
        return this.x -this.y;
    }
}

class MyMathDerive extends MyMath{
    constructor(private a: number, private b:number){
        super(a,b);
    }
    add(): number {
        return this.a + this.b + 1000;
    }
    mult():number {
        return this.a * this.b;
    }
}

let objBase:MyMath = new MyMathDerive(300,200);
console.log(`For Base Type add = ${objBase.add()}`);

let obj = new MyMathDerive(30,20);
console.log(`Add = ${obj.add()}`);
console.log(`sub = ${obj.sub()}`);
console.log(`mult = ${obj.mult()}`);
