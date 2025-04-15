interface Usuario {
    id: number;
    nome: string;
  }
  
  function processarUsuario(id: number, callback: (usuario: Usuario) => void): void {
      const usuario: Usuario = { id, nome: "Alice" };
      callback(usuario);
  }
  
  processarUsuario(5, (usuario: Usuario) => {
      console.log(usuario);
  });
  