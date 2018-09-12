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

export const userStats = stats => {
  return {
    Biked: stats.all_ride_totals.distance / 1609,
    Ran: stats.all_run_totals.distance / 1609,
    Swam: stats.all_swim_totals.distance / 1609
  };
};

export const clubData = (info, activities) => {
  const matchingClub = info.find(club => club.name === 'Stravant Club');
  const mappedActivities = activities.reduce((userActivity, activity) => {
    userActivity['mostRecent'] = {
      name: activities[0].athlete.firstname,
      distance: activities[0].distance / 1609,
      activity: activities[0].name
    };

    if (!userActivity[activity.athlete.firstname]) {
      userActivity[activity.athlete.firstname] = {
        totalDistance: 0,
        totalTime: 0,
        membersRecent: ''
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

export const weeklyData = data => {
  let daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  const resultObj = data.reduce((weekObj, day) => {
    day.forEach(date => {
      const realDate = `${date.start_date[5] + date.start_date[6]}/${date
        .start_date[8] + date.start_date[9]}/${date.start_date[0] +
        date.start_date[1] +
        date.start_date[2] +
        date.start_date[3]}`;

      let dated = new Date(realDate);
      const dayOfWeek = dated.toLocaleDateString('en-US', { weekday: 'long' });
      if (!weekObj[dayOfWeek]) {
        weekObj[dayOfWeek] = 0;
      }
      weekObj[dayOfWeek] += date.distance;
    });
    return weekObj;
  }, {});

  return daysOfWeek.reduce((dayObj, day) => {
    if (!resultObj[day]) {
      resultObj[day] = 0;
    } else {
      resultObj[day] = resultObj[day];
    }
    dayObj = resultObj;
    return dayObj;
  }, {});
};
