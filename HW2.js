//1,2
var car = {speedometer : 0};

Object.defineProperty(car, 'setSpeedometer', {
    set: function (val){
        this.speedometer = val;
    }});

Object.defineProperty(car, 'getSpeedometer', {
    get: function (){
        return this.speedometer;
    }});

Object.defineProperty(car, 'clearSpeedometer', {
    value: function (){
        this.speedometer = 0;
    }});

car.setSpeedometer=20;
car.setSpeedometer=50;
console.log(car.getSpeedometer);
car.clearSpeedometer();
console.log(car.getSpeedometer);

//3 after modifying
var car = {speedometer : 0};

Object.defineProperty(car, 'setSpeed', {
    value: function (val){
        this.speedometer = val;
        return this
    }});

Object.defineProperty(car, 'getSpeed', {
    value: function (){
        return this.speedometer;
    }});

Object.defineProperty(car, 'clearSpeed', {
    value: function (){
        this.speedometer = 0;
        return this
    }});


console.log(car.setSpeed(200).setSpeed(300).clearSpeed().getSpeed());
