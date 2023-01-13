class Car {
  //인스턴스가 만들어질 때 실행코드
  constructor(brand, name, color) {
    //속성 정의
    this.brand = brand;
    this.naem = name;
    this.color = color;
  }

  //메소드 정의
  refuel() {
    console.log("기름을 채웁니다");
  }

  drive() {
    console.log("운전을 합니다");
  }
}

let avanete = new Car("hyundai", "avante", "blue");
let mini = new Car("bmw", "mini", "white");

//클래스를 이용한 카운터 생성

class Counter {
  constructor() {
    this.value = 0;
  }
  increase() {
    this.value++;
  }
  decrease() {
    this.value--;
  }

  getValue() {
    return this.value;
  }
}

let counter1 = new Counter(); //생성자 호출
counter1.increase();
counter1.getValue(); //1
