export const userInfo = info => {
  const modifiedObj = {
    accessToken: info.access_token,
    userId: info.athlete.id,
    firstName: info.athlete.firstname,
    gender: info.athlete.sex,
    profilePic: info.athlete.profile
  };
  return modifiedObj;
};

export const userDailyStats = stats => {
  console.log(stats);
};
