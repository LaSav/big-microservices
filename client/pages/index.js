import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>landing page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // We are on the server
    // Requests should be made to ingress-nginx
    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers,
      }
    );

    return data;
  } else {
    // We are on the browser
    // Requests can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');
    return data;
  }
  return {};
};

export default LandingPage;
