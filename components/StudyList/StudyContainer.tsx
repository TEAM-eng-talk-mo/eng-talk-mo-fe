import { BsDot } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";

const StudyContainer = () => {
  const title = "영어 회화 잘하고 싶으면 들어온나";
  const usr = "러기";
  const time = new Date(2024, 1, 10, 20, 25);
  const timeSub = Date.now() - time.getTime();
  const oneDay = 60 * 60 * 24 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const like = 5;
  const description =
    "원어민 선생님이 주도하는 스터디! 시청역 근처 주 1회 진행하는 모임입니다.";
  const isActive = true;
  return (
    <div className="border-2 rounded-lg p-5 flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="text-xl font-bold w-4/5">{title}</div>
        <div className="font-semibold whitespace-nowrap text-sm">
          {isActive ? (
            <div className="rounded-xl bg-green-200 px-2 py-0.5">모집중</div>
          ) : (
            <div className="rounded-xl bg-neutral-100 px-2 py-0.5">
              모집 마감
            </div>
          )}
        </div>
      </div>
      <div className="font-semibold">{description}</div>
      <div className="font-semibold flex justify-between">
        <div className="flex items-center  text-neutral-600 text-sm">
          <div>{usr}</div>
          <div>
            <BsDot />
          </div>
          <div>
            {timeSub > oneDay ? (
              <div>
                {time.getMonth() + 1}월{time.getDate()}일
              </div>
            ) : timeSub > oneHour ? (
              <div>{Math.floor(timeSub / oneHour)}시간 전</div>
            ) : (
              <div>{Math.floor(timeSub / oneMinute)}분 전</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="hover:cursor-pointer transition hover:scale-110">
            <FaRegHeart />
          </div>
          <div className="text-sm">{like}</div>
        </div>
      </div>
    </div>
  );
};

export default StudyContainer;
