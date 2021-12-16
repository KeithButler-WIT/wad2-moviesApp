import { useEffect, useState } from "react";
import {getPeople} from '../api/tmdb-api'

const usePeople = id => {
  const [people, setPeople] = useState(null);
  useEffect(() => {
    getPeople(id).then(people => {
      setPeople(people);
    });
  }, [id]);
  return [people, setPeople];
};

export default usePeople
