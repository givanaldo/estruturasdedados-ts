import { Dictionary } from "typescript-collections";

const agenda = new Dictionary<string, string>();

agenda.setValue("Maria", "maria@gmail.com");
agenda.setValue("João", "joao@gmail.com");

console.log(agenda.getValue("Maria")); // Saída: maria@gmail.com
console.log(agenda.containsKey("João"));  // Saída: true