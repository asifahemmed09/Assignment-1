function multiplyValue(value: number, multiplier?: number): number {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
}

type Value = string | number | boolean;

function processInput(value: Value): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  return value ? "Active" : "Inactive";
}

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [latitude, longitude, locationName] = coordinate;

  return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const newArr: T[] = [];
  arrays.forEach((arr) => arr.forEach((item) => newArr.push(item)));
  return newArr;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter(
    (course) => course.isPublished && course.students >= minStudents,
  );
}

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

class Employee {
  constructor(
    protected name: string,
    private baseSalary: number,
  ) {}
  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  constructor(
    name: string,
    baseSalary: number,
    private department: string,
  ) {
    super(name, baseSalary);
  }
  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

async function validateAgeAsync(age: number): Promise<string> {
  if (age >= 18) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    });
  }
  return new Promise((resolve, reject) => {
    reject(new Error("Access Denied: Must be 18 or older"));
  });
}
