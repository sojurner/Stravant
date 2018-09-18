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
    runningTotal: {
      'Distance (miles)':
        stats.all_run_totals.distance / stats.all_run_totals.count / 1609,
      'Time (min)':
        stats.all_run_totals.moving_time / 60 / stats.all_run_totals.count,
      'Elevation (feet)':
        stats.all_run_totals.elevation_gain / stats.all_run_totals.count
    }
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

export const getLastPomTime = (currTime, pomTime) => {
  const current = currTime.indexOf('2018');
  const modCurrent = currTime.slice(current + 5);
  const modLastPom = pomTime.slice(current + 5);

  let currentHour;
  let currentMin;
  let lastPomHour;
  let lastPomMin;

  if (modCurrent.includes('PM') && modCurrent.length < 8) {
    currentHour = parseInt(modCurrent.slice(0, 1)) + 12;
    currentMin = parseInt(modCurrent.slice(2, 4));
  }

  if (modCurrent.includes('PM') && modCurrent.length > 7) {
    currentHour = parseInt(modCurrent.slice(0, 2)) + 12;
    currentMin = parseInt(modCurrent.slice(3, 5));
  }

  if (modCurrent.includes('AM') && modCurrent.length < 8) {
    currentHour = parseInt(modCurrent.slice(0, 1));
    currentMin = parseInt(modCurrent.slice(2, 4));
  }

  if (modCurrent.includes('AM') && modCurrent.length > 7) {
    currentHour = parseInt(modCurrent.slice(0, 2));
    currentMin = parseInt(modCurrent.slice(3, 5));
  }

  if (modLastPom.includes('PM') && modLastPom.length < 8) {
    lastPomHour = parseInt(modLastPom.slice(0, 2)) + 12;
    lastPomMin = parseInt(modLastPom.slice(2, 4));
  }

  if (modLastPom.includes('PM') && modLastPom.length > 7) {
    lastPomHour = parseInt(modLastPom.slice(0, 2)) + 12;
    lastPomMin = parseInt(modLastPom.slice(3, 5));
  }

  if (modLastPom.includes('AM') && modLastPom.length > 7) {
    lastPomHour = parseInt(modLastPom.slice(0, 2));
    lastPomMin = parseInt(modLastPom.slice(3, 5));
  }

  if (modLastPom.includes('AM') && modLastPom.length < 8) {
    lastPomHour = parseInt(modLastPom.slice(0, 1));
    lastPomMin = parseInt(modLastPom.slice(2, 4));
  }

  let hourDifference = currentHour - lastPomHour;
  let minDifference = currentMin - lastPomMin;

  if (currentMin < lastPomMin) {
    hourDifference = hourDifference - 1;
    minDifference = lastPomMin - currentMin;
  }

  if (hourDifference > 1) {
    return `${hourDifference} hours and ${minDifference} minutes ago (Take a Pom!)`;
  } else if (hourDifference === 1) {
    return `an hour and ${minDifference} minutes ago (Take a Pom Soon!)`;
  } else {
    return `${minDifference} min ago (Keep at it!)`;
  }
};
