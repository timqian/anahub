/* eslint-disable no-new */
const svg = document.querySelector('.line-chart');

const lineChart = new chartXkcd.Line(svg, {
  title: 'Visitors', // optional
  // xLabel: 'Month', // optional
  // yLabel: '$ Dollors', // optional
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    datasets: [{
      label: 'Views',
      data: [30, 70, 200, 300, 500, 800, 1500, 2900, 5000, 8000],
    }, {
      label: 'Unique Views',
      data: [0, 1, 30, 70, 80, 100, 50, 80, 40, 150],
    }],
  },
  options: { // optional
    yTickCount: 3,
    legendPosition: chartXkcd.config.positionType.upLeft,
    unxkcdify: true,
  },
});

const svg1 = document.querySelector('.pie-chart1');
const svg2 = document.querySelector('.pie-chart2');
const svg3 = document.querySelector('.pie-chart3');
const svg4 = document.querySelector('.pie-chart4');

new chartXkcd.Pie(svg1, {
  title: 'Top pages', // optional
  data: {
    labels: ['/', '/aab', '/aae', '/asf', '/asg'],
    datasets: [{
      data: [500, 200, 80, 90, 100],
    }],
  },
  options: { // optional
    innerRadius: 0.5, unxkcdify: true,
  },
});
new chartXkcd.Pie(svg2, {
  title: 'Devices', // optional
  data: {
    labels: ['mobile', 'desktop'],
    datasets: [{
      data: [500, 200],
    }],
  },
  options: { // optional
    innerRadius: 0.5, unxkcdify: true,
  },
});
new chartXkcd.Pie(svg3, {
  title: 'Referring sites', // optional
  data: {
    labels: ['timqian.com', 'news.ycombinator.com', 'mail.google.com', 'blog.t9t.io', 'github.com'],
    datasets: [{
      data: [500, 200, 80, 90, 100],
    }],
  },
  options: { // optional
    innerRadius: 0.5, unxkcdify: true,
  },
});
new chartXkcd.Pie(svg4, {
  title: 'Countries', // optional
  data: {
    labels: ['China', 'USA', 'Canada', 'England', 'Austra'],
    datasets: [{
      data: [500, 20, 80, 90, 100],
    }],
  },
  options: { // optional
    innerRadius: 0.5, unxkcdify: true,
  },
});

// date picker

new Calendar({
  element: $('.datepicker'),
  earliest_date: '2018-09-01',
  latest_date: moment(),
  start_date: moment().subtract(29, 'days'),
  end_date: moment(),
  format: {
    input: 'MMM D, YYYY', // Format for the input fields
    jump_month: 'MMMM', // Format for the month switcher
    jump_year: 'YYYY' // Format for the year switcher
  },
  presets: [{
    label: 'Last 7 days',
    start: moment().subtract(7, 'days'),
    end: moment(),
  },{
    label: 'Last 30 days',
    start: moment().subtract(29, 'days'),
    end: moment(),
  }, {
    label: 'Last month',
    start: moment().subtract(1, 'month').startOf('month'),
    end: moment().subtract(1, 'month').endOf('month'),
  }, {
    label: 'Last year',
    start: moment().subtract(1, 'year').startOf('year'),
    end: moment().subtract(1, 'year').endOf('year'),
  }],
  callback() {
    const start = moment(this.start_date).format('ll');
    const end = moment(this.end_date).format('ll');

    console.debug(`Start Date: ${start}\nEnd Date: ${end}`);
  },
});
