import {
  LINK_LIST
} from './types';

export const linkAction = () => {
  return (dispatch) => {
    dispatch({ type: LINK_LIST, payload: {} });
    var links = new Array();
    links.push({ title: 'myRutgers', url: 'https://cas.rutgers.edu/login?service=https://my.rutgers.edu/portal/Login', src: require('../images/Links/myRutgers.imageset/University-75.png') });
    links.push({ title: 'Sakai', url: 'https://cas.rutgers.edu/login?service=https%3A%2F%2Fsakai.rutgers.edu%2Fsakai-login-tool%2Fcontainer', src: require('../images/Links/sakai.imageset/Classroom-75.png') });
    links.push({ title: 'Library Hours', url: 'https://m.libraries.rutgers.edu/hours.php', src: require('../images/Links/clock.imageset/Clock-75.png') });
    links.push({ title: 'Targum', url: 'http://www.dailytargum.com/', src: require('../images/Links/news.imageset/News-75.png') });
    links.push({ title: 'RU Listings', url: 'https://www.rulistings.com', src: require('../images/Links/sale.imageset/Sales_75.png') });
    links.push({ title: 'Rutgers Reddit', url: 'https://m.reddit.com/r/rutgers/', src: require('../images/Links/reddit.imageset/Reddit-75.png') });
    links.push({ title: 'The Medium', url: 'https://rutgersthemedium.wordpress.com', src: require('../images/Links/monkey.imageset/Monkey_75.png') });
    links.push({ title: 'Student Organizations', url: 'https://rutgers.collegiatelink.net', src: require('../images/Links/organization.imageset/Map_75.png') });
    links.push({ title: 'Grades', url: 'https://cas.rutgers.edu/login?service=https://my.rutgers.edu/portal/Login%3fuP_fname=my-grades&uP_args=', src: require('../images/Links/grades.imageset/Exam-75.png') });
    links.push({ title: 'eCollege', url: 'https://cas.rutgers.edu/login?service=http%3A%2F%2Fonlinelearning.rutgers.edu%2Facademics.php', src: require('../images/Links/ecollege.imageset/Student-75.png') });
    links.push({ title: 'Financial Aid', url: 'https://finservices.rutgers.edu/otb/chooseSemester.htm?login=cas', src: require('../images/Links/bank.imageset/Bank-75.png') });
    dispatch({ type: LINK_LIST, payload: links });
  }
}
