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

export const clubData = (info, activities) => {
  const matchingClub = info.find(club => club.name === 'Stravant Club');
  const mappedActivities = activities.reduce((userActivity, activity) => {
    if (!userActivity[activity.athlete.firstname]) {
      userActivity[activity.athlete.firstname] = {
        totalDistance: 0,
        totalTime: 0,
        membersRecent: '',
        mostRecent: {
          distance: activities[0].distance / 1609,
          activity: activities[0].name
        }
      };
    }
    const distance = activity.distance / 1609;
    let preciseDistance = Math.round(distance * 100) / 100;

    userActivity[activity.athlete.firstname].totalDistance += preciseDistance;

    userActivity[activity.athlete.firstname].totalTime += Math.floor(
      activity.elapsed_time / 60
    );

    userActivity[activity.athlete.firstname].membersRecent = activity.name;
    return userActivity;
  }, {});

  const clubInfo = {
    clubName: matchingClub.name,
    clubId: matchingClub.id,
    membersStats: mappedActivities
  };
  return clubInfo;
};
