function updateClock() {
    var now = new Date(),
        months = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
        if (now.getMinutes() < 10)
          {
            time = now.getHours() + ':' + '0' + now.getMinutes();
          }
        else
          {
            time = now.getHours() + ':' + now.getMinutes();
          }

        date = [now.getDate(),
                months[now.getMonth()],
                now.getFullYear()].join(' ');

    document.getElementById('time').innerHTML = [date, time].join(' / ');

    setTimeout(updateClock, 1000);
}
updateClock();
