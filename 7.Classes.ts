class ES7{
    add:number
    constructor(b:number){
        this.add = b
    }
    disp():number{
        console.log("Fetch the variable:" + this.add)
        return 10
    }
}

var objnew = new ES7(10)


// OOPS
// Single Inheritance
class ES8 extends ES7{

}
// Multi Level Inheritane
class ES9 extends ES7{

}

class ES10 {
    display():void{
        console.log("Display 1")
    }
}

class ES11 extends ES10{
    display():void{
        console.log("Display 2")
    }
    newMethod():void{
        super.display()
    }
}

var objnew1 = new ES11()
objnew1.display()

class staticClass {
    static a:10
    static print():void{

    }
}

staticClass.a
staticClass.print()


var some = objnew1 instanceof ES11
console.log(some)