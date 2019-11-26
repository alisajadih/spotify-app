import React from "react";
import { axiosInstance } from "../../../../utils/axios/axios";
import { useFeaturesValue } from "../../../../Context";
import { getFeaturesValue } from "../../../../Context/Actions";
import ItemsWrapper from "../../../../Components/Main/ItemUiContent/ItemsWrapper";


/**
 * TODO:
 * paginate
 */

const Features = () => {
  const [features, dispatch] = useFeaturesValue();
  React.useEffect(() => {
    axiosInstance
      .get("browse/featured-playlists")
      .then(res =>
        dispatch(getFeaturesValue(res.data.playlists.items))
      );
  }, [dispatch]);
  return (
    <>
      <ItemsWrapper header="Features" items={features} />
    </>
  );
};

export default Features;
