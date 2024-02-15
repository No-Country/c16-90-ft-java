import MOCK_DATA from "./booksData.json";

const pedirDatos = () => {
    
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(MOCK_DATA);
          }, 500);
        });
      };

      export default pedirDatos