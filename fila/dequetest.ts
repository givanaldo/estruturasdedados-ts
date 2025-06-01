import { Deque } from "./deque";

const deque = new Deque<number>();

console.log("\n1. Teste de isEmpty() inicialmente:");
console.log(`Deque está vazio? ${deque.isEmpty()}`); 
console.log(`Tamanho do Deque: ${deque.size()}`);   

console.log("\n2. Teste de addBack(): Adicionando 10, 20, 30");
deque.addBack(10);
deque.addBack(20);
deque.addBack(30);
console.log(`Deque: ${deque.toString()}`);           
console.log(`Tamanho do Deque: ${deque.size()}`);   
console.log(`Deque está vazio? ${deque.isEmpty()}`); 

console.log("\n3. Teste de peekFront() e peekBack():");
console.log(`Elemento na frente: ${deque.peekFront()}`); 
console.log(`Elemento no final: ${deque.peekBack()}`);   

console.log("\n4. Teste de addFront(): Adicionando 5 e 0");
deque.addFront(5);
deque.addFront(0);
console.log(`Deque: ${deque.toString()}`);       
console.log(`Tamanho do Deque: ${deque.size()}`);  

console.log("\n5. Teste de removeFront():");
let removedFront = deque.removeFront();
console.log(`Elemento removido da frente: ${removedFront}`); 
console.log(`Deque: ${deque.toString()}`);          
console.log(`Tamanho do Deque: ${deque.size()}`);   

removedFront = deque.removeFront();
console.log(`Elemento removido da frente: ${removedFront}`); 
console.log(`Deque: ${deque.toString()}`);           
console.log(`Tamanho do Deque: ${deque.size()}`);      

console.log("\n6. Teste de removeBack():");
let removedBack = deque.removeBack();
console.log(`Elemento removido do final: ${removedBack}`); 
console.log(`Deque: ${deque.toString()}`);                
console.log(`Tamanho do Deque: ${deque.size()}`);    

removedBack = deque.removeBack();
console.log(`Elemento removido do final: ${removedBack}`);   
console.log(`Deque: ${deque.toString()}`);                
console.log(`Tamanho do Deque: ${deque.size()}`);     

console.log("\n7. Teste de remoção até o deque ficar vazio:");
removedBack = deque.removeBack();
console.log(`Elemento removido do final: ${removedBack}`); 
console.log(`Deque: ${deque.toString()}`);           
console.log(`Tamanho do Deque: ${deque.size()}`);    
console.log(`Deque está vazio? ${deque.isEmpty()}`);   

console.log("\n8. Teste de remoção em deque vazio:");
removedFront = deque.removeFront();
console.log(`Elemento removido da frente (deque vazio): ${removedFront}`); 
removedBack = deque.removeBack();
console.log(`Elemento removido do final (deque vazio): ${removedBack}`);  

console.log("\n9. Teste de peek em deque vazio:");
console.log(`Elemento na frente (deque vazio): ${deque.peekFront()}`); 
console.log(`Elemento no final (deque vazio): ${deque.peekBack()}`);  

console.log("\n10. Teste de addFront() em deque vazio (deve funcionar como addBack):");
deque.addFront(100);
console.log(`Deque: ${deque.toString()}`);      
console.log(`Tamanho do Deque: ${deque.size()}`);  
console.log(`Elemento na frente: ${deque.peekFront()}`); 

console.log("\n11. Teste de clear():");
deque.addBack(200);
deque.addFront(50);
console.log(`Deque antes do clear: ${deque.toString()}`);
deque.clear();
console.log(`Deque após o clear: ${deque.toString()}`);   
console.log(`Tamanho do Deque: ${deque.size()}`);       
console.log(`Deque está vazio? ${deque.isEmpty()}`);    
