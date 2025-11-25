"use client";

import PopularService from "../components/popularServices/PopularService";
import SearchProfessionals from "../components/searchUser/SearchUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllServiceList,
  getPopularServiceList,
} from "../redux/findJobSlice/FindJobSlice";

const Home = () => {
  // const { lang, country } = useParams();
  const dispatch = useDispatch();
  const { allServiceList, popularList, popularLoader } = useSelector(
    (state) => state.findJobs
  );

  console.log(popularList);

  const [initialLoader, setInitialLoader] = useState(true);
  const [popularInitialLoader, setPopularInitialLoader] = useState(true);

  useEffect(() => {
    if (!allServiceList || allServiceList.length === 0) {
      dispatch(getAllServiceList()).finally(() => setInitialLoader(false));
    } else {
      setInitialLoader(false);
    }
    if (!popularList || popularList.length === 0) {
      console.log("jhdsbhjbyu");
      dispatch(getPopularServiceList()).finally(() =>
        setPopularInitialLoader(false)
      );
    } else {
      setPopularInitialLoader(false);
    }
  }, []);

  return (
    <>
      {/* <Helmet>
        <script>
          {`
              gtag('event', 'conversion', {
                'send_to': 'AW-17528251553/iVB9CJjZsZMbEKHJj6ZB',
                'value': 1.0,
                'currency': 'GBP'
                });
          `}
        </script>
      </Helmet> */}
      {/* <CalonicalTags isRequiredjsonLd={false} /> */}

      <SearchProfessionals
        popularList={popularList}
        popularLoader={popularLoader || popularInitialLoader}
      />
      <PopularService
        popularList={popularList}
        popularLoader={popularLoader || popularInitialLoader}
      />
    </>
  );
};

export default Home;
