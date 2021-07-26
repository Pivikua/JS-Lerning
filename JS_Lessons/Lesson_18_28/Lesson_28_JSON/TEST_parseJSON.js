let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( meetup.date ); // 30 - теперь работает!

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( schedule.meetups[1].date ); // 18 - отлично!