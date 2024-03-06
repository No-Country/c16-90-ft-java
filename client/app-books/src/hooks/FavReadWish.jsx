import { createContext, useContext, useState, useEffect } from "react";

export const FavoritesContext = createContext()
FavoritesContext.displayName = "MyFavorites";

export default function FavoritesProvider({ children }){
  const [ favorite, setFavorite] = useState({
    favorite: [],
    read:[],
    wish:[],

  });

  // Cargar desde localStorage al montar el proveedor
  useEffect(() => {
    const storedFavorite = JSON.parse(localStorage.getItem("favorite"));
    if (storedFavorite) {
      setFavorite(storedFavorite);
    }
  }, []);

  // Guardar en localStorage al actualizar el contexto
  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);


  return(
    <FavoritesContext.Provider value={{favorite ,setFavorite}}>
      {children}
      
    </FavoritesContext.Provider>
  )
}

export function useFavoriteContext(){
  const { favorite, setFavorite} = useContext(FavoritesContext)

  function addFavorite(listName, newFavorite){
    const list = favorite[listName];
    const repeatedFavorite = list.some((item) => item.id === newFavorite.id)

    let newList =[...list]

    if(!repeatedFavorite){
      newList.push(newFavorite);
      setFavorite((prevFavorites) => ({ ...prevFavorites, [listName]: newList}));
    }else{
      newList = list.filter((fav) => fav.id !== newFavorite.id);
      setFavorite((prevFavorites) => ({ ...prevFavorites, [listName]: newList}))

    }
  }

  return{
    favorite,
    addFavorite
  }
}