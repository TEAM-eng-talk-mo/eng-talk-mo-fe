import OnlineStudyList from "./OnlineStudyList";
import StudyNearbyList from "./StudyNearbyList";

const StudyList = () => {
  return (
    <div className="w-full">
      <StudyNearbyList />
      <OnlineStudyList />
    </div>
  );
};

export default StudyList;
