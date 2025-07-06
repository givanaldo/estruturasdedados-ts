"use strict";
var _a;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.children = [];
    }
    addChild(child) {
        this.children.push(child);
    }
    removeChild(value) {
        const index = this.children.findIndex(child => child.value === value);
        if (index >= 0) {
            this.children.splice(index, 1);
            return true;
        }
        for (const child of this.children) {
            if (child.removeChild(value))
                return true;
        }
        return false;
    }
    findNode(value) {
        if (this.value === value)
            return this;
        for (const child of this.children) {
            const found = child.findNode(value);
            if (found)
                return found;
        }
        return null;
    }
    render() {
        const li = document.createElement("li");
        li.textContent = this.value.toString();
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "x";
        removeBtn.classList.add("remove");
        removeBtn.onclick = () => {
            if (this !== root) {
                root.removeChild(this.value);
                renderTree();
            }
            else {
                alert("Não é possível remover a raiz.");
            }
        };
        li.appendChild(removeBtn);
        if (this.children.length > 0) {
            const ul = document.createElement("ul");
            for (const child of this.children) {
                ul.appendChild(child.render());
            }
            li.appendChild(ul);
        }
        return li;
    }
}
// Árvore inicial
const root = new TreeNode("A");
root.addChild(new TreeNode("B"));
const c = new TreeNode("C");
c.addChild(new TreeNode("E"));
c.addChild(new TreeNode("F"));
root.addChild(c);
root.addChild(new TreeNode("D"));
// Função de renderização
function renderTree() {
    const container = document.getElementById("tree-container");
    if (container) {
        container.innerHTML = "";
        const ul = document.createElement("ul");
        ul.appendChild(root.render());
        container.appendChild(ul);
    }
}
// Formulário para adicionar nós
(_a = document.getElementById("node-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", e => {
    e.preventDefault();
    const parentInput = document.getElementById("parent");
    const childInput = document.getElementById("child");
    const parentValue = parentInput.value.trim();
    const childValue = childInput.value.trim();
    if (!parentValue || !childValue)
        return;
    const parentNode = root.findNode(parentValue);
    if (parentNode) {
        parentNode.addChild(new TreeNode(childValue));
        renderTree();
        parentInput.value = "";
        childInput.value = "";
    }
    else {
        alert(`Nó pai "${parentValue}" não encontrado.`);
    }
});
// Inicializa a árvore
renderTree();
