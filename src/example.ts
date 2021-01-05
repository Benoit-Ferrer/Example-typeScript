interface Car {
  brandName?: string;
  info: {
    year: number;
    registration: Date;
  };
}

export const example = (car: Car):String => {
  const {
    brandName = "default Name",
    info: { year, registration },
  } = car;
  return "Vehicle info, " + brandName + " " + year + " " + registration;
};

// Good
const carData: Car = {
  info: {
    year: 1990,
    registration: new Date(),
  },
};

// const carDataBad: Car = {
//     brandName: 323,
//     info: {
//       year: "toto",
//       registration: new Date(),
//     },
//   };

const vehicleInfo = example(carData);
console.log(vehicleInfo)
