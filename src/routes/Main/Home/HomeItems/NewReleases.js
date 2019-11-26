import React from "react";
import { axiosInstance } from "../../../../utils/axios/axios";
import ItemsWrapper from "../../../../Components/Main/ItemUiContent/ItemsWrapper";
import { useNewReleasesValue } from "../../../../Context";
import { getNewReleasesValue } from "../../../../Context/Actions";

/**
 * TODO:
 * set setloading until image completly loaded ! in itemsWrapper
 * paginate
 */

const NewReleases = () => {
  const [newReleases, dispatch] = useNewReleasesValue();
  React.useEffect(() => {
    axiosInstance
      .get("/browse/new-releases")
      .then(res =>
        dispatch(getNewReleasesValue(res.data.albums.items))
      );
    console.log("im in newReleas useEffect");
  }, [dispatch]);
  const albums = newReleases.filter(
    item => item.album_type === "album"
  );
  const singles = newReleases.filter(
    item => item.album_type === "single"
  );
  return (
    <>
        <ItemsWrapper header="Albums" items={albums} />
        <ItemsWrapper header="Singles" items={singles} />
    </>
  );
};

export default NewReleases;
