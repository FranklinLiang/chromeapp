function updateClock() {
    var now = new Date(),
        months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
        if (now.getMinutes() < 10)
          {
            if (now.getHours() < 12)
              {
                time = now.getHours() + ':' + '0' + now.getMinutes() + ' AM';
              }
            else if (now.getHours() == 12)
              {
                time = now.getHours() + ':' + '0' + now.getMinutes() + ' PM';
              }
            else if (now.getHours() == 24)
              {
                time = now.getHours() + ':' + '0' + now.getMinutes() + ' PM';
              }
            else
              {
                time = (now.getHours() - 12) + ':' + '0' + now.getMinutes() + ' PM';
              }
          }
        else
          {
            {
              if (now.getHours() < 12)
                {
                  time = now.getHours() + ':' + now.getMinutes() + ' AM';
                }
              else if (now.getHours() == 12)
                {
                  time = now.getHours() + ':' + now.getMinutes() + ' PM';
                }
              else if (now.getHours() == 24)
                {
                  time = now.getHours() + ':' + now.getMinutes() + ' PM';
                }
              else
                {
                  time = (now.getHours() - 12) + ':' + now.getMinutes() + ' PM';
                }
            }
          }

        date = [now.getDate(),
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}
updateClock();
