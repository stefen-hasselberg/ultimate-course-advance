// Function

function myFunction() {
  console.log('Function:::', this);
}

myFunction();

// Object Literal
const myObject = {
  myMethod() {
    console.log('Object:::', this);
  },
};

myObject.myMethod();

class MyClass {
  myMethod() {
    console.log('MyClass:::', this);
  }
}

const myClass = new MyClass();

myClass.myMethod();
