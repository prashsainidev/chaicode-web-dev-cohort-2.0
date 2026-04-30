const courseName: string = "Total TypeScript";
const totalHours: number = 4;
const isWeekendTopic: boolean = false;

type Student = {
  name: string;
  revisionPending: boolean;
};

const student: Student = {
  name: "Prash",
  revisionPending: true,
};

function formatCourse(name: string, hours: number): string {
  return `${name} (${hours} hours)`;
}

console.log(formatCourse(courseName, totalHours));
console.log(`${student.name} revision pending: ${student.revisionPending}`);

// Try breaking the types one by one in Playground/VS Code to see TypeScript errors.
