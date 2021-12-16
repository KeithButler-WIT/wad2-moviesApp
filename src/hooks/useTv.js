import { useEffect, useState } from "react";
import {getTv} from '../api/tmdb-api'

const useTv = id => {
  const [tv, setTv] = useState(null);
  useEffect(() => {
    getTv(id).then(tv => {
      setTv(tv);
    });
  }, [id]);
  return [tv, setTv];
};

export default useTv
