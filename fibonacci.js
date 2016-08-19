String.prototype.reverse = function () {
    return this.split("").reverse().join("");
}

class BigNumber {
    constructor(value) {
        this.value = ""+value
    }

    toString() { return this.value; }

    equals(number) {
        return this.value == number.value;
    }

    add(number) {
        if (typeof number === "number") number=new BigNumber(number);
        const n1 = this.value.reverse();
        const n2 = number.value.reverse();
        const l  = Math.max(n1.length, n2.length)
        let s = 0, result = "";
        
        for(let i=0;i<l;i++) {
            let s1=i < n1.length ? (n1[i]|0) : 0;
            let s2=i < n2.length ? (n2[i]|0) : 0;
            s+=s1+s2;
            result += (s%10);
            s=parseInt(s/10);
        }
        while(s>0) {
            let n = s%10;
            result += n;
            s=parseInt(s/10);
        }
        result = result.reverse()
        return new BigNumber(result);
    }

    inc() {
        return this.add(1);
    }

    mul(number) {
        if (typeof number === "number") number=new BigNumber(number);
        let counter = new BigNumber("0")
        let result  = new BigNumber("0")
        while (!counter.equals(number)) {
            result  = result.add(this);
            counter = counter.inc();
        }
        return result;
    }

    exp(number) {
        if (typeof number === "number") number=new BigNumber(number);
        let counter = new BigNumber("0")
        let result  = new BigNumber("1")
        while (!counter.equals(number)) {
            result  = result.mul(this);
            counter = counter.inc();
        }
        return result;
    }

}

let a = new BigNumber(1)
let b = new BigNumber(1)

function print(str,d) {
  d=document.createElement('div');
  d.textContent=str;
  document.body.appendChild(d);
  document.body.scrollTop=document.body.clientHeight;
}


print("Processing punch card program 'FIBONACCI', please wait");
let step=0;
let loadedAt=6;
let fSize=32,fResize=400;
let running=true;
window.onclick=function(){running=!running}
~function loop() {
	if(running){
		if (step < loadedAt) print(".");
		if (step == loadedAt) print(a.toString());
		if (step > loadedAt) {
			print(b);
			let c = b; b = a.add(b);
			a = c;
		}
		step++;
  }	if(b.toString().length*fSize/1.8>(innerWidth-32)&&fSize>8)fSize--,document.body.style.fontSize=fSize+"px";
  window.setTimeout(loop, step<loadedAt ? 1000:100);
}() 
