class Transport{
    constructor(type, price, brand){
        this.type = type;
        this.price = price;
        this.brand = brand;
    }

    getInfo(){
        return `Type: ${this.type}, Price: ${this.price}, Brand: ${this.brand}`;
    }

    getPrice(){
        return this.price;
    }
}


class Car extends Transport{
    constructor(type, price, brand, doors){
    super(type, price, brand);
    this.doors = doors;
    }

    getDoorsCount(){
        return this.doors;
    }
}

class Bike extends Transport{
    constructor(type, price, brand, maxSpeed){
        super(type, price, brand);
        this.maxSpeed = maxSpeed;
        }

        getMaxSpeed(){
            return this.maxSpeed;
        }
}

const data = [
    {
      id: 1,
      type: 'car',
      brand: 'Audi',
      doors: 4,
      price: 4300000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
    },
    {
      id: 2,
      type: 'car',
      brand: 'Mercedes-Benz',
      doors: 4,
      price: 2800000,
      image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
    },
      {
      id: 3,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 210,
      price: 1300000,
      image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
    },
    {
      id: 4,
      type: 'bike',
      brand: 'Harley-Davidson',
      maxSpeed: 220,
      price: 1400000,
      image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
    }
  ];

const dataInfo = [
    new Car('car', 4300000, 'Audi', 4),
    new Car('car', 2800000, 'Mercedes-Benz', 4),
    new Bike('bike', 1300000, 'Harley-Davidson', 210),
    new Bike('bike', 1400000, 'Harley-Davidson', 220)
];

//используем метод forEach для перебора всех элементов массива data и проверяем, является ли он экземпляром класса Car или Bike, используя оператор instanceof
dataInfo.forEach(item => {
    console.log(item.getInfo());
    if (item instanceof Car) {
        console.log(`Doors: ${item.getDoorsCount()}`);
    } else if (item instanceof Bike) {
        console.log(`Max Speed: ${item.getMaxSpeed()}`);
    }
});

// console.log(dataInfo[0].getInfo()); // Выводим информацию о первом элементе массива (автомобиль)
// console.log(dataInfo[0].getDoorsCount()); // Выводим количество дверей автомобиля
// console.log(dataInfo[2].getInfo()); // Выводим информацию о третьем элементе массива (мотоцикл)
// console.log(dataInfo[2].getMaxSpeed()); // Выводим максимальную скорость мотоцикла