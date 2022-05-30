
export const checkFavorite = (favorites, ch) => {
    let favorite = false;
    favorites.map((fv) => {
      // console.log(fv.id + " " + ch.id, fv.id === ch.id)
      if(fv.id === ch.id){
        favorite = true;

      }
    });
    // console.log(ch.id + " Favorite " + favorite)
    return favorite;
  };